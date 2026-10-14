import type { Language } from '../content'

type EventText = {
  date: string
  title: string
  description: string
  location: string
}

type EventItem = {
  id: string
  dateTime: string
  href: string
  text: Record<Language, EventText>
}

type EventsContent = { title: string; all: string; details: string; location: string }

export const eventsContent: Record<Language, EventsContent> = {
  RU: { title: 'Ближайшие мероприятия', all: 'Все мероприятия', details: 'Подробнее', location: 'Место проведения' },
  KZ: { title: 'Алдағы іс-шаралар', all: 'Барлық іс-шаралар', details: 'Толығырақ', location: 'Өтетін орны' },
  EN: { title: 'Upcoming events', all: 'All events', details: 'Learn more', location: 'Location' },
}

// Временные нейтральные данные для макета, не подтверждённый анонс мероприятий.
// Даты, названия, описания, места проведения и ссылки заменить утверждёнными перед запуском.
export const events: EventItem[] = [
  {
    id: 'digital-services-meeting', dateTime: '2026-11-05', href: '/events/digital-services-meeting',
    text: {
      RU: { date: '5 ноября 2026', title: 'Встреча по развитию цифровых сервисов', description: 'Обсуждение задач пользователей и подходов к развитию цифровых решений для региона.', location: 'Кокшетау, место уточняется' },
      KZ: { date: '2026 жылғы 5 қараша', title: 'Цифрлық сервистерді дамыту жөніндегі кездесу', description: 'Пайдаланушылардың міндеттері мен өңірге арналған цифрлық шешімдерді дамыту тәсілдерін талқылау.', location: 'Көкшетау, орны нақтыланады' },
      EN: { date: '5 November 2026', title: 'Digital services development meeting', description: 'A discussion of user needs and approaches to developing digital solutions for the region.', location: 'Kokshetau, venue to be confirmed' },
    },
  },
  {
    id: 'data-workshop', dateTime: '2026-11-12', href: '/events/data-workshop',
    text: {
      RU: { date: '12 ноября 2026', title: 'Семинар по работе с данными', description: 'Обмен опытом по подготовке, анализу и использованию данных в информационных системах.', location: 'Онлайн' },
      KZ: { date: '2026 жылғы 12 қараша', title: 'Деректермен жұмыс істеу семинары', description: 'Ақпараттық жүйелердегі деректерді дайындау, талдау және пайдалану бойынша тәжірибе алмасу.', location: 'Онлайн' },
      EN: { date: '12 November 2026', title: 'Data workshop', description: 'An exchange of experience in preparing, analyzing and using data in information systems.', location: 'Online' },
    },
  },
  {
    id: 'technology-discussion', dateTime: '2026-11-19', href: '/events/technology-discussion',
    text: {
      RU: { date: '19 ноября 2026', title: 'Обсуждение технологических решений', description: 'Рабочая встреча о практическом применении технологий и взаимодействии проектных команд.', location: 'Кокшетау, место уточняется' },
      KZ: { date: '2026 жылғы 19 қараша', title: 'Технологиялық шешімдерді талқылау', description: 'Технологияларды іс жүзінде қолдану және жоба топтарының өзара іс-қимылы туралы жұмыс кездесуі.', location: 'Көкшетау, орны нақтыланады' },
      EN: { date: '19 November 2026', title: 'Technology solutions discussion', description: 'A working meeting on practical uses of technology and collaboration between project teams.', location: 'Kokshetau, venue to be confirmed' },
    },
  },
]
