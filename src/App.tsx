import NewsPage from './pages/NewsPage'
import AboutPage from './pages/AboutPage'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import type { Language } from './content'
import AchievementsPage from './pages/AchievementsPage'
import StructurePage from './pages/StructurePage'
import DocumentsPage from './pages/DocumentsPage'
import NotFoundPage from './pages/NotFoundPage'
import ContactsPage from './pages/ContactsPage'



function App() {
  const [language, setLanguage] = useState<Language>('RU')

  useEffect(() => {
    document.documentElement.lang = { KZ: 'kk', RU: 'ru', EN: 'en' }[language]
  }, [language])

  return (
    <Layout language={language} onLanguageChange={setLanguage}>
      <Routes>
        <Route path="/" element={<HomePage language={language} />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/structure" element={<StructurePage />} />
        <Route path='/documents' element={<DocumentsPage/>} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}

export default App
