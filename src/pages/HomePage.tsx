import Hero from '../components/Hero'
import type { Language } from '../content'
import Activities from '../components/Activities'
import Projects from '../components/Projects'
import News from '../components/News'
import Achievements from '../components/Achievements'
import Events from '../components/Events'
import DigitalServices from '../components/DigitalServices'
import Footer from '../components/Footer'
import { useEffect, useRef } from 'react'
import '../styles/home-page.css'

function HomePage({ language }: { language: Language }) {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sections = pageRef.current?.querySelectorAll('.home-section')
    if (!sections || !('IntersectionObserver' in window)) return

    // По умолчанию контент виден даже без поддержки анимации.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('home-section-entered')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08 })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="home-page" ref={pageRef}>
      <Hero language={language} />
      <div className="home-section"><Activities language={language} /></div>
      <div className="home-section"><Projects language={language} /></div>
      <div className="home-section"><News language={language} /></div>
      <div className="home-section"><Achievements language={language} /></div>
      <div className="home-section"><Events language={language} /></div>
      <div className="home-section"><DigitalServices language={language} /></div>
      <Footer language={language} />
    </div>
  )
}

export default HomePage
