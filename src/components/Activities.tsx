import type { ReactNode } from 'react'
import type { Language } from '../content'
import '../styles/activities.css'
import { activitiesContent } from '../data/activities'
import { Link } from 'react-router-dom'

// Иконки расположены в том же порядке, что и направления деятельности.
const icons: ReactNode[] = [
  <g><rect x="7" y="6" width="34" height="36" rx="6" fill="currentColor" stroke="none" /><path d="m18 18-6 6 6 6m12-12 6 6-6 6m-4-14-4 16" stroke="white" /></g>,
  <g><path d="m21 5-1 5-5 2-4-3-5 8 4 3v6l-4 3 5 8 4-3 5 2 1 5h9l1-5 5-2 4 3 5-8-4-3v-6l4-3-5-8-4 3-5-2-1-5Z" fill="currentColor" stroke="none" /><circle cx="25.5" cy="23" r="6" fill="#e8f4ff" stroke="none" /></g>,
  <path d="M14 36h21a9 9 0 0 0 1-18 12 12 0 0 0-23-1 10 10 0 0 0 1 19Z" />,
  <g transform="rotate(-42 24 24)"><rect x="8" y="16" width="21" height="16" rx="8" /><rect x="21" y="16" width="21" height="16" rx="8" /><path d="M18 24h14" /></g>,
  <g><rect x="11" y="11" width="26" height="26" rx="4" /><rect x="15" y="15" width="18" height="18" rx="2" strokeWidth="1" /><path d="M17 5v6m7-6v6m7-6v6M17 37v6m7-6v6m7-6v6M5 17h6m-6 7h6m-6 7h6m26-14h6m-6 7h6m-6 7h6" /><path d="m18 29 4-10 4 10m-6-4h4m6-6v10" /></g>,
  <g><path d="M10 28v-6a14 14 0 0 1 28 0v6M38 31v3a8 8 0 0 1-8 8" /><rect x="7" y="23" width="7" height="12" rx="3" /><rect x="34" y="23" width="7" height="12" rx="3" /><rect x="23" y="38" width="8" height="5" rx="2" fill="currentColor" stroke="none" /></g>,
]

function Activities({ language }: { language: Language }) {
  const text = activitiesContent[language]

  return (
    <section className="activities" aria-labelledby="activities-title">
      <div className="container activities-container">
        <div className="activities-heading">
          <h2 id="activities-title" className="activities-title">{text.title}</h2>
          <Link className="activities-all" to="/about">
            {text.all} <span aria-hidden="true">→</span>
          </Link>
        </div>
        <ul className="activities-grid">
          {text.items.map((label, index) => (
            <li className="activity-card" key={index}>
              <span className="activity-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  {icons[index]}
                </svg>
              </span>
              <h3 className="activity-title">{label}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Activities

