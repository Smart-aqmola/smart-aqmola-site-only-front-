export type Language = 'KZ' | 'RU' | 'EN'

export const navigationPaths = ['/', '/about', '/structure', '/projects', '/news', '/achievements', '/careers', '/documents', '/contacts']

export const content = {
  RU: {
    navigation: ['Главная', 'Об организации', 'Структура', 'Проекты', 'Новости и мероприятия', 'Достижения', 'Вакансии', 'Документы', 'Контакты'],
    search: 'Поиск по сайту...', searchLabel: 'Поиск разделов сайта', empty: 'Разделы не найдены',
    menu: 'Меню', close: 'Закрыть меню', language: 'Язык сайта',
    label: 'Технологии для развития региона',
    title: 'SMART AQMOLA —', accent: 'цифровое будущее региона',
    description: 'Создаём и внедряем современные цифровые решения, развиваем информационные системы и обеспечиваем технологическое развитие Акмолинской области',
    projects: 'Наши проекты', about: 'Об организации', region: 'Акмолинская область', network: 'Цифровая экосистема', skip: 'Перейти к содержимому',
  },
  KZ: {
    navigation: ['Басты бет', 'Ұйым туралы', 'Құрылым', 'Жобалар', 'Жаңалықтар мен іс-шаралар', 'Жетістіктер', 'Бос жұмыс орындары', 'Құжаттар', 'Байланыс'],
    search: 'Сайттан іздеу...', searchLabel: 'Сайт бөлімдерін іздеу', empty: 'Бөлімдер табылмады',
    menu: 'Мәзір', close: 'Мәзірді жабу', language: 'Сайт тілі',
    label: 'Өңірді дамытуға арналған технологиялар',
    title: 'SMART AQMOLA —', accent: 'өңірдің цифрлық болашағы',
    description: 'Заманауи цифрлық шешімдерді жасаймыз және енгіземіз, ақпараттық жүйелерді дамытамыз және Ақмола облысының технологиялық дамуын қамтамасыз етеміз',
    projects: 'Біздің жобалар', about: 'Ұйым туралы', region: 'Ақмола облысы', network: 'Цифрлық экожүйе', skip: 'Мазмұнға өту',
  },
  EN: {
    navigation: ['Home', 'About us', 'Structure', 'Projects', 'News and events', 'Achievements', 'Careers', 'Documents', 'Contacts'],
    search: 'Search the site...', searchLabel: 'Search site sections', empty: 'No sections found',
    menu: 'Menu', close: 'Close menu', language: 'Site language',
    label: 'Technology for regional development',
    title: 'SMART AQMOLA —', accent: 'the digital future of the region',
    description: 'We create and implement modern digital solutions, develop information systems, and support the technological development of the Aqmola region',
    projects: 'Our projects', about: 'About us', region: 'Aqmola region', network: 'Digital ecosystem', skip: 'Skip to content',
  },
}
