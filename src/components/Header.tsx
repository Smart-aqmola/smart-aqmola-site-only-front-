import { useState } from 'react'
import Navbar from './Navbar'
import { content, navigationPaths, type Language } from '../content'
import '../styles/header.css'

type HeaderProps = {
  language: Language
  onLanguageChange: (language: Language) => void
}

function Header({ language, onLanguageChange }: HeaderProps) {
  const [query, setQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const text = content[language]
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
            {/* Временный декоративный знак, заменить официальным гербом. */}
            <svg className="government-mark" viewBox="0 0 60 60" aria-hidden="true">
              <circle cx="30" cy="28" r="25" fill="#d0ae40" />
              <circle cx="30" cy="28" r="21" fill="#368e83" stroke="#efcf65" strokeWidth="2" />
              <circle cx="30" cy="28" r="12" fill="none" stroke="#efcf65" strokeWidth="2" />
              <path d="M30 8v40M10 28h40M16 14l28 28M16 42l28-28M20 9l20 38M10 18l40 20M10 38l40-20M20 47 40 9" stroke="#efcf65" strokeWidth="1" />
              <path d="m30 16 4 8 9 1-7 6 2 9-8-4-8 4 2-9-7-6 9-1Z" fill="#efcf65" />
              <path d="M15 48h30l-3 8H18Z" fill="#c6a33c" />
            </svg>
            <div><strong>{identity[0]}</strong><span>{identity[1]}</span></div>
          </div>
        <a className="brand" href="/" aria-label="Smart Aqmola">
          <span className="brand-symbol" aria-hidden="true">
            <svg viewBox="0 0 60 50"><path d="M4 33 24 5q4-5 9 0l14 15-14-8-8 2-12 15ZM2 43l23-22q5-4 11 0l20 17-19-7-11 1ZM13 47l15-10q6-4 12 0l18 12-25-5Z" /></svg>
          </span>
          <span className="brand-name">SMART <strong>AQMOLA</strong></span>
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
