import { useState } from 'react'
import { content, navigationPaths, type Language } from '../content'

type NavbarProps = { language: Language }

function Navbar({ language }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const text = content[language]

  return (
    <nav className="navbar" aria-label={text.menu}>
      <div className="container">
        <button className="menu-toggle" type="button" aria-controls="main-navigation"
          aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d={isOpen ? 'm6 6 12 12M6 18 18 6' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
          {isOpen ? text.close : text.menu}
        </button>
        <ul id="main-navigation" className={`nav-list${isOpen ? ' is-open' : ''}`}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setIsOpen(false)
              event.currentTarget.parentElement?.querySelector<HTMLButtonElement>('.menu-toggle')?.focus()
            }
          }}>
          {text.navigation.map((label, index) => (
            <li key={navigationPaths[index]}>
              <a href={navigationPaths[index]} aria-current={index === 0 ? 'page' : undefined}
                onClick={() => setIsOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
