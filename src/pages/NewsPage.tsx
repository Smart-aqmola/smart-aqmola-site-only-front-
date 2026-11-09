import PageHero from '../components/PageHero'
import { PageHeroIcon, PageHeroIllustration } from '../components/PageHeroArtwork'
import { getPageHeroText } from '../data/pageHeroes'
import type { Language } from '../content'
import News from '../components/News'
function NewsPage({ language }: { language: Language }) {
  return (
    <section className="NewsPage internal-page" aria-labelledby="news-page-title">
      <PageHero {...getPageHeroText('news', language)} language={language} headingId="news-page-title" icon={<PageHeroIcon kind="news" />} illustration={<PageHeroIllustration kind="news" />} />
      <News language={language} showAllLink={false} />
    </section>
  )
}

export default NewsPage
