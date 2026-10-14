import { content, type Language } from '../content'
import '../styles/hero.css'

type HeroProps = { language: Language }

function Hero({ language }: HeroProps) {
  const text = content[language]

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-content">
        <div className="hero-copy">
          <h1 id="hero-title">SMART AQMOLA<span>{language === 'RU' ? 'Цифровое будущее региона' : text.accent}</span></h1>
          <p className="hero-description">{text.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/projects">{text.projects}<span aria-hidden="true">→</span></a>
            <a className="button button-secondary" href="/about">{text.about}</a>
          </div>
        </div>
        <div className="region-visual" aria-hidden="true">
          {/* Декоративный контур: заменить точной картой области после получения материалов. */}
          <svg className="region-map" viewBox="0 0 540 460">
            <defs>
              <linearGradient id="map-fill" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#50baff" stopOpacity=".3" /><stop offset="1" stopColor="#1676d8" stopOpacity=".06" />
              </linearGradient>
              <filter id="node-glow"><feGaussianBlur stdDeviation="4" /></filter>
            </defs>
            <path className="map-shape" d="m80 300 8-28-5-12 10-7 3-25 18-9-8-17 14-3 8-25 23 5 11-15-6-14 18-8 5-22 27 6 12-23 28-4 10-30-5-22 14-18 10 6 9-14 12 10 3 13 13 9 7 20 20 4 8 20 24-3 12 13 19-4 9 14 24 3-4 23 12 14-4 18 16 15-8 17 14 18-12 16 7 20-12 17 4 18-19 9 7 24-13 12 4 14-24 9-13-10-12 11-20-8-12-22-9 16-16 6-7 25-22 6-8 18-22-8-13-22-23 5-9-18-30-3-20-13-18 6-13-13-25 3-7-12-27 3Z" />
            <g className="map-connections">
              <path d="m110 190 70-45 90 50 66-60 66 64-69 65-63-69-42 98-63-65-55-38 26 83 92 20 52 44 53-73 70 10-31-75M180 145l-15 83 105-33 132 4M136 273l29-45 168 36M228 293l105-29" />
            </g>
            {[ [110,190], [180,145], [270,195], [336,135], [402,199], [333,264], [228,293], [165,228], [136,273], [280,337], [403,274] ].map(([cx, cy], index) => (
              <g key={index}>
                <circle cx={cx} cy={cy} r={index === 2 ? 15 : 9} fill="#65dfff" opacity=".65" filter="url(#node-glow)" />
                <circle cx={cx} cy={cy} r={index === 2 ? 6 : 3.5} fill="#e6fbff" />
                <circle cx={cx} cy={cy} r={index === 2 ? 15 : 9} fill="none" stroke="#73d5ff" strokeOpacity=".5" />
              </g>
            ))}
            <g className="map-crosshairs"><path d="M40 120h16m-8-8v16M454 326h16m-8-8v16M380 60h16m-8-8v16" /></g>
          </svg>
          <p className="region-caption">{language === 'RU' ? 'Цифровые решения для развития Акмолинской области' : language === 'KZ' ? 'Ақмола облысын дамытуға арналған цифрлық шешімдер' : 'Digital solutions for the development of the Aqmola region'}</p>
        </div>
      </div>
      <div className="hero-bottom-line" aria-hidden="true" />
    </section>
  )
}

export default Hero
