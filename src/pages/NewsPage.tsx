import { Link } from 'react-router-dom'
function NewsPage() {
  return (
    <section className="NewsPage">
      <Link to = "/">← Главная</Link>
      <h1>Новости и мероприятия</h1>
    </section>
  )
}

export default NewsPage