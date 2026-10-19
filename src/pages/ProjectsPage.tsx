import { Link } from 'react-router-dom'
import '../styles/projects-page.css'

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
  return (
    <section className="projects-page">
      <Link to="/">← Главная</Link>

      <h1>Наши проекты</h1>

      <p>
        Цифровые решения и информационные системы Smart Aqmola.
      </p>

      <div className="projects-page-grid">
        {projectsData.map((currentProject) => (
          <article
            className="projects-page-card"
            key={currentProject.id}
          >
            <h2>{currentProject.title}</h2>

            <p>{currentProject.description}</p>

            <a
              href={currentProject.presentationUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Открыть презентацию
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage