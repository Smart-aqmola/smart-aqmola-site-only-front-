import type { Language } from '../content'
import type { ReactNode } from 'react'

const copy = {
  RU: {
    events: 'Значимые события', eventTitle: 'Akmola International Esports Cup 2026', eventText: 'Международный турнир, объединяющий киберспортивное сообщество Центральной Азии.',
    eventFacts: [['5 стран', 'Участники из Центральной Азии'], ['4', 'Киберспортивные дисциплины'], ['5 млн ₸', 'Призовой фонд'], ['5 июля 2026', 'LAN-финал · Kokshe Arena']],
    results: 'Результаты цифровизации', resultsIntro: 'Практические направления работы: от мониторинга территорий до обработки обращений жителей.',
    resultCards: [
      ['Единая инфраструктура дронов', 'Охват — 17 районов Акмолинской области и Кокшетау. Мониторинг территорий, паводковой и пожарной обстановки.'],
      ['ИИ и аналитика', 'Инструменты интеллектуального анализа данных, генерации отчётов и протоколирования совещаний.'],
      ['Мониторинг интернета в школах', 'Цифровая система контроля качества подключения образовательных учреждений.'],
      ['Обращения по вопросам связи', 'CRM-система и Telegram-бот для регистрации обращений и маршрутизации заявок.'],
    ],
    solutions: 'Наши цифровые решения', solutionsIntro: 'Развиваем цифровые инструменты для работы с данными, задачами и обращениями.',
    solutionCards: [
      ['ИАС Smart Aqmola', 'Объединение данных и аналитики для подготовки управленческих решений.'],
      ['Система управления задачами «Планка»', 'Организация командной работы, распределение задач и контроль их исполнения.'],
      ['Цифровые инструменты контакт-центра 109', 'Развитие инструментов для обработки обращений жителей и взаимодействия с ответственными службами.'],
    ],
    awardFacts: [['184 заявки', 'На конкурс со всей республики'], ['24 апреля 2026', 'Дата награждения'], ['AI Өңір', 'Номинация победителя']],
  },
  KZ: {
    events: 'Маңызды іс-шаралар', eventTitle: 'Akmola International Esports Cup 2026', eventText: 'Орталық Азияның киберспорт қауымдастығын біріктіретін халықаралық турнир.',
    eventFacts: [['5 ел', 'Орталық Азиядан қатысушылар'], ['4', 'Киберспорт пәні'], ['5 млн ₸', 'Жүлде қоры'], ['2026 жылғы 5 шілде', 'LAN-финал · Kokshe Arena']],
    results: 'Цифрландыру нәтижелері', resultsIntro: 'Аумақтарды бақылаудан тұрғындардың өтініштерін өңдеуге дейінгі практикалық жұмыс бағыттары.',
    resultCards: [
      ['Дрондардың бірыңғай инфрақұрылымы', 'Ақмола облысының 17 ауданы мен Көкшетауды қамту. Аумақтарды, су тасқыны мен өрт жағдайын бақылау.'],
      ['Жасанды интеллект және талдау', 'Деректерді зияткерлік талдау, есептер жасау және кеңестерді хаттамалау құралдары.'],
      ['Мектептердегі интернет мониторингі', 'Білім беру ұйымдарының интернетке қосылу сапасын бақылаудың цифрлық жүйесі.'],
      ['Байланыс мәселелері бойынша өтініштер', 'Өтініштерді тіркеу және бағыттау үшін CRM жүйесі мен Telegram-бот.'],
    ],
    solutions: 'Біздің цифрлық шешімдер', solutionsIntro: 'Деректермен, міндеттермен және өтініштермен жұмыс істеуге арналған цифрлық құралдарды дамытамыз.',
    solutionCards: [
      ['Smart Aqmola ақпараттық-талдау жүйесі', 'Басқарушылық шешімдерді дайындау үшін деректер мен талдауды біріктіру.'],
      ['«Планка» міндеттерді басқару жүйесі', 'Командалық жұмысты ұйымдастыру, міндеттерді бөлу және орындалуын бақылау.'],
      ['109 байланыс орталығының цифрлық құралдары', 'Тұрғындардың өтініштерін өңдеу және жауапты қызметтермен өзара іс-қимыл құралдарын дамыту.'],
    ],
    awardFacts: [['184 өтінім', 'Байқауға бүкіл республикадан'], ['2026 жылғы 24 сәуір', 'Марапаттау күні'], ['AI Өңір', 'Жеңімпаз номинациясы']],
  },
  EN: {
    events: 'Notable events', eventTitle: 'Akmola International Esports Cup 2026', eventText: 'An international tournament bringing together the esports community of Central Asia.',
    eventFacts: [['5 countries', 'Participants from Central Asia'], ['4', 'Esports disciplines'], ['₸5 million', 'Prize pool'], ['5 July 2026', 'LAN final · Kokshe Arena']],
    results: 'Digitalization results', resultsIntro: 'Practical areas of work, from monitoring territories to handling residents’ requests.',
    resultCards: [
      ['Unified drone infrastructure', 'Coverage of 17 districts of the Aqmola region and Kokshetau. Monitoring territories, flood conditions and fire conditions.'],
      ['AI and analytics', 'Tools for intelligent data analysis, report generation and meeting minutes.'],
      ['School internet monitoring', 'A digital system for monitoring connectivity quality in educational institutions.'],
      ['Connectivity requests', 'A CRM system and Telegram bot for registering and routing requests about connectivity.'],
    ],
    solutions: 'Our digital solutions', solutionsIntro: 'Developing digital tools for working with data, tasks and residents’ requests.',
    solutionCards: [
      ['Smart Aqmola information and analytics system', 'Bringing data and analytics together to support management decisions.'],
      ['Planka task management system', 'Organizing teamwork, assigning tasks and tracking their completion.'],
      ['Digital tools for the 109 contact center', 'Developing tools to process residents’ requests and coordinate with responsible services.'],
    ],
    awardFacts: [['184 applications', 'Submitted nationwide to the competition'], ['24 April 2026', 'Award ceremony'], ['AI Өңір', 'Winning nomination']],
  },
}

const iconPaths: Record<string, ReactNode> = {
  event: <><path d="M7 8h10a4 4 0 0 1 4 4l1 5a2 2 0 0 1-3 2l-4-3H9l-4 3a2 2 0 0 1-3-2l1-5a4 4 0 0 1 4-4Z" /><path d="M6 11v4m-2-2h4m8-1h.01m3 2h.01" /></>,
  drone: <><rect x="8" y="8" width="8" height="8" rx="3" /><path d="m8 8-3-3m11 3 3-3M8 16l-3 3m11-3 3 3" /><circle cx="4" cy="4" r="3" /><circle cx="20" cy="4" r="3" /><circle cx="4" cy="20" r="3" /><circle cx="20" cy="20" r="3" /></>,
  ai: <><rect x="6" y="6" width="12" height="12" rx="3" /><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4m-12-4h4v4h-4Z" /></>,
  school: <><path d="m2 9 10-6 10 6-10 6ZM6 12v6a12 12 0 0 0 12 0v-6m4-3v9" /><path d="M9 20h6" /></>,
  requests: <><path d="M3 4h18v12H9l-6 5V4Z" /><path d="M7 8h10M7 12h6" /></>,
  data: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" /></>,
  tasks: <><rect x="4" y="3" width="16" height="18" rx="3" /><path d="m7 9 2 2 3-4m2 2h3M7 16h10" /></>,
  support: <><path d="M4 14v-3a8 8 0 0 1 16 0v6a4 4 0 0 1-4 4h-3" /><rect x="2" y="11" width="5" height="7" rx="2" /><rect x="17" y="11" width="5" height="7" rx="2" /></>,
}

function SectionIcon({ kind }: { kind: string }) {
  return <span className="achievement-section-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{iconPaths[kind]}</svg></span>
}

export function AwardFacts({ language }: { language: Language }) {
  return <dl className="achievement-award-facts">{copy[language].awardFacts.map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
}

export default function AchievementSections({ language }: { language: Language }) {
  const text = copy[language]
  return (
    <>
      <section className="achievement-content-section" aria-labelledby="achievement-events-title">
        <h2 id="achievement-events-title">{text.events}</h2>
        <article className="achievement-event-card">
          <SectionIcon kind="event" />
          <div className="achievement-event-copy"><h3>{text.eventTitle}</h3><p>{text.eventText}</p></div>
          <dl className="achievement-event-facts">{text.eventFacts.map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        </article>
      </section>
      <section className="achievement-content-section" aria-labelledby="achievement-results-title">
        <h2 id="achievement-results-title">{text.results}</h2>
        <p className="achievement-section-intro">{text.resultsIntro}</p>
        <div className="achievement-results-grid">{text.resultCards.map(([title, description], index) => (
          <article className="achievement-result-card" key={title}>
            <SectionIcon kind={['drone', 'ai', 'school', 'requests'][index]} />
            <h3>{title}</h3><p>{description}</p>
          </article>
        ))}</div>
      </section>
      <section className="achievement-content-section" aria-labelledby="achievement-solutions-title">
        <h2 id="achievement-solutions-title">{text.solutions}</h2>
        <p className="achievement-section-intro">{text.solutionsIntro}</p>
        <div className="achievement-solutions-grid">{text.solutionCards.map(([title, description], index) => (
          <article className="achievement-solution-card" key={title}>
            <SectionIcon kind={['data', 'tasks', 'support'][index]} />
            <h3>{title}</h3><p>{description}</p>
          </article>
        ))}</div>
      </section>
    </>
  )
}
