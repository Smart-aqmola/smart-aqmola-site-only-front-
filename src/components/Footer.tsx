import type { Language } from '../content'
import { footerContent, footerContacts } from '../data/footer'
import '../styles/footer.css'

function Footer({ language }: { language: Language }) {
  const text = footerContent[language]
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-container">
        <div className="footer-columns">
          <div className="footer-brand">
            <a className="footer-brand-name" href="/">Smart Aqmola</a>
            <p>{text.description}</p>
          </div>
          <nav aria-labelledby="footer-links-title" className="footer-links">
            <h2 id="footer-links-title">{text.linksTitle}</h2>
            <ul>{text.links.map((label, index) => <li key={label}><a href={footerContacts.paths[index]}>{label}</a></li>)}</ul>
          </nav>
          <div className="footer-contacts">
            <h2>{text.contactsTitle}</h2>
            <p className="footer-notice">{text.temporary}</p>
            <address><dl>
              <div><dt>{text.addressLabel}</dt><dd>{text.address}</dd></div>
              <div><dt>{text.phoneLabel}</dt><dd>{text.phone}</dd></div>
              <div><dt>Email</dt><dd>{footerContacts.email}</dd></div>
            </dl></address>
          </div>
          <div className="footer-social">
            <h2>{text.socialTitle}</h2>
            <ul>{text.socialLabels.map((label) => <li key={label}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <circle cx="6" cy="12" r="3" /><circle cx="18" cy="5" r="3" /><circle cx="18" cy="19" r="3" /><path d="m9 10 6-4m-6 8 6 4" />
              </svg><span>{label}</span>
            </li>)}</ul>
            <p className="footer-notice">{text.socialNotice}</p>
          </div>
        </div>
        <div className="footer-bottom"><p>© 2026 Smart Aqmola. {text.rights}</p></div>
      </div>
    </footer>
  )
}

export default Footer
