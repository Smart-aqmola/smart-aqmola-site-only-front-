import type { ReactNode } from 'react'
import type { Language } from '../content'
import { digitalServices, digitalServicesContent } from '../data/digitalServices'
import '../styles/digital-services.css'

const icons: Record<(typeof digitalServices)[number]['id'], ReactNode> = {
  residents: <><circle cx="16" cy="11" r="4" /><path d="M7 27v-3a9 9 0 0 1 18 0v3" /></>,
  government: <><path d="m4 12 12-7 12 7H4Zm2 15h20M8 15v8m8-8v8m8-8v8" /></>,
  business: <><rect x="4" y="10" width="24" height="17" rx="3" /><path d="M11 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3M4 17a34 34 0 0 0 24 0M16 16v5" /></>,
}

function DigitalServices({ language }: { language: Language }) {
  const text = digitalServicesContent[language]

  return (
    <section className="digital-services" aria-labelledby="digital-services-title">
      <div className="container digital-services-container">
        <div className="digital-services-heading">
          <h2 id="digital-services-title">{text.title}</h2>
          <p>{text.description}</p>
        </div>
        <ul className="digital-services-grid">
          {digitalServices.map((service) => {
            const serviceText = service.text[language]
            return (
              <li className="digital-service-card" key={service.id}>
                <span className="digital-service-icon" aria-hidden="true">
                  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {icons[service.id]}
                  </svg>
                </span>
                <h3>{serviceText.title}</h3>
                <p>{serviceText.description}</p>
                <a className="digital-service-link" href={service.href}>
                  {text.more}<span className="digital-service-sr-only">: {serviceText.title}</span>
                  <span aria-hidden="true">→</span>
                </a>
              </li>
            )
          })}
        </ul>
        <div className="digital-services-actions">
          <a className="digital-services-all" href="/services">
            {text.all} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default DigitalServices
