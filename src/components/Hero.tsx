import { Link } from 'react-router-dom'
import { content, type Language } from '../content'
import '../styles/hero.css'
import { useEffect, useState } from 'react'

type HeroProps = { language: Language }

const heroImages = [
  '/images/kokshetau-1.jpg',
  '/images/kokshetau-3.jpg',
  '/images/kokshetau-4.jpg',
  '/images/kokshetau-5.jpg',
  '/images/kokshetau-6.jpg',
  '/images/kokshetau-7.jpg',
]
const slideshowLabels = {
  RU: { group: 'Фоновые изображения', slide: 'Показать слайд' },
  KZ: { group: 'Фондық суреттер', slide: 'Слайдты көрсету' },
  EN: { group: 'Background images', slide: 'Show slide' },
}

function Hero({ language }: HeroProps) {
  const text = content[language]
  const [activeSlide, setActiveSlide] = useState(0)
  const [paused, setPaused] = useState(false)
  const labels = slideshowLabels[language]

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let interval: number | undefined
    const updatePlayback = () => {
      window.clearInterval(interval)
      if (paused || motionPreference.matches || document.hidden) return
      interval = window.setInterval(() => {
        setActiveSlide((current) => (current + 1) % heroImages.length)
      }, 5000)
    }
    updatePlayback()
    motionPreference.addEventListener('change', updatePlayback)
    document.addEventListener('visibilitychange', updatePlayback)
    return () => {
      window.clearInterval(interval)
      motionPreference.removeEventListener('change', updatePlayback)
      document.removeEventListener('visibilitychange', updatePlayback)
    }
  }, [activeSlide, paused])

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-slides" aria-hidden="true">
        {heroImages.map((src, index) => (
          <img key={src} src={src} alt="" loading="eager"
            className={`hero-slide${index === activeSlide ? ' is-active' : ''}`} />
        ))}
      </div>
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="home-hero-label">{text.label}</p>
          <h1 id="hero-title">SMART AQMOLA<span>{language === 'RU' ? 'Цифровое будущее региона' : text.accent}</span></h1>
          <p className="hero-description">{text.description}</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/projects">{text.projects}<span aria-hidden="true">→</span></Link>
            <Link className="button button-secondary" to="/about">{text.about}</Link>
          </div>
        </div>
        <div className="region-visual" aria-hidden="true">
          <img className="region-map" src="/images/aqmola-digital-map.png" alt="" />
          <p className="region-caption">{language === 'RU' ? 'Цифровые решения для развития Акмолинской области' : language === 'KZ' ? 'Ақмола облысын дамытуға арналған цифрлық шешімдер' : 'Digital solutions for the development of the Aqmola region'}</p>
        </div>
      </div>
      <div className="hero-bottom-line" aria-hidden="true" />
      <div className="hero-indicators" role="group" aria-label={labels.group}>
        <button className="home-slideshow-toggle" type="button" aria-pressed={paused}
          onClick={() => setPaused(!paused)}>
          {language === 'RU' ? (paused ? 'Продолжить слайд-шоу' : 'Пауза слайд-шоу')
            : language === 'KZ' ? (paused ? 'Слайд-шоуды жалғастыру' : 'Слайд-шоуды тоқтату')
            : (paused ? 'Resume slideshow' : 'Pause slideshow')}
        </button>
        {heroImages.map((src, index) => (
          <button key={src} type="button" className={`hero-indicator${index === activeSlide ? ' is-active' : ''}`}
            aria-label={`${labels.slide} ${index + 1}`} aria-pressed={index === activeSlide}
            onClick={() => setActiveSlide(index)}>
            <span aria-hidden="true" />
          </button>
        ))}
      </div>
    </section>
  )
}

export default Hero

