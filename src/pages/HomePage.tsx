import Hero from '../components/Hero'
import type { Language } from '../content'
import Activities from '../components/Activities'
import Projects from '../components/Projects'
import News from '../components/News'
import Achievements from '../components/Achievements'

function HomePage({ language }: { language: Language }) {
  return (
    <>
      <Hero language={language} />
      <Activities language={language} />
      <Projects language={language} />
      <News language={language} />
      <Achievements language={language} />
    </>
  )
}

export default HomePage
