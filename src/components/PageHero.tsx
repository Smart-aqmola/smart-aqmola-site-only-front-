import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { content, type Language } from '../content'
import '../styles/page-hero.css'

export type PageHeroProps = {
  title: string
  description: string
  headingId: string
  language: Language
  icon: ReactNode
  illustration: ReactNode
}

export default function PageHero({ title, description, headingId, language, icon, illustration }: PageHeroProps) {
  return (
    <header className="page-hero">
      <div className="page-hero-content">
        <div className="page-hero-copy">
          <nav className="page-hero-breadcrumbs" aria-label={{ RU: 'Хлебные крошки', KZ: 'Навигация жолы', EN: 'Breadcrumbs' }[language]}>
            <Link to="/">{content[language].navigation[0]}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{title}</span>
          </nav>
          <div className="page-hero-heading">
            <span className="page-hero-icon" aria-hidden="true">{icon}</span>
            <h1 id={headingId}>{title}</h1>
          </div>
          <p className="page-hero-description">{description}</p>
        </div>
        <div className="page-hero-art" aria-hidden="true">{illustration}</div>
      </div>
    </header>
  )
}
