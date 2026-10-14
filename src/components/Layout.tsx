import type { ReactNode } from 'react'
import Header from './Header'
import { content, type Language } from '../content'

type LayoutProps = {
  children: ReactNode
  language: Language
  onLanguageChange: (language: Language) => void
}

function Layout({ children, language, onLanguageChange }: LayoutProps) {
  return (
    <div className="site-layout">
      <a className="skip-link" href="#main-content">{content[language].skip}</a>
      <Header language={language} onLanguageChange={onLanguageChange} />
      <main id="main-content" className="site-main" tabIndex={-1}>
        {children}
      </main>
    </div>
  )
}

export default Layout
