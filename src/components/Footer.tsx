import type { Language } from '../content'
import { footerContent, footerContacts } from '../data/footer'
import '../styles/footer.css'

function Footer({ language }: { language: Language }) {
  const text = footerContent[language]
  const socialLinks = [
    {
      id: 'Instagram',
      name: 'Instagram',
      url: 'https://www.instagram.com/digital_aqmola/'
    },
    {
      id: 'phone',
      name:'109',
      url: 'tel:109'
    }
  ]

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
            <ul>{socialLinks.map((social) => <li key={social.id}>
              <a href={social.url}
              target={social.id === 'Instagram' ? '_blank': undefined}
              rel={social.id === 'Instagram' ? 'noopener noreferrer' : undefined}>                             
                {social.id === 'Instagram' &&(
              <svg 
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.8"
  aria-hidden="true"
>
  <rect x="3" y="3" width="18" height="18" rx="5" />
  <circle cx="12" cy="12" r="4" />
  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
</svg>)}
{social.id === 'phone' && (
  <svg>
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
    <path d="M6.6 3.5 9 3l2 5-2.2 1.3a15.7 15.7 0 0 0 5.9 5.9L16 13l5 2-.5 2.4a3 3 0 0 1-3 2.4C10.7 19.4 4.6 13.3 4.2 6.5a3 3 0 0 1 2.4-3Z" />
  </svg>
)}

<span>{social.name}</span>
</a>
              
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
