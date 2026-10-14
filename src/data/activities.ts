import type { Language } from '../content'

 type ActivitiesContent = {
  title: string
  all: string
  items: string[]
}

export const activitiesContent: Record<Language, ActivitiesContent> = {
  RU: {
    title: 'Основные направления деятельности',
    all: 'Все направления',
    items: ['Разработка и сопровождение информационных систем', 'Цифровизация государственных процессов', 'Развитие цифровых платформ', 'Интеграция информационных систем', 'Внедрение технологий искусственного интеллекта', 'Техническая поддержка и сопровождение'],
  },
  KZ: {
    title: 'Қызметтің негізгі бағыттары',
    all: 'Барлық бағыттар',
    items: ['Ақпараттық жүйелерді әзірлеу және сүйемелдеу', 'Мемлекеттік процестерді цифрландыру', 'Цифрлық платформаларды дамыту', 'Ақпараттық жүйелерді біріктіру', 'Жасанды интеллект технологияларын енгізу', 'Техникалық қолдау және сүйемелдеу'],
  },
  EN: {
    title: 'Our main areas of activity',
    all: 'All areas',
    items: ['Information system development and maintenance', 'Digitalization of government processes', 'Digital platform development', 'Information system integration', 'Artificial intelligence implementation', 'Technical support and maintenance'],
  },
}


