import { useState } from 'react'
import Navbar from './Navbar'
import { useEffect, useRef } from 'react'
import { content, navigationPaths, type Language } from '../content'
import { realProjects } from '../data/realProjects'
import { projectTranslations } from '../data/projectTranslations'
import '../styles/header.css'
import Weatherdd from '../components/Weather'


type HeaderProps = {
  language: Language
  onLanguageChange: (language: Language) => void
  darkMode: boolean
  onThemeToggle: () => void
}

function Header({ language, onLanguageChange, darkMode, onThemeToggle }: HeaderProps) {
  const [query, setQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const languageRef = useRef<HTMLDivElement>(null)
  const languageButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!languageOpen) return
    const handleOutsideClick = (event: PointerEvent) => {
      if (event.target instanceof Node && !languageRef.current?.contains(event.target)) setLanguageOpen(false)
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLanguageOpen(false)
        languageButtonRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', handleOutsideClick)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('pointerdown', handleOutsideClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [languageOpen])
  const text = content[language]
  const themeLabel = {
    RU: darkMode ? 'Включить светлую тему' : 'Включить тёмную тему',
    KZ: darkMode ? 'Ашық тақырыпты қосу' : 'Қараңғы тақырыпты қосу',
    EN: darkMode ? 'Switch to light theme' : 'Switch to dark theme',
  }[language]
  const identity = {
    RU: ['РЕСПУБЛИКА КАЗАХСТАН', 'Акимат Акмолинской области', 'КГУ «Smart Aqmola»', 'Управление цифровизации', 'и архивов Акмолинской области'],
    KZ: ['ҚАЗАҚСТАН РЕСПУБЛИКАСЫ', 'Ақмола облысының әкімдігі', '«Smart Aqmola» КММ', 'Ақмола облысының цифрландыру', 'және архивтер басқармасы'],
    EN: ['REPUBLIC OF KAZAKHSTAN', 'Aqmola regional administration', 'Smart Aqmola', 'Department of digitalization', 'and archives of the Aqmola region'],
  }[language]
  const translationLanguage = language === 'RU' ? 'ru' : language === 'EN' ? 'en' : 'kk'
  const results = [
    ...text.navigation.map((label, index) => ({ label, path: navigationPaths[index], isPdf: false })),
    ...realProjects.map((project) => ({
      label: projectTranslations[translationLanguage][project.id].title,
      path: project.presentationUrl,
      isPdf: true,
    })),
  ]
    .filter(({ label }) => label.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()))

  return (
    <header className="site-header">
      <div className="container header-content">
        <div className="header-identity">
          <div className="government-identity">
            <img className="government-emblem" src="/images/akimat-emblem.jpeg" alt="Акимат Акмолинской области" />
            <div><strong>{identity[0]}</strong><span>{identity[1]}</span></div>
          </div>
        <a className="brand" href="/" aria-label="Digital Aqmola">
          <img className="brand-image" src="/images/digital-aqmola-logo.PNG" alt="Digital Aqmola" />
        </a>
          <div className="organization-identity"><strong>{identity[2]}</strong><span>{identity[3]}<br />{identity[4]}</span></div>
        </div>
        <div className="header-tools">
          <Weatherdd />
          <div className="language-switch" ref={languageRef}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setLanguageOpen(false)
            }}>
            <button className="language-trigger" ref={languageButtonRef} type="button"
              aria-label={`${text.language}: ${language}`} aria-expanded={languageOpen}
              aria-controls="language-options" onClick={() => setLanguageOpen(!languageOpen)}>
              {language}<span className="header-control-chevron" aria-hidden="true">▾</span>
            </button>
            {languageOpen && (
              <ul className="language-dropdown" id="language-options" aria-label={text.language}>
                {(['KZ', 'RU', 'EN'] as const).map((item) => (
                  <li key={item}>
                    <button className="language-option" type="button" aria-pressed={language === item}
                      onClick={() => {
                        onLanguageChange(item)
                        setQuery('')
                        setLanguageOpen(false)
                        languageButtonRef.current?.focus()
                      }}>
                      {item}<span aria-hidden="true">{language === item ? '✓' : ''}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button className="theme-toggle" type="button" onClick={onThemeToggle}
            aria-label={themeLabel} title={themeLabel} aria-pressed={darkMode}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
              stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true" focusable="false">
              {darkMode ? (
                <path d="M20.5 13.1A8.5 8.5 0 0 1 10.9 3.5a8.5 8.5 0 1 0 9.6 9.6Z" />
              ) : (
                <>
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                </>
              )}
            </svg>
          </button>
          <div className="site-search" role="search"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setSearchOpen(false)
            }}>
            <svg className="search-icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4 4" />
            </svg>
            <input type="search" value={query} placeholder={text.search} aria-label={text.searchLabel}
              aria-controls="search-results" aria-expanded={searchOpen && Boolean(query.trim())}
              onFocus={() => setSearchOpen(true)}
              onChange={(event) => { setQuery(event.target.value); setSearchOpen(true) }}
              onKeyDown={(event) => { if (event.key === 'Escape') setSearchOpen(false) }} />
            {searchOpen && query.trim() && (
              <div className="search-results" id="search-results">
                {results.length ? (
                  <ul>{results.map(({ label, path, isPdf }) => (
                    <li key={path}>
                      <a href={path} target={isPdf ? '_blank' : undefined}
                        rel={isPdf ? 'noopener noreferrer' : undefined}>
                        {label}
                        {isPdf && <span className="search-result-format">PDF</span>}
                      </a>
                    </li>
                  ))}</ul>
                ) : <p role="status">{text.empty}</p>}
              </div>
            )}
          </div>
        </div>
      </div>
      <Navbar language={language} />
    </header>
  )
}

export default Header
