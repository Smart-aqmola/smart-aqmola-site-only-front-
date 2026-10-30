import { useState } from 'react'
import Navbar from './Navbar'
import { content, navigationPaths, type Language } from '../content'
import '../styles/header.css'

type HeaderProps = {
  language: Language
  onLanguageChange: (language: Language) => void
  darkMode: boolean
  onThemeToggle: () => void
}

function Header({ language, onLanguageChange, darkMode, onThemeToggle }: HeaderProps) {
  const [query, setQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
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
  const results = text.navigation
    .map((label, index) => ({ label, path: navigationPaths[index] }))
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
          <div className="language-switch" role="group" aria-label={text.language}>
            {(['KZ', 'RU', 'EN'] as const).map((item) => (
              <button key={item} type="button" aria-pressed={language === item}
                onClick={() => { onLanguageChange(item); setQuery('') }}>
                {item}
              </button>
            ))}
          </div>
          <button className="theme-toggle" type="button" onClick={onThemeToggle}
            aria-label={themeLabel} title={themeLabel} aria-pressed={darkMode}>
            <span aria-hidden="true">{darkMode ? '☀️' : '🌙'}</span>
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
                  <ul>{results.map(({ label, path }) => <li key={path}><a href={path}>{label}</a></li>)}</ul>
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
