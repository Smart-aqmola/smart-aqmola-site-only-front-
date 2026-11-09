
import { createServer } from 'node:http';
import { load } from 'cheerio';

const sourceUrl =
  'https://www.gov.kz/org/aqmola-digital/press/news/1?lang=ru';

const CACHE_TIME = 60 * 60 * 1000;

let cachedNews = null;
let lastUpdate = 0;

let pendingNews = null;

// Превращаем русскую дату в формат YYYY-MM-DD
function formatDate(date) {
  const months = {
    января: '01',
    февраля: '02',
    марта: '03',
    апреля: '04',
    мая: '05',
    июня: '06',
    июля: '07',
    августа: '08',
    сентября: '09',
    октября: '10',
    ноября: '11',
    декабря: '12'
  };

  const parts = date.match(/^(\d{1,2})\s+([а-яё]+)\s+(\d{4})$/i);

  if (!parts) return null;

  const month = months[parts[2].toLowerCase()];
  if (!month) return null;

  return `${parts[3]}-${month}-${parts[1].padStart(2, '0')}`;
}

// Получаем реальные новости
async function getNews() {
  if (cachedNews && Date.now() - lastUpdate < CACHE_TIME) {
    return cachedNews;
  }

  const response = await fetch(sourceUrl, {
  signal: AbortSignal.timeout(15000)
});

  if (!response.ok) {
    throw new Error(`Ошибка gov.kz: ${response.status}`);
  }

  const html = await response.text();
  const $ = load(html);
  const news = [];

  $('.card-news-list__link').each((index, element) => {
    const title = $(element).attr('title');
    const href = $(element).attr('href');

    const date = $(element)
      .closest('li')
      .find('.card-news-list__category')
      .filter((index, el) => {
        const text = $(el).text().trim();

        return /^\d{1,2}\s+[а-яё]+\s+\d{4}$/i.test(text);
      })
      .first()
      .text()
      .trim();

    if (title && href) {
      const url = new URL(href, 'https://www.gov.kz').href;
      const id = Number(url.match(/\/details\/(\d+)/)?.[1]);

      if (!id) return;

      news.push({
        id,
        title,
        url,
        date,
        published_at: formatDate(date),
        summary: '',
        image_url: null
      });
    }
  });

  if (news.length === 0) {
    throw new Error('Новости не найдены');
  }

  // Получаем изображения каждой новости
  for (const item of news) {
    try {
      const response = await fetch(item.url, {
  signal: AbortSignal.timeout(15000)
});

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const detailHtml = await response.text();
      const $detail = load(detailHtml);

      const image = $detail('meta[property="og:image"]')
        .attr('content');

      item.image_url = image || null;
    } catch (error) {
      console.error('Ошибка изображения:', item.url, error);
    }
  }

  cachedNews = { results: news };
  lastUpdate = Date.now();

  return cachedNews;
}

// Наш HTTP-сервер
const server = createServer(async (req, res) => {
  console.log('Запрошенный путь:', req.url);

  if (req.url === '/api/news') {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    try {
      if (!pendingNews) {
  pendingNews = getNews().finally(() => {
    pendingNews = null;
  });
}

const news = await pendingNews;

      res.end(JSON.stringify(news));
    } catch (error) {
      console.error('Ошибка получения новостей:', error);

      if (cachedNews) {
        res.end(JSON.stringify(cachedNews));
      } else {
        res.statusCode = 502;
        res.end(JSON.stringify({
          results: [],
          error: 'Не удалось получить новости'
        }));
      }
    }

    return;
  }

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('Главная страница');
});

server.listen(3002, () => {
  console.log('Сервер запущен: http://localhost:3002');
});
