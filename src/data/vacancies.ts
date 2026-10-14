import type { Language } from '../content'

type VacancyText = { title: string; description: string; direction: string }
type Vacancy = { id: string; href: string; text: Record<Language, VacancyText> }
type VacanciesContent = { title: string; intro: string; all: string; details: string }

export const vacanciesContent: Record<Language, VacanciesContent> = {
  RU: {
    title: 'Вакансии',
    intro: 'Работа в Smart Aqmola — участие в развитии цифровых решений для региона и совместная работа над полезными технологиями.',
    all: 'Все вакансии', details: 'Подробнее',
  },
  KZ: {
    title: 'Бос жұмыс орындары',
    intro: 'Smart Aqmola-дағы жұмыс — өңірге арналған цифрлық шешімдерді дамытуға қатысу және пайдалы технологияларды бірлесіп жасау.',
    all: 'Барлық бос жұмыс орындары', details: 'Толығырақ',
  },
  EN: {
    title: 'Careers',
    intro: 'Working at Smart Aqmola means contributing to digital solutions for the region and building useful technologies together.',
    all: 'All vacancies', details: 'Learn more',
  },
}

// Временные нейтральные данные для макета, не подтверждённые открытые вакансии.
// Названия, описания, направления и адреса заменить утверждёнными перед запуском.
export const vacancies: Vacancy[] = [
  {
    id: 'developer', href: '/careers/developer',
    text: {
      RU: { title: 'Разработчик информационных систем', description: 'Разработка и сопровождение цифровых сервисов, участие в развитии региональных информационных систем.', direction: 'Разработка' },
      KZ: { title: 'Ақпараттық жүйелерді әзірлеуші', description: 'Цифрлық сервистерді әзірлеу және сүйемелдеу, өңірлік ақпараттық жүйелерді дамытуға қатысу.', direction: 'Әзірлеу' },
      EN: { title: 'Information systems developer', description: 'Develop and maintain digital services and contribute to regional information systems.', direction: 'Development' },
    },
  },
  {
    id: 'systems-analyst', href: '/careers/systems-analyst',
    text: {
      RU: { title: 'Системный аналитик', description: 'Анализ задач и требований, описание процессов и подготовка решений совместно с командой разработки.', direction: 'Аналитика' },
      KZ: { title: 'Жүйелік талдаушы', description: 'Міндеттер мен талаптарды талдау, процестерді сипаттау және әзірлеу тобымен бірге шешімдер дайындау.', direction: 'Талдау' },
      EN: { title: 'Systems analyst', description: 'Analyze requirements, document processes and shape solutions with the development team.', direction: 'Analytics' },
    },
  },
  {
    id: 'support-specialist', href: '/careers/support-specialist',
    text: {
      RU: { title: 'Специалист технической поддержки', description: 'Помощь пользователям цифровых сервисов, обработка обращений и сопровождение информационных систем.', direction: 'Техническая поддержка' },
      KZ: { title: 'Техникалық қолдау маманы', description: 'Цифрлық сервистер пайдаланушыларына көмектесу, өтініштерді өңдеу және ақпараттық жүйелерді сүйемелдеу.', direction: 'Техникалық қолдау' },
      EN: { title: 'Technical support specialist', description: 'Help digital service users, handle support requests and maintain information systems.', direction: 'Technical support' },
    },
  },
]
