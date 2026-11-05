import type { Language } from '../content'

const text = {
  RU: {
    section: 'Награда крупным планом',
    title: 'Статуэтка «AI Өңір» — символ признания цифровых достижений',
    description: '24 апреля 2026 года информационно-аналитическая система Smart Aqmola победила в национальном конкурсе AI Governance Cup 2026 в номинации «AI Өңір». Статуэтка победителя символизирует признание работы команды по внедрению современных цифровых решений и искусственного интеллекта в управление регионом.',
    video: 'Видео статуэтки победителя AI Governance Cup 2026',
    fallback: 'Открыть видео со статуэткой',
  },
  KZ: {
    section: 'Марапатқа жақыннан көзқарас',
    title: '«AI Өңір» мүсіншесі — цифрлық жетістіктерді мойындау белгісі',
    description: '2026 жылғы 24 сәуірде Smart Aqmola ақпараттық-талдау жүйесі AI Governance Cup 2026 ұлттық байқауының «AI Өңір» номинациясында жеңіске жетті. Жеңімпаз мүсіншесі команданың өңірді басқаруға заманауи цифрлық шешімдер мен жасанды интеллектіні енгізу жөніндегі еңбегінің мойындалуын білдіреді.',
    video: 'AI Governance Cup 2026 жеңімпазының мүсіншесі туралы бейне',
    fallback: 'Мүсінше туралы бейнені ашу',
  },
  EN: {
    section: 'The award up close',
    title: 'The AI Өңір trophy — recognition of digital achievements',
    description: 'On 24 April 2026, the Smart Aqmola information and analytics system won the AI Өңір nomination at the national AI Governance Cup 2026 competition. The winner’s trophy symbolizes recognition of the team’s work to introduce modern digital solutions and artificial intelligence into regional governance.',
    video: 'Video of the AI Governance Cup 2026 winner’s trophy',
    fallback: 'Open the trophy video',
  },
}

export default function AchievementTrophyVideo({ language }: { language: Language }) {
  const copy = text[language]
  return (
    <section className="achievement-content-section achievement-trophy-section" aria-labelledby="achievement-trophy-section-title">
      <h2 id="achievement-trophy-section-title">{copy.section}</h2>
      <div className="achievement-trophy-card">
        <video
          className="achievement-trophy-video"
          controls
          playsInline
          preload="metadata"
          poster="/images/achievements/ai-onir-trophy-poster.jpg"
          aria-label={copy.video}
          width="480"
          height="864"
        >
          <source src="/videos/ai-onir-trophy.mp4" type="video/mp4" />
          <a href="/videos/ai-onir-trophy.mp4">{copy.fallback}</a>
        </video>
        <div className="achievement-trophy-copy">
          <h3>{copy.title}</h3>
          <p>{copy.description}</p>
        </div>
      </div>
    </section>
  )
}
