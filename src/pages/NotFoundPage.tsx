import { Link } from 'react-router-dom'
import '../styles/not-found-page.css'

function NotFoundPage() {
  return (
    <section className="not-found-page">
      <img
        className="not-found-image"
        src="/images/404.png"
        alt="Такой страницы нету, друг"
      />

      <h1>404</h1>
      <p>Страница не найдена</p>

      <Link className="not-found-button" to="/">
        ← На главную
      </Link>
    </section>
  )
}

export default NotFoundPage