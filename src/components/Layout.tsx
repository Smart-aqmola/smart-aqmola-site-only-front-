import { useState, type ReactNode } from 'react'
import Header from './Header'
import ScrollToTopButton from './ScrollToTopButton'
import { content, type Language } from '../content'

type LayoutProps = {
  children: ReactNode
  language: Language
  onLanguageChange: (language: Language) => void
}

function Layout({ children, language, onLanguageChange }: LayoutProps) {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'site-layout dark' : 'site-layout'}>

      <a className="skip-link" href="#main-content">
        {content[language].skip}
      </a>

      <Header
        language={language}
        onLanguageChange={onLanguageChange}
        darkMode={darkMode}
        onThemeToggle={() => setDarkMode(!darkMode)}
      />

      <main
        id="main-content"
        className="site-main"
        tabIndex={-1}
      >
        {children}
      </main>

      <ScrollToTopButton />

    </div>
  )
}

export default Layout
