import type { Language } from '../content'
import { events, eventsContent } from '../data/events'
import '../styles/events.css'
import { Link } from 'react-router-dom'
import { content } from '../content'

function Events({ language }: { language: Language }) {
  const text = eventsContent[language]

  return (
    <section className="events" aria-labelledby="events-title">
      <div className="container events-container">
        <div className="events-heading">
          <h2 id="events-title">{text.title}</h2>
          <Link className="events-all" to="/news">
            {content[language].navigation[4]} <span aria-hidden="true">→</span>
          </Link>
        </div>
        <p className="home-content-notice">{language === 'RU' ? 'Предварительные материалы макета. Даты и места требуют подтверждения.' : language === 'KZ' ? 'Макеттің алдын ала материалдары. Күндері мен орындары растауды қажет етеді.' : 'Draft content. Dates and venues require confirmation.'}</p>
        <ul className="events-grid">
          {events.map((event) => {
            const eventText = event.text[language]
            return (
              <li key={event.id}>
                <article className="event-card" aria-labelledby={`event-${event.id}`}>
                  <time className="event-date" dateTime={event.dateTime}>{eventText.date}</time>
                  <h3 id={`event-${event.id}`}>{eventText.title}</h3>
                  <p className="event-description">{eventText.description}</p>
                  <p className="event-location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                    <span><span className="event-sr-only">{text.location}: </span>{eventText.location}</span>
                  </p>
                  <p className="home-content-notice">{language === 'RU' ? 'Подробности готовятся' : language === 'KZ' ? 'Толық ақпарат дайындалуда' : 'Details coming soon'}</p>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Events
