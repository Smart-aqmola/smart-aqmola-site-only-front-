
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

function AchievementsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Все")

  const [openedImage, setOpenedImage] = useState<string | null>(null)

  const filteredCards = massiv.filter(
    (card) =>
      selectedCategory === "Все" ||
      card.category === selectedCategory
  )

  return (
    <section>
      <Link className="page-back-link" to="/">
        ← Главная
      </Link>

      <h1>Наши достижения</h1>
      <p className="achievements-page-intro">
        Признание цифровых проектов и инновационных решений Акмолинской области.
      </p>

      <button
        type="button"
        onClick={() => setSelectedCategory("Все")}
      >
        Все
      </button>

      <button
        type="button"
        onClick={() => setSelectedCategory("AI Өңір")}
      >
        AI Өңір
      </button>

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
        </article>
      ))}

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
