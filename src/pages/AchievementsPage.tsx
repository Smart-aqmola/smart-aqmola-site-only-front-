import PageHero from '../components/PageHero'
import { PageHeroIcon, PageHeroIllustration } from '../components/PageHeroArtwork'
import { getPageHeroText } from '../data/pageHeroes'
import type { Language } from '../content'
import AchievementSections, { AwardFacts } from '../components/AchievementSections'
import AchievementTrophyVideo from '../components/AchievementTrophyVideo'
import AchievementsTimeline from '../components/AchievementsTimeline'

import { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/achievements-page.css"

const massiv = [
  {
    id: 1,
    title: "Победитель AI Governance Cup 2026",
    date: "24 апреля 2026 года",
    image: "/images/achievements/ai-onir-team.jpg",
    text: "Smart Aqmola стала победителем первого национального конкурса AI Governance Cup 2026 в номинации «AI Өңір» для местных исполнительных органов",
    category: "AI Өңір",
  },
]

function AchievementsPage({ language }: { language: Language }) {
  const [selectedCategory, setSelectedCategory] = useState("Все")
  // Сохраняем setter для будущего возвращения фильтров без ошибки noUnusedLocals.
  void setSelectedCategory

  const [openedImage, setOpenedImage] = useState<string | null>(null)

  const filteredCards = massiv.filter(
    (card) =>
      selectedCategory === "Все" ||
      card.category === selectedCategory
  )

  return (
    <section className="achievements-page internal-page" aria-labelledby="achievements-page-title">
      <PageHero {...getPageHeroText('achievements', language)} language={language} headingId="achievements-page-title" icon={<PageHeroIcon kind="achievements" />} illustration={<PageHeroIllustration kind="achievements" />} />

      {filteredCards.map((card) => (
        <article key={card.id}>
          <h2>{card.title}</h2>
          <p>{card.date}</p>
          <p>{card.text}</p>
          <p>{card.category}</p>

          <button
            type="button"
            onClick={() => setOpenedImage(card.image)}
          >
            <img
              src={card.image}
              alt={card.title}
              width="300"
            />
          </button>
          <AwardFacts language={language} />
        </article>
      ))}

      <AchievementTrophyVideo language={language} />

      <AchievementsTimeline language={language} />

      <AchievementSections language={language} />

      <aside className="achievements-projects" aria-labelledby="achievements-projects-title">
        <div className="achievements-projects-copy">
          <h2 id="achievements-projects-title">Узнайте больше о наших проектах</h2>
          <p>Познакомьтесь с цифровыми решениями Smart Aqmola для развития региона.</p>
        </div>
        <Link className="achievements-projects-link" to="/projects">
          Смотреть проекты <span aria-hidden="true">→</span>
        </Link>
      </aside>

      {openedImage && (
        <div>
          <h2>Увеличенная фотография</h2>

          <button
            type="button"
            onClick={() => setOpenedImage(null)}
          >
            Закрыть ✕
          </button>

          <div>
            <img
              src={openedImage}
              alt="Увеличенная фотография достижения"
              width="700"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default AchievementsPage
