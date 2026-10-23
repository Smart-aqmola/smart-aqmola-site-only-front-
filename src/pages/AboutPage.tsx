import '../styles/about-page.css'

function AboutPage() {
  return (
    <section className="about-page" aria-labelledby="about-title">
      <header className="about-page-header">
        <h1 id="about-title">Об организации</h1>
        <p>Добро пожаловать в Digital Aqmola!</p>
      </header>
      <div className="about-page-grid">
        <section className="about-page-card" aria-labelledby="about-who-title">
          <h2 id="about-who-title">Кто мы</h2>
          <p>
            Digital Aqmola — команда, занимающаяся
            разработкой цифровых решений и
            информационных систем.
          </p>
        </section>
        <section className="about-page-card" aria-labelledby="about-activity-title">
          <h2 id="about-activity-title">Наша деятельность</h2>
          <p>
            Мы разрабатываем IT-проекты,
            автоматизируем процессы и внедряем
            современные технологии.
          </p>
        </section>
      </div>
    </section>
  )
}
export default AboutPage
