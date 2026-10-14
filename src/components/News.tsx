import type { Language } from '../content'
import { news, newsContent } from '../data/news'
import '../styles/news.css'

function News({ language }: { language: Language }) {
  const text = newsContent[language]

  return (
    <section className="news" aria-labelledby="news-title">
      <div className="container news-container">
        <div className="news-panel">
          <div className="news-heading">
            <h2 id="news-title">{text.title}</h2>
            <a className="news-all" href="/news">{text.all} <span aria-hidden="true">→</span></a>
          </div>
          <ul className="news-list">
            {news.map((item) => {
              const itemText = item.text[language]
              return (
                <li key={item.id}>
                  <article className="news-item" aria-labelledby={`news-${item.id}`}>
                    <img className="news-image" src={item.image} alt="" width="360" height="220" loading="lazy" />
                    <div className="news-body">
                      <time dateTime={item.dateTime}>{itemText.date}</time>
                      <h3 id={`news-${item.id}`}>{itemText.title}</h3>
                      <p>{itemText.description}</p>
                      <a className="news-details" href={item.href}>
                        {text.details}<span className="news-sr-only">: {itemText.title}</span> <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default News
