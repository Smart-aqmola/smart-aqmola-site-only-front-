import PageHero from '../components/PageHero'
import { PageHeroIcon, PageHeroIllustration } from '../components/PageHeroArtwork'
import { getPageHeroText } from '../data/pageHeroes'
import type { Language } from '../content'
import '../styles/structure-page.css'
import { organizationStructure } from '../data/organizationStructure'
import StructureTeam from '../components/StructureTeam'

const labels = {
  RU: { title: 'Направления и подразделения', notice: 'Сведения о сотрудниках будут опубликованы после уточнения состава подразделений.' },
  KZ: { title: 'Бағыттар мен бөлімшелер', notice: 'Қызметкерлер туралы ақпарат бөлімшелер құрамы нақтыланғаннан кейін жарияланады.' },
  EN: { title: 'Divisions and departments', notice: 'Employee information will be published once department teams are confirmed.' },
}

function StructurePage({ language }: { language: Language }) {
  return (
    <section className="structure-page internal-page" aria-labelledby="structure-title">
      <PageHero {...getPageHeroText('structure', language)} language={language} headingId="structure-title" icon={<PageHeroIcon kind="structure" />} illustration={<PageHeroIllustration kind="structure" />} />

      <section className="structure-page-departments" aria-labelledby="departments-title">
        <div className="structure-page-heading">
          <h2 id="departments-title">{labels[language].title}</h2>
        </div>

        <p className="structure-page-notice">{labels[language].notice}</p>

        <ul className="structure-page-grid">
          {organizationStructure.map(unit => (
            <li className={`structure-unit structure-unit--${unit.id}`} key={unit.id}>
              <section aria-labelledby={`structure-unit-${unit.id}`}>
                <header className="structure-unit-heading">
                  <span className="structure-unit-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {unit.id === 'it' ? <><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4m-4-9-3-3 3-3m8 0 3 3-3 3" /></>
                        : unit.id === 'adk' ? <><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M8 6h8M8 10h2m4 0h2M8 14h2m4 0h2M8 18h2m4 0h2" /></>
                          : unit.id === 'ai-comek' ? <><rect x="6" y="6" width="12" height="12" rx="3" /><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4" /></>
                            : <><path d="M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0m-11 4a6 6 0 0 1 8 0" /><circle cx="12" cy="20" r="1" /></>}
                    </svg>
                  </span>
                  <h3 id={`structure-unit-${unit.id}`}>{unit.title[language]}</h3>
                </header>
                <div className="structure-departments-grid">
                  {unit.departments.map(department => (
                    <section className="structure-department" key={department.id} aria-labelledby={`structure-department-${department.id}`}>
                      <header className="structure-department-heading">
                        <h4 id={`structure-department-${department.id}`}>{department.title[language]}</h4>
                        {department.status && <p className="structure-department-status">{department.status[language]}</p>}
                      </header>
                      <StructureTeam members={department.members} language={language} />
                    </section>
                  ))}
                </div>
              </section>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default StructurePage
