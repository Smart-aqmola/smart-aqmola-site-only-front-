
import { vacancies, vacanciesContent } from '../data/vacancies'
import '../styles/vacancies.css'

function Vacancies({ language }: { language: Language }) {
  const text = vacanciesContent[language]

  return (
    <section className="vacancies" aria-labelledby="vacancies-title">
      <div className="container vacancies-container">
        <div className="vacancies-heading">
          <h2 id="vacancies-title">{text.title}</h2>
          <a className="vacancies-all" href="/careers">
            {text.all} <span aria-hidden="true">→</span>
          </a>
        </div>
        <p className="vacancies-intro">{text.intro}</p>
        <ul className="vacancies-grid">
          {vacancies.map((vacancy) => {
            const vacancyText = vacancy.text[language]
            return (
              <li className="vacancy-card" key={vacancy.id}>
                <span className="vacancy-direction">{vacancyText.direction}</span>
                <h3>{vacancyText.title}</h3>
                <p className="vacancy-description">{vacancyText.description}</p>
                <a className="vacancy-details" href={vacancy.href}>
                  {text.details}<span className="vacancy-sr-only">: {vacancyText.title}</span>
                  <span aria-hidden="true">→</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Vacancies
