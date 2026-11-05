import PageHero from '../components/PageHero'
import { PageHeroIcon, PageHeroIllustration } from '../components/PageHeroArtwork'
import { getPageHeroText } from '../data/pageHeroes'
import type { Language } from '../content'
function ContactsPage({ language }: { language: Language }) {
  return (
    <section className="contacts-page internal-page" aria-labelledby="contacts-title">
      <PageHero {...getPageHeroText('contacts', language)} language={language} headingId="contacts-title" icon={<PageHeroIcon kind="contacts" />} illustration={<PageHeroIllustration kind="contacts" />} />
      <p>Телефон: <a href="tel:109">109</a></p>
    </section>
  )
}

export default ContactsPage
