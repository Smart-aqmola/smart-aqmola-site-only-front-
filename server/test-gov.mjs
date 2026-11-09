import { load } from 'cheerio';

const url = 'https://www.gov.kz/org/aqmola-digital/press/news/1?lang=ru';

const response = await fetch(url);
console.log('Статус:', response.status);

const html = await response.text();

const $ = load(html);

const news = [];

$('.card-news-list__link').each((index, element) => {
  const title = $(element).attr('title');
  const href = $(element).attr('href');

  // Находим именно дату, а не название категории
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
    news.push({
      title: title,
      url: new URL(href, 'https://www.gov.kz').href,
      date: date
    });
  }
});

// Получаем изображения с отдельных страниц новостей
for (const item of news) {
  const response = await fetch(item.url);
  const detailHtml = await response.text();

  const $detail = load(detailHtml);

  const image = $detail('meta[property="og:image"]')
    .attr('content');

  item.image_url = image || null;
}

// Превращаем массив новостей в JSON
console.log(JSON.stringify({ results: news }, null, 2));