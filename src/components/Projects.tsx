import {Link} from 'react-router-dom'
import type { Language } from '../content'
import { projects, projectsContent } from '../data/projects'
import '../styles/projects.css'

function Projects({ language }: { language: Language }) {
  const text = projectsContent[language]

  return (
    <section className="projects" aria-labelledby="projects-title">
      <div className="container projects-container">
        <div className="projects-heading">
          <h2 id="projects-title">{text.title}</h2>
          <Link className="projects-all" to="/projects">
          {text.all} <span aria-hidden="true"></span>
          </Link> 
        </div>
        <ul className="projects-grid">
          {projects.map((project) => {
            const projectText = project.text[language]
            return (
              <li className="project-card" key={project.id}>
                <img className="project-image" src={project.image} alt="" width="480" height="260" loading="lazy" />
                <div className="project-body">
                  <h3>{projectText.title}</h3>
                  <p>{projectText.description}</p>
                  <a className="project-details" href={project.href}>
                    {text.details}<span className="project-sr-only">: {projectText.title}</span> <span aria-hidden="true">→</span>
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
