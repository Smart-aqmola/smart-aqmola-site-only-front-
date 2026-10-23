import AboutPage from './pages/AboutPage'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import type { Language } from './content'

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
      </Routes>
    </Layout>
  )
}

export default App