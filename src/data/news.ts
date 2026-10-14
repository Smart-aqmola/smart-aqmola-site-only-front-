import type { Language } from '../content'
import forumImage from '../assets/news/digital-forum.svg'
import moduleImage from '../assets/news/digital-module.svg'
import conferenceImage from '../assets/news/conference.svg'

type NewsText = { date: string; title: string; description: string }

export type NewsItem = {
  id: string
  dateTime: string
  image: string
  href: string
  text: Record<Language, NewsText>
}

export const newsContent = {
  RU: { title: 'Новости и мероприятия', all: 'Все новости', details: 'Подробнее' },
  KZ: { title: 'Жаңалықтар мен іс-шаралар', all: 'Барлық жаңалықтар', details: 'Толығырақ' },
  EN: { title: 'News and events', all: 'All news', details: 'Read more' },
}

// Тестовые публикации: заменить утверждёнными новостями перед запуском сайта.
export const news: NewsItem[] = [
  {
    id: 'digital-services-forum', dateTime: '2026-10-12', image: forumImage, href: '/news/digital-services-forum',
    text: {
      RU: { date: '12 октября 2026', title: 'В Кокшетау прошёл форум по цифровизации государственных услуг', description: 'Состоялся региональный форум с участием представителей государственных органов и IT-компаний.' },
      KZ: { date: '2026 жылғы 12 қазан', title: 'Көкшетауда мемлекеттік қызметтерді цифрландыру форумы өтті', description: 'Мемлекеттік органдар мен IT-компаниялар өкілдерінің қатысуымен өңірлік форум өтті.' },
      EN: { date: '12 October 2026', title: 'Kokshetau hosted a forum on digitalization of government services', description: 'A regional forum brought together representatives of government agencies and IT companies.' },
    },
  },
  {
    id: 'smart-aqmola-module', dateTime: '2026-10-05', image: moduleImage, href: '/news/smart-aqmola-module',
    text: {
      RU: { date: '5 октября 2026', title: 'Запуск нового модуля в системе Smart Aqmola', description: 'Введён в эксплуатацию новый цифровой модуль для работы с данными.' },
      KZ: { date: '2026 жылғы 5 қазан', title: 'Smart Aqmola жүйесінде жаңа модуль іске қосылды', description: 'Деректермен жұмыс істеуге арналған жаңа цифрлық модуль пайдалануға берілді.' },
      EN: { date: '5 October 2026', title: 'A new module launched in Smart Aqmola', description: 'A new digital module for working with data has been put into operation.' },
    },
  },
  {
    id: 'national-conference', dateTime: '2026-09-28', image: conferenceImage, href: '/news/national-conference',
    text: {
      RU: { date: '28 сентября 2026', title: 'Сотрудники Smart Aqmola приняли участие в республиканской конференции', description: 'Команда представила опыт внедрения цифровых решений в Акмолинской области.' },
      KZ: { date: '2026 жылғы 28 қыркүйек', title: 'Smart Aqmola қызметкерлері республикалық конференцияға қатысты', description: 'Команда Ақмола облысында цифрлық шешімдерді енгізу тәжірибесін ұсынды.' },
      EN: { date: '28 September 2026', title: 'Smart Aqmola staff took part in a national conference', description: 'The team shared its experience implementing digital solutions in the Aqmola region.' },
    },
  },
]
