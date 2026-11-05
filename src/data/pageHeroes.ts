import { content, type Language } from '../content'
import type { HeroKind } from '../components/PageHeroArtwork'

const descriptions: Record<HeroKind, Record<Language, string>> = {
  "about": {
    "RU": "Команда, компетенции и направления работы Smart Aqmola.",
    "KZ": "Smart Aqmola командасы, құзыреттері және жұмыс бағыттары.",
    "EN": "The team, expertise and activities of Smart Aqmola."
  },
  "structure": {
    "RU": "Подразделения Smart Aqmola и направления их работы.",
    "KZ": "Smart Aqmola бөлімшелері және олардың жұмыс бағыттары.",
    "EN": "Smart Aqmola departments and their areas of work."
  },
  "projects": {
    "RU": "Цифровые решения и информационные системы Smart Aqmola.",
    "KZ": "Smart Aqmola цифрлық шешімдері мен ақпараттық жүйелері.",
    "EN": "Digital solutions and information systems by Smart Aqmola."
  },
  "news": {
    "RU": "Новости, публикации и мероприятия Smart Aqmola.",
    "KZ": "Smart Aqmola жаңалықтары, жарияланымдары және іс-шаралары.",
    "EN": "News, publications and events from Smart Aqmola."
  },
  "achievements": {
    "RU": "Признание цифровых проектов и инновационных решений Акмолинской области.",
    "KZ": "Ақмола облысының цифрлық жобалары мен инновациялық шешімдерінің жетістіктері.",
    "EN": "Recognition of digital projects and innovative solutions in the Aqmola region."
  },
  "documents": {
    "RU": "Официальные документы и материалы Управления цифровизации и архивов Акмолинской области",
    "KZ": "Ақмола облысының цифрландыру және архивтер басқармасының ресми құжаттары мен материалдары",
    "EN": "Official documents and materials of the Department of Digitalization and Archives of the Aqmola region"
  },
  "contacts": {
    "RU": "Контактная информация и каналы связи со Smart Aqmola.",
    "KZ": "Smart Aqmola байланыс ақпараты мен байланыс арналары.",
    "EN": "Contact information and ways to reach Smart Aqmola."
  },
  "notFound": {
    "RU": "Страница не найдена. Вернитесь на главную или выберите раздел в меню.",
    "KZ": "Бет табылмады. Басты бетке оралыңыз немесе мәзірден бөлімді таңдаңыз.",
    "EN": "Page not found. Return home or choose a section from the menu."
  }
}

const navigationIndices = { about: 1, structure: 2, projects: 3, news: 4, achievements: 5, documents: 6, contacts: 7 } as const

export function getPageHeroText(kind: HeroKind, language: Language) {
  return {
    title: kind === 'notFound' ? '404' : content[language].navigation[navigationIndices[kind]],
    description: descriptions[kind][language],
  }
}
