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
        <Route path="/projects" element={<ProjectsPage language={language} />} />
        <Route path="/about" element={<AboutPage language={language} />} />
        <Route path='/news' element={<NewsPage language={language} />} />
        <Route path="/achievements" element={<AchievementsPage language={language} />} />
        <Route path="/structure" element={<StructurePage language={language} />} />
        <Route path='/documents' element={<DocumentsPage language={language} />} />
        <Route path="/contacts" element={<ContactsPage language={language} />} />
        <Route path="*" element={<NotFoundPage language={language} />} />
      </Routes>
    </Layout>
  )
}

export default App
