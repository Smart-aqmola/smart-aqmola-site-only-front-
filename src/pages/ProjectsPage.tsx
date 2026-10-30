import { Link } from 'react-router-dom'
import '../styles/projects-page.css'
import { useEffect, useRef, useState } from 'react'

const projectsData = [
  {
    id: 1,
    title: 'ИАС Smart Aqmola',
    description:
      'Единая платформа данных, аналитики и управленческих решений для устойчивого развития региона.',
    presentationUrl: '/presentations/ias-smart-aqmola.pdf',
  },
  {
    id: 2,
    title: 'Planka',
    description:
      'Интеллектуальная система управления задачами и документами с ИИ-модулем для автоматического протоколирования встреч.',
    presentationUrl: '/presentations/Planka.pdf',
  },
]

function ProjectsPage() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [cardsPerSlide, setCardsPerSlide] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(max-width: 600px)').matches ? 1 : 2,
  )
  const slides = Array.from({ length: Math.ceil(projectsData.length / cardsPerSlide) }, (_, index) =>
    projectsData.slice(index * cardsPerSlide, (index + 1) * cardsPerSlide),
  )

  useEffect(() => {
    const media = window.matchMedia('(max-width: 600px)')
    const handleResize = () => {
      setCardsPerSlide(media.matches ? 1 : 2)
      setActiveSlide(0)
      carouselRef.current?.scrollTo({ left: 0, behavior: 'instant' })
    }
    media.addEventListener('change', handleResize)
    return () => media.removeEventListener('change', handleResize)
  }, [])

  const goToSlide = (index: number) => {
    const carousel = carouselRef.current
    const slide = carousel?.children[index] as HTMLElement | undefined
    if (carousel && slide) {
      carousel.scrollTo({
        left: slide.offsetLeft,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      })
    }
  }

  return (
    <section className="projects-page">
      <Link className="page-back-link" to="/">← Главная</Link>

      <h1>Наши проекты</h1>

      <p>
        Цифровые решения и информационные системы Smart Aqmola.
      </p>

      <div className="projects-page-carousel" id="projects-carousel" ref={carouselRef}
        role="region" aria-roledescription="карусель" aria-label="Проекты" tabIndex={0}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return
          if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault()
            goToSlide(Math.max(0, Math.min(slides.length - 1, activeSlide + (event.key === 'ArrowRight' ? 1 : -1))))
          }
        }}
        onScroll={(event) => {
          const carousel = event.currentTarget
          const slideWidth = carousel.firstElementChild?.getBoundingClientRect().width ?? 0
          const gap = parseFloat(getComputedStyle(carousel).columnGap) || 0
          if (slideWidth) {
            const index = Math.round(carousel.scrollLeft / (slideWidth + gap))
            setActiveSlide(Math.max(0, Math.min(slides.length - 1, index)))
          }
        }}>
        {slides.map((slide, slideIndex) => (
          <div className="projects-page-grid projects-page-slide" key={slide[0].id}
            role="group" aria-roledescription="слайд" aria-label={`${slideIndex + 1} из ${slides.length}`}>
            {slide.map((currentProject) => (
              <article className="projects-page-card" key={currentProject.id}>
                <h2>{currentProject.title}</h2>
                <p>{currentProject.description}</p>
                <a href={currentProject.presentationUrl} target="_blank" rel="noopener noreferrer">
                  Открыть презентацию
                </a>
              </article>
            ))}
          </div>
        ))}
      </div>
      <div className="projects-page-dots" role="group" aria-label="Переключение проектов">
        {slides.map((slide, index) => (
          <button className="projects-page-dot" key={slide[0].id} type="button"
            aria-label={`Перейти к ${cardsPerSlide === 1 ? 'проекту' : 'группе проектов'} ${index + 1}`}
            aria-controls="projects-carousel" aria-pressed={activeSlide === index}
            onClick={() => goToSlide(index)}>
            <span aria-hidden="true" />
          </button>
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage
