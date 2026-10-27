import {Link} from 'react-router-dom'
import type { Language } from '../content'
import { projectsContent } from '../data/projects'
import { realProjects } from '../data/realProjects'
import { projectTranslations } from '../data/projectTranslations'
import '../styles/projects.css'
import { useState } from 'react'

type ProjectCategory = 'all' | 'data' | 'tasks'

const categoryLabels = {
  RU: { all: 'Все', data: 'Данные и аналитика', tasks: 'Управление задачами', group: 'Категории проектов', count: 'Показано проектов' },
  KZ: { all: 'Барлығы', data: 'Деректер және талдау', tasks: 'Тапсырмаларды басқару', group: 'Жоба санаттары', count: 'Көрсетілген жобалар' },
  EN: { all: 'All', data: 'Data and analytics', tasks: 'Task management', group: 'Project categories', count: 'Projects shown' },
}


function Projects({ language }: { language: Language }) {
const [category, setCategory] = useState<ProjectCategory>('all')
const labels = categoryLabels[language]
const filteredProjects = realProjects.filter((project) =>
  category === 'all' || (category === 'data' ? project.id === 1 : project.id === 2),
)
const translationLanguage =
  language === 'RU' ? 'ru' :
  language === 'EN' ? 'en' : 'kk'
const text = projectsContent[language]
  return (
    <section className="projects" aria-labelledby="projects-title">
      <div className="container projects-container">
        <div className="projects-heading">
          <h2 id="projects-title">{text.title}</h2>
          <Link className="projects-all" to="/projects">
          {text.all} <span aria-hidden="true">→</span>
          </Link> 
        </div>
        <div className="home-project-filters" role="group" aria-label={labels.group}>
          {(['all', 'data', 'tasks'] as const).map((item) => (
            <button key={item} type="button" aria-pressed={category === item}
              aria-controls="home-project-results" onClick={() => setCategory(item)}>
              {labels[item]}
            </button>
          ))}
        </div>
        <p className="home-project-count" role="status">{labels.count}: {filteredProjects.length}</p>
        <ul className="projects-grid" id="home-project-results">
          {filteredProjects.map((project) => {
    const projectText = projectTranslations[translationLanguage][project.id] 
            return (
              <li className="project-card" key={project.id}>
                <div className="project-body">
                  <span className="home-project-category">{project.id === 1 ? labels.data : labels.tasks}</span>
                  <h3>{projectText.title}</h3>
                  <p>{projectText.description}</p>
                  <a className="project-details" href={project.presentationUrl}
                  target='_blank'
                  rel='noopener noreferrer'>
                  
                    {language === 'RU' ? 'Презентация · PDF' : language === 'KZ' ? 'Презентация · PDF' : 'Presentation · PDF'}<span className="project-sr-only">: {projectText.title}</span> <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )

}

export default Projects
