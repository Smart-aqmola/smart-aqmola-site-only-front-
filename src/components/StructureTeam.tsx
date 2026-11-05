import type { Language } from '../content'
import type { TeamMember } from '../data/organizationStructure'

const labels = {
  RU: { photo: 'Фото сотрудника', name: 'ФИО уточняется', position: 'Должность уточняется', empty: 'Состав команды уточняется', team: 'Сотрудники' },
  KZ: { photo: 'Қызметкердің фотосуреті', name: 'Аты-жөні нақтылануда', position: 'Лауазымы нақтылануда', empty: 'Команда құрамы нақтылануда', team: 'Қызметкерлер' },
  EN: { photo: 'Employee photo', name: 'Name to be confirmed', position: 'Position to be confirmed', empty: 'Team information coming soon', team: 'Team members' },
}

function PortraitPlaceholder() {
  return <svg viewBox="0 0 120 144" fill="none" aria-hidden="true"><circle cx="60" cy="49" r="21" /><path d="M20 129v-12a40 40 0 0 1 80 0v12" /><path d="M17 21h12M23 15v12m68 91h12m-6-6v12" /></svg>
}

export default function StructureTeam({ members, language }: { members: TeamMember[]; language: Language }) {
  const text = labels[language]
  if (members.length === 0) {
    return (
      <div className="structure-team-empty">
        <div className="structure-team-portrait" aria-hidden="true"><PortraitPlaceholder /></div>
        <div className="structure-team-person"><p className="structure-team-name">{text.name}</p><p className="structure-team-position">{text.position}</p></div>
        <p className="structure-team-pending">{text.empty}</p>
      </div>
    )
  }
  return (
    <ul className="structure-team-grid" aria-label={text.team}>
      {members.map(member => (
        <li className="structure-team-member" key={member.id}>
          <div className="structure-team-portrait">
            {member.photo ? <img src={member.photo} alt={member.name[language]} loading="lazy" width="240" height="288" /> : <PortraitPlaceholder />}
          </div>
          <div className="structure-team-person"><p className="structure-team-name">{member.name[language]}</p><p className="structure-team-position">{member.position[language]}</p></div>
        </li>
      ))}
    </ul>
  )
}
