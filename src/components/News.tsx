import { useEffect, useRef, useState } from 'react'
import type { Language } from '../content'
import { newsContent } from '../data/news'
import '../styles/news.css'
import { Link } from 'react-router-dom'

const loadingLabels = {
  RU: {
    loading: 'Загружаем новости…',
    error: 'Не удалось загрузить новости. Попробуйте ещё раз.',
    empty: 'Новых публикаций пока нет.',
    retry: 'Повторить',
    source: 'Источник: gov.kz · Digital Aqmola',
    openSource: 'Перейти к источнику',
    close: 'Закрыть новость',
  },
  KZ: {
    loading: 'Жаңалықтар жүктелуде…',
    error: 'Жаңалықтарды жүктеу мүмкін болмады. Қайталап көріңіз.',
    empty: 'Әзірге жаңа жарияланымдар жоқ.',
    retry: 'Қайталау',
    source: 'Дереккөз: gov.kz · Digital Aqmola',
    openSource: 'Дереккөзге өту',
    close: 'Жаңалықты жабу',
  },
  EN: {
    loading: 'Loading news…',
    error: 'Could not load news. Please try again.',
    empty: 'No new articles yet.',
    retry: 'Try again',
    source: 'Source: gov.kz · Digital Aqmola',
    openSource: 'View original article',
    close: 'Close article',
  },
}

type Article = {
  id: number
  image_url?: string | null
  published_at: string
  title: string
  summary: string
  url: string
}

type NewsProps = {
  language: Language
  limit?: number
  showAllLink?: boolean
}

function News({ language, limit, showAllLink = true }: NewsProps) {
  const text = newsContent[language]
  const [articles, setArticles] = useState<Article[]>([])
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const [attempt, setAttempt] = useState(0)
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const backdropPressed = useRef(false)
  const labels = loadingLabels[language]
  const locale = { RU: 'ru-RU', KZ: 'kk-KZ', EN: 'en-GB' }[language]
  // API returns the latest news first; keep that order when limiting the list.
  const visibleArticles = limit === undefined ? articles : articles.slice(0, limit)
  const midpoint = Math.ceil(visibleArticles.length / 2)
  const columns = [visibleArticles.slice(0, midpoint), visibleArticles.slice(midpoint)]

  function openArticle(article: Article, card: HTMLElement) {
    // Focus the real button before opening so closing returns to this card.
    card.querySelector<HTMLButtonElement>('.news-open')?.focus({ preventScroll: true })
    setSelectedArticle(article)
  }

  useEffect(() => {
    if (!selectedArticle || !dialogRef.current) return

    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    dialogRef.current.showModal()
    closeButtonRef.current?.focus()
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
      // Restore keyboard focus when the dialog is removed or the route changes.
      if (trigger?.isConnected) trigger.focus({ preventScroll: true })
    }
  }, [selectedArticle])

  useEffect(() => {
    const controller = new AbortController()
    fetch('/api/news', {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error(`News request failed: ${response.status}`)
        return response.json()
      })
      .then((data: { results: Article[] }) => {
        if (controller.signal.aborted) return
        setArticles(data.results)
        setStatus('ready')
      })
      .catch((error: unknown) => {
        if (!controller.signal.aborted) {
          console.error('Failed to load news:', error)
          setStatus('error')
        }
      })
    return () => controller.abort()
  }, [attempt])

  return (
    <section className="news" aria-labelledby="news-title">
      <div className="container news-container">
        <div className="news-panel">
          <div className="news-heading">
            <h2 id="news-title">{text.title}</h2>
            {showAllLink && <Link className="news-all" to="/news">{text.all} <span aria-hidden="true">→</span></Link>}
          </div>
          <p className="home-content-notice">{labels.source}</p>
          <div role="status">
            {status === 'loading' && <p className="home-content-notice">{labels.loading}</p>}
            {status === 'error' && <div className="home-news-feedback">
              <p>{labels.error}</p>
              <button type="button" onClick={() => { setStatus('loading'); setAttempt((current) => current + 1) }}>{labels.retry}</button>
            </div>}
            {status === 'ready' && articles.length === 0 && <p className="home-content-notice">{labels.empty}</p>}
          </div>
          <div className="news-columns">
            {columns.map((column, index) => column.length > 0 && (
              <ul className="news-list" key={index}>
                {column.map((article) => (
                  <li key={article.id}>
                    <article className="news-item" aria-labelledby={`news-${article.id}`} onClick={(event) => openArticle(article, event.currentTarget)}>
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
                        {article.summary && <p>{article.summary}</p>}
                        <button className="news-details news-open" type="button" aria-haspopup="dialog">
                          {text.details}<span className="news-sr-only">: {article.title}</span> <span aria-hidden="true">→</span>
                        </button>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      {selectedArticle && (
        <dialog
          className="news-dialog"
          ref={dialogRef}
          aria-labelledby="news-dialog-title"
          aria-modal="true"
          onClose={() => { backdropPressed.current = false; setSelectedArticle(null) }}
          onPointerDown={(event) => {
            const rect = event.currentTarget.getBoundingClientRect()
            backdropPressed.current = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom
          }}
          onClick={(event) => {
            const rect = event.currentTarget.getBoundingClientRect()
            const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom
            if (backdropPressed.current && outside) event.currentTarget.close()
            backdropPressed.current = false
          }}
        >
          <button className="news-dialog-close" type="button" ref={closeButtonRef} aria-label={labels.close} onClick={() => dialogRef.current?.close()}>
            <span aria-hidden="true">×</span>
          </button>
          {selectedArticle.image_url && <img className="news-dialog-image" src={selectedArticle.image_url} alt="" />}
          <div className="news-dialog-body">
            <time dateTime={selectedArticle.published_at}>{new Date(selectedArticle.published_at).toLocaleDateString(locale)}</time>
            <h2 id="news-dialog-title">{selectedArticle.title}</h2>
            {selectedArticle.summary && <p>{selectedArticle.summary}</p>}
            <a className="news-dialog-source" href={selectedArticle.url} target="_blank" rel="noopener noreferrer">
              {labels.openSource} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </dialog>
      )}
    </section>
  )
}

export default News
