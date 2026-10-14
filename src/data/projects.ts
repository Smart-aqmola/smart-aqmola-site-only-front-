import type { Language } from '../content'
import aqmolaImage from '../assets/projects/smart-aqmola.svg'
import geoImage from '../assets/projects/smart-geohub.svg'
import systemsImage from '../assets/projects/regional-systems.svg'
import aiImage from '../assets/projects/ai-solutions.svg'
import dataImage from '../assets/projects/data-integration.svg'

type ProjectText = { title: string; description: string }

export type Project = {
  id: string
  image: string
  href: string
  text: Record<Language, ProjectText>
}

export const projectsContent = {
  RU: { title: 'Наши проекты', all: 'Все проекты', details: 'Подробнее' },
  KZ: { title: 'Біздің жобалар', all: 'Барлық жобалар', details: 'Толығырақ' },
  EN: { title: 'Our projects', all: 'All projects', details: 'Learn more' },
}

export const projects: Project[] = [
  {
    id: 'smart-aqmola', image: aqmolaImage, href: '/projects/smart-aqmola',
    text: {
      RU: { title: 'Smart Aqmola', description: 'Единая цифровая платформа для управления и развития региона' },
      KZ: { title: 'Smart Aqmola', description: 'Өңірді басқару мен дамытуға арналған бірыңғай цифрлық платформа' },
      EN: { title: 'Smart Aqmola', description: 'A unified digital platform for regional management and development' },
    },
  },
  {
    id: 'smart-geohub', image: geoImage, href: '/projects/smart-geohub',
    text: {
      RU: { title: 'Smart GeoHub', description: 'Геоинформационная система Акмолинской области' },
      KZ: { title: 'Smart GeoHub', description: 'Ақмола облысының геоақпараттық жүйесі' },
      EN: { title: 'Smart GeoHub', description: 'A geographic information system for the Aqmola region' },
    },
  },
  {
    id: 'regional-systems', image: systemsImage, href: '/projects/regional-systems',
    text: {
      RU: { title: 'Информационные системы региона', description: 'Сопровождение и развитие ключевых государственных систем' },
      KZ: { title: 'Өңірдің ақпараттық жүйелері', description: 'Негізгі мемлекеттік жүйелерді сүйемелдеу және дамыту' },
      EN: { title: 'Regional information systems', description: 'Maintenance and development of key government systems' },
    },
  },
  {
    id: 'ai-solutions', image: aiImage, href: '/projects/ai-solutions',
    text: {
      RU: { title: 'AI-решения', description: 'Внедрение искусственного интеллекта и интеллектуальных помощников' },
      KZ: { title: 'AI шешімдері', description: 'Жасанды интеллект пен зияткерлік көмекшілерді енгізу' },
      EN: { title: 'AI solutions', description: 'Implementation of artificial intelligence and intelligent assistants' },
    },
  },
  {
    id: 'data-integration', image: dataImage, href: '/projects/data-integration',
    text: {
      RU: { title: 'Системы интеграции и аналитики данных', description: 'Объединение данных и создание новых возможностей' },
      KZ: { title: 'Деректерді біріктіру және талдау жүйелері', description: 'Деректерді біріктіру және жаңа мүмкіндіктер жасау' },
      EN: { title: 'Data integration and analytics', description: 'Connecting data and creating new opportunities' },
    },
  },
]
