import type { Language } from '../content'

type Achievement = {
  id: string
  value: string
  label: Record<Language, string>
}

type AchievementsContent = { title: string; all: string }

export const achievementsContent: Record<Language, AchievementsContent> = {
  RU: { title: 'Наши достижения', all: 'Все достижения' },
  KZ: { title: 'Біздің жетістіктеріміз', all: 'Барлық жетістіктер' },
  EN: { title: 'Our achievements', all: 'All achievements' },
}

export const achievements: Achievement[] = [
  {
    id: 'digital-projects', value: '50+',
    label: {
      RU: 'реализованных цифровых проектов',
      KZ: 'іске асырылған цифрлық жоба',
      EN: 'digital projects delivered',
    },
  },
  {
    id: 'information-systems', value: '20+',
    label: {
      RU: 'информационных систем',
      KZ: 'ақпараттық жүйе',
      EN: 'information systems',
    },
  },
  {
    id: 'integrations', value: '100+',
    label: { RU: 'интеграций', KZ: 'интеграция', EN: 'integrations' },
  },
  {
    id: 'technical-support', value: '24/7',
    label: {
      RU: 'техническая поддержка',
      KZ: 'техникалық қолдау',
      EN: 'technical support',
    },
  },
]
