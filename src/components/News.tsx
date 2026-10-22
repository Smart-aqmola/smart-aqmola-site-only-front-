import { useEffect, useState } from 'react'
import type { Language } from '../content'
import { newsContent } from '../data/news'
import '../styles/news.css'

type Article = {
  id: number
  image_url?: string | null
  published_at: string
  title: string
  summary: string
  url: string
}

function News({ language }: { language: Language }) {
  const text = newsContent[language]
  const [articles, setArticles] = useState<Article[]>([])
  const locale = { RU: 'ru-RU', KZ: 'kk-KZ', EN: 'en-GB' }[language]

  useEffect(() => {
    const controller = new AbortController()
    fetch('https://api.spaceflightnewsapi.net/v4/articles/?limit=3&ordering=-published_at', {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error(`News request failed: ${response.status}`)
        return response.json()
      })
      .then((data: { results: Article[] }) => setArticles(data.results))
      .catch((error: unknown) => {
        if (!controller.signal.aborted) console.error('Failed to load news:', error)
      })
    return () => controller.abort()
  }, [])

  return (
    <section className="news" aria-labelledby="news-title">
      <div className="container news-container">
        <div className="news-panel">
          <div className="news-heading">
            <h2 id="news-title">{text.title}</h2>
            <a className="news-all" href="/news">{text.all} <span aria-hidden="true">→</span></a>
          </div>
          <ul className="news-list">
            {articles.map((article) => (
              <li key={article.id}>
                <article className="news-item" aria-labelledby={`news-${article.id}`}>
                  {article.image_url ? (
                    <img className="news-image" src={article.image_url} alt="" width="360" height="220" loading="lazy" />
                  ) : (
                    <div className="news-image" aria-hidden="true" />
                  )}
                  <div className="news-body">
                    <time dateTime={article.published_at}>
                      {new Date(article.published_at).toLocaleDateString(locale)}
                    </time>
                    <h3 id={`news-${article.id}`}>{article.title}</h3>
                    <p>{article.summary}</p>
                    <a className="news-details" href={article.url} target="_blank" rel="noopener noreferrer">
                      {text.details}<span className="news-sr-only">: {article.title}</span> <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
        <aside className="news-ecosystem" aria-labelledby="news-ecosystem-title">
          <svg className="news-network" viewBox="0 0 560 300" fill="none" aria-hidden="true" focusable="false">
            <g className="news-network-lines">
              <path d="M65 150 155 65 280 145 405 60 495 150 405 240 280 145 155 240 65 150Z" />
              <path d="M155 65 155 240M405 60 405 240M65 150 280 145 495 150M155 65 405 60M155 240 405 240" />
            </g>
            <g className="news-network-nodes">
              <circle cx="65" cy="150" r="5" />
              <circle cx="155" cy="65" r="7" />
              <circle cx="405" cy="60" r="5" />
              <circle cx="495" cy="150" r="7" />
              <circle cx="405" cy="240" r="6" />
              <circle cx="155" cy="240" r="5" />
              <circle className="news-network-hub" cx="280" cy="145" r="13" />
            </g>
          </svg>
          <div className="news-ecosystem-caption">
            <h3 id="news-ecosystem-title">Smart Aqmola</h3>
            <p>{language === 'RU' ? 'Цифровая экосистема региона' : language === 'KZ' ? 'Өңірдің цифрлық экожүйесі' : 'The region’s digital ecosystem'}</p>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default News
