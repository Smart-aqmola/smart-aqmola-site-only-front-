import PageHero from '../components/PageHero'
import { PageHeroIcon, PageHeroIllustration } from '../components/PageHeroArtwork'
import { getPageHeroText } from '../data/pageHeroes'
import type { Language } from '../content'

import '../styles/about-page.css'

function AboutPage({ language }: { language: Language }) {
  return (
  <section className="about-page internal-page" aria-labelledby="about-title">
      <PageHero {...getPageHeroText('about', language)} language={language} headingId="about-title" icon={<PageHeroIcon kind="about" />} illustration={<PageHeroIllustration kind="about" />} />
      <div className="about-page-grid">
        <section className="about-page-card" aria-labelledby="about-who-title">
          <h2 id="about-who-title">Кто мы</h2>
          <p>
            Digital Aqmola — команда, занимающаяся
            разработкой цифровых решений и
            информационных систем.
          </p>
        </section>
        <section className="about-page-card" aria-labelledby="about-activity-title">
          <h2 id="about-activity-title">Наша деятельность</h2>
          <p>
            Мы разрабатываем IT-проекты,
            автоматизируем процессы и внедряем
            современные технологии.
          </p>
        </section>
      </div>
    </section>
  )
}
export default AboutPage
