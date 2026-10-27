import { Link } from 'react-router-dom'
import '../styles/structure-page.css'

// Временные карточки: заменить данными после утверждения структуры.
const departments = [
  { id: 'department-1', title: 'Подразделение 01' },
  { id: 'department-2', title: 'Подразделение 02' },
  { id: 'department-3', title: 'Подразделение 03' },
]

function StructurePage() {
  return (
    <section className="structure-page" aria-labelledby="structure-title">
      <Link className="structure-page-back" to="/">← Главная</Link>

      <header className="structure-page-header">
        <p className="structure-page-eyebrow">Smart Aqmola</p>
        <h1 id="structure-title">Структура организации</h1>
        <p className="structure-page-intro">
          Подразделения Smart Aqmola и направления их работы.
          Здесь будет представлена информация о структуре организации.
        </p>
      </header>

      <section className="structure-page-departments" aria-labelledby="departments-title">
        <div className="structure-page-heading">
          <h2 id="departments-title">Подразделения</h2>
          <span className="structure-page-status">Информация готовится</span>
        </div>

        <p className="structure-page-notice">
          Ниже показаны временные блоки. Названия и функции подразделений
          будут добавлены после подтверждения официальных сведений.
          Количество карточек условное.
        </p>

        <ul className="structure-page-grid">
          {departments.map((department) => (
            <li className="structure-page-card" key={department.id}>
              <span className="structure-page-card-label">Временный блок</span>
              <h3>{department.title}</h3>
              <p>Здесь появится краткое описание задач и направлений работы подразделения.</p>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default StructurePage
