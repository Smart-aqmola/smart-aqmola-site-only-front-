import type { Language } from '../content'
import { achievements, achievementsContent } from '../data/achievements'
import '../styles/achievements.css'

function Achievements({ language }: { language: Language }) {
  const text = achievementsContent[language]

  return (
    <section className="achievements" aria-labelledby="achievements-title">
      <div className="container achievements-container">
        <div className="achievements-heading">
          <h2 id="achievements-title">{text.title}</h2>
          <a className="achievements-all" href="/achievements">
            {text.all} <span aria-hidden="true">→</span>
          </a>
        </div>
        <ul className="achievements-grid">
          {achievements.map((achievement) => (
            <li className="achievement-card" key={achievement.id}>
              <p className="achievement-value">{achievement.value}</p>
              <p className="achievement-label">{achievement.label[language]}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Achievements
