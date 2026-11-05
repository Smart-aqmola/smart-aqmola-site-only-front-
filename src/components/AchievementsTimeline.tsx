import { useEffect, useRef } from 'react'
import type { Language } from '../content'
import '../styles/achievements-timeline.css'

const labels = {
  RU: { title: 'Путь достижений — 2026', subtitle: 'Ключевые события цифрового развития Акмолинской области' },
  KZ: { title: 'Жетістіктер жолы — 2026', subtitle: 'Ақмола облысының цифрлық дамуындағы негізгі оқиғалар' },
  EN: { title: 'A journey of achievements — 2026', subtitle: 'Key milestones in the digital development of the Aqmola region' },
}

const events = [
  {
    date: '2026-04-24', icon: 'award',
    text: {
      RU: { date: '24 апреля 2026', title: 'Победа в AI Governance Cup 2026', description: 'Информационно-аналитическая система Smart Aqmola победила в номинации «AI Өңір». Торжественное награждение состоялось в Астане в центре искусственного интеллекта alem.ai.' },
      KZ: { date: '2026 жылғы 24 сәуір', title: 'AI Governance Cup 2026 байқауындағы жеңіс', description: 'Smart Aqmola ақпараттық-талдау жүйесі «AI Өңір» номинациясында жеңіске жетті. Салтанатты марапаттау Астанадағы alem.ai жасанды интеллект орталығында өтті.' },
      EN: { date: '24 April 2026', title: 'Victory at AI Governance Cup 2026', description: 'The Smart Aqmola information and analytics system won the AI Өңір nomination. The award ceremony took place at the alem.ai artificial intelligence center in Astana.' },
    },
  },
  {
    date: '2026-06-13', icon: 'esports',
    text: {
      RU: { date: '13 июня 2026', title: 'Старт Akmola International Esports Cup', description: 'Начались отборочные соревнования международного киберспортивного турнира. После онлайн-квалификаций и плей-офф лучшие участники вышли в финал.' },
      KZ: { date: '2026 жылғы 13 маусым', title: 'Akmola International Esports Cup басталуы', description: 'Халықаралық киберспорт турнирінің іріктеу жарыстары басталды. Онлайн іріктеулер мен плей-офф кезеңдерінен кейін үздік қатысушылар финалға шықты.' },
      EN: { date: '13 June 2026', title: 'Akmola International Esports Cup begins', description: 'Qualifying competitions for the international esports tournament began. Following online qualifiers and playoffs, the best participants advanced to the final.' },
    },
  },
  {
    date: '2026-07-05', icon: 'final',
    text: {
      RU: { date: '5 июля 2026', title: 'Международный LAN-финал', description: 'В спортивном комплексе Kokshe Arena в Кокшетау прошёл финал турнира с участниками из пяти стран Центральной Азии. Общий призовой фонд турнира составлял 5 миллионов тенге.' },
      KZ: { date: '2026 жылғы 5 шілде', title: 'Халықаралық LAN-финал', description: 'Көкшетаудағы Kokshe Arena спорт кешенінде Орталық Азияның бес елінен келген қатысушылармен турнир финалы өтті. Турнирдің жалпы жүлде қоры 5 миллион теңгені құрады.' },
      EN: { date: '5 July 2026', title: 'International LAN final', description: 'The tournament final took place at Kokshe Arena in Kokshetau, with participants from five Central Asian countries. The tournament’s total prize pool was 5 million tenge.' },
    },
  },
] as const

function TimelineIcon({ kind }: { kind: typeof events[number]['icon'] }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {kind === 'award' ? <><path d="M7 3h10v5a5 5 0 0 1-10 0V3Zm0 2H3v3a4 4 0 0 0 4 4m10-7h4v3a4 4 0 0 1-4 4M12 13v5m-5 3h10l-2-3H9Z" /></>
        : kind === 'esports' ? <><path d="M7 8h10a4 4 0 0 1 4 4l1 5a2 2 0 0 1-3 2l-4-3H9l-4 3a2 2 0 0 1-3-2l1-5a4 4 0 0 1 4-4Z" /><path d="M6 11v4m-2-2h4m8-1h.01m3 2h.01" /></>
          : <><path d="M4 21V4m0 0c5-4 11 4 16 0v11c-5 4-11-4-16 0" /><path d="m10 8 2 2 4-3" /></>}
    </svg>
  )
}

export default function AchievementsTimeline({ language }: { language: Language }) {
  const listRef = useRef<HTMLOListElement>(null)

  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('timeline-entered')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    listRef.current?.querySelectorAll('.achievements-timeline-item').forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="achievement-content-section achievements-timeline" aria-labelledby="achievements-timeline-title">
      <h2 id="achievements-timeline-title">{labels[language].title}</h2>
      <p className="achievement-section-intro">{labels[language].subtitle}</p>
      <ol className="achievements-timeline-list" ref={listRef}>
        {events.map(event => (
          <li className="achievements-timeline-item" key={event.date}>
            <span className="achievements-timeline-marker"><TimelineIcon kind={event.icon} /></span>
            <details className="achievements-timeline-card" open>
              <summary>
                <time dateTime={event.date}>{event.text[language].date}</time>
                <h3>{event.text[language].title}</h3>
                <svg className="achievements-timeline-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
              </summary>
              <p>{event.text[language].description}</p>
            </details>
          </li>
        ))}
      </ol>
    </section>
  )
}
