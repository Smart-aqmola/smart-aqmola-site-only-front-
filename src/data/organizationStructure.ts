import type { Language } from '../content'

export type TeamText = Record<Language, string>

export type TeamMember = {
  id: string
  name: TeamText
  position: TeamText
  // Public URL, for example /images/team/employee-01.jpg (not public/images/...).
  photo?: `/images/team/${string}`
}

export type OrganizationUnit = {
  id: string
  title: TeamText
  status?: TeamText
  departments: {
    id: string
    title: TeamText
    status?: TeamText
    members: TeamMember[]
  }[]
}

// Empty members arrays mean the team composition has not yet been supplied.
// Do not add inferred identities, job titles or photo assignments.
export const organizationStructure: OrganizationUnit[] = [
  {
    id: 'it', title: { RU: 'IT', KZ: 'IT', EN: 'IT' },
    departments: [
      { id: 'digital-support', title: { RU: 'Цифровое сопровождение', KZ: 'Цифрлық сүйемелдеу', EN: 'Digital support' }, status: { RU: 'Предварительное название', KZ: 'Алдын ала атауы', EN: 'Provisional name' }, members: [] },
      { id: 'digital-industries', title: { RU: 'Цифровые отрасли', KZ: 'Цифрлық салалар', EN: 'Digital industries' }, members: [] },
      { id: 'analytics', title: { RU: 'Аналитика', KZ: 'Талдау', EN: 'Analytics' }, members: [] },
    ],
  },
  {
    id: 'adk', title: { RU: 'АДК', KZ: 'АДК', EN: 'ADK' },
    departments: [
      { id: 'accounting', title: { RU: 'Бухгалтерия', KZ: 'Бухгалтерия', EN: 'Accounting' }, members: [] },
      { id: 'adk-department', title: { RU: 'Отдел', KZ: 'Бөлім', EN: 'Department' }, status: { RU: 'Название уточняется', KZ: 'Атауы нақтылануда', EN: 'Name to be confirmed' }, members: [] },
    ],
  },
  {
    id: 'ai-comek', title: { RU: 'AI-Comek', KZ: 'AI-Comek', EN: 'AI-Comek' },
    departments: [{ id: 'ai-comek-team', title: { RU: 'Сотрудники направления', KZ: 'Бағыт қызметкерлері', EN: 'Team members' }, members: [] }],
  },
  {
    id: 'communications', title: { RU: 'Связь', KZ: 'Байланыс', EN: 'Communications' },
    departments: [{ id: 'communications-team', title: { RU: 'Сотрудники направления', KZ: 'Бағыт қызметкерлері', EN: 'Team members' }, members: [] }],
  },
]
