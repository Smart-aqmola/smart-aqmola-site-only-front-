import type { Language } from '../content'

type ServiceText = { title: string; description: string }
type DigitalService = {
  id: 'residents' | 'government' | 'business'
  href: string
  text: Record<Language, ServiceText>
}
type DigitalServicesContent = { title: string; description: string; more: string; all: string }

export const digitalServicesContent: Record<Language, DigitalServicesContent> = {
  RU: {
    title: 'Цифровые сервисы Smart Aqmola',
    description: 'Современные цифровые решения для жителей, государственных организаций и бизнеса Акмолинской области.',
    more: 'Перейти', all: 'Все цифровые сервисы',
  },
  KZ: {
    title: 'Smart Aqmola цифрлық сервистері',
    description: 'Ақмола облысының тұрғындарына, мемлекеттік ұйымдарына және бизнесіне арналған заманауи цифрлық шешімдер.',
    more: 'Өту', all: 'Барлық цифрлық сервистер',
  },
  EN: {
    title: 'Smart Aqmola digital services',
    description: 'Modern digital solutions for residents, government organizations and businesses in the Aqmola region.',
    more: 'Explore', all: 'All digital services',
  },
}

// Ссылки ведут на будущие страницы каталога цифровых сервисов.
export const digitalServices: DigitalService[] = [
  {
    id: 'residents', href: '/services/residents',
    text: {
      RU: { title: 'Сервисы для жителей', description: 'Удобный доступ к региональной информации и цифровым инструментам для повседневных задач.' },
      KZ: { title: 'Тұрғындарға арналған сервистер', description: 'Өңірлік ақпарат пен күнделікті міндеттерге арналған цифрлық құралдарға ыңғайлы қолжетімділік.' },
      EN: { title: 'Services for residents', description: 'Convenient access to regional information and digital tools for everyday needs.' },
    },
  },
  {
    id: 'government', href: '/services/government',
    text: {
      RU: { title: 'Сервисы для государственных организаций', description: 'Цифровые инструменты для работы с данными, взаимодействия и управления региональными процессами.' },
      KZ: { title: 'Мемлекеттік ұйымдарға арналған сервистер', description: 'Деректермен жұмыс істеуге, өзара іс-қимылға және өңірлік процестерді басқаруға арналған цифрлық құралдар.' },
      EN: { title: 'Services for government organizations', description: 'Digital tools for working with data, collaborating and managing regional processes.' },
    },
  },
  {
    id: 'business', href: '/services/business',
    text: {
      RU: { title: 'Сервисы для бизнеса', description: 'Информационные ресурсы и цифровые решения для развития предпринимательства в регионе.' },
      KZ: { title: 'Бизнеске арналған сервистер', description: 'Өңірдегі кәсіпкерлікті дамытуға арналған ақпараттық ресурстар мен цифрлық шешімдер.' },
      EN: { title: 'Services for businesses', description: 'Information resources and digital solutions to support business development in the region.' },
    },
  },
]
