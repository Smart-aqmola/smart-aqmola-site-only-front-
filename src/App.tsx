import { useEffect, useState } from 'react'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import type { Language } from './content'

function App() {
  const [language, setLanguage] = useState<Language>('RU')

  useEffect(() => {
    document.documentElement.lang = { KZ: 'kk', RU: 'ru', EN: 'en' }[language]
  }, [language])

  return (
    <Layout language={language} onLanguageChange={setLanguage}>
      <HomePage language={language} />
    </Layout>
  )
}

export default App
