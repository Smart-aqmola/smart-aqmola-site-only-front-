import PageHero from '../components/PageHero'
import { PageHeroIcon, PageHeroIllustration } from '../components/PageHeroArtwork'
import { getPageHeroText } from '../data/pageHeroes'
import type { Language } from '../content'
import { Link } from 'react-router-dom'
import '../styles/not-found-page.css'

function NotFoundPage({ language }: { language: Language }) {
  return (
    <section className="not-found-page internal-page" aria-labelledby="not-found-title">
      <PageHero {...getPageHeroText('notFound', language)} language={language} headingId="not-found-title" icon={<PageHeroIcon kind="notFound" />} illustration={<PageHeroIllustration kind="notFound" />} />

      <Link className="not-found-button" to="/">
        ← На главную
      </Link>
    </section>
  )
}

export default NotFoundPage