import PageHero from '../components/PageHero'
import { PageHeroIcon, PageHeroIllustration } from '../components/PageHeroArtwork'
import { getPageHeroText } from '../data/pageHeroes'
import type { Language } from '../content'
import { useState } from "react";
import "../styles/documents-page.css";

const files = [
  {
    id: 1,
    title: "Антикоррупционный стандарт",
    date: "09.10.2026",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/1079981?lang=ru",
  },
  {
    id: 2,
    title: "Архив және болашақ ұрпақ",
    date: "23.09.2026",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/1071212?lang=ru",
  },
  {
    id: 3,
    title:
      "Алгоритм взаимодействия и координации деятельности государственных органов и организаций по обработке обращений жителей Акмолинской области",
    date: "22.09.2026",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/1070783?lang=ru",
  },
  {
    id: 4,
    title: "Положение об отделе архивного дела, административно-правового и финансового обеспечения.",
    date: "19.08.2026",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/1055790?lang=ru",
  },
  {
    id: 5,
    title: "Положение об отделе цифровой трансформации, развития искусственного интеллекта и инновационных проектов",
    date: "19.08.2026",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/1055788?lang=ru",
  },
  {
    id: 6,
    title: "Положение  об отделе развития инфокоммуникационной инфраструктуры и  проектного управления",
    date: "19.08.2026",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/1055786?lang=ru",
  },
  {
    id: 7,
    title: "Положение об отделе государственного контроля в области связи, информационной безопасности и управления данными",
    date: "19.08.2026",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/1055780?lang=ru",
  },
  {
    id: 8,
    title: "Рабочие телефоны",
    date: "02.07.2026",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/1036385?lang=ru",
  },
  {
    id: 9,
    title: "БЮДЖЕТНАЯ ПРОГРАММА 2025год",
    date: "16.04.2026",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/997816?lang=ru",
  },
  {
    id: 10,
    title: "Отчет о реализации бюджетных программ",
    date: "16.04.2026",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/997804?lang=ru",
  },
  {
    id: 11,
    title: "Заключение об итогах проведения публичного обсуждения отчета  о деятельности  государственных архивов Акмолинской области по вопросам оказания государственной услуги «Выдача архивных  справок, копий архивных документов или архивных выписок»  за 2025 год",
    date: "01.04.2026",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/989607?lang=ru",
  },
  {
    id: 12,
    title: "Мемлекеттік қызметтер көрсету мәселелері бойынша 2025 жылғы есебі",
    date: "26.02.2026",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/975332?lang=ru",
  },
  {
    id: 13,
    title: "Report on the Provision of Public Services for 2025.",
    date: "26.02.2026",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/975323?lang=ru",
  },
  {
    id: 14,
    title: "Notification",
    date: "26.02.2026",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/975322?lang=ru",
  },
  {
    id: 15,
    title: "Стратегия построение умных городов",
    date: "19.01.2026",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/955365?lang=ru",
  },
  {
    id: 16,
    title: "Отчет о реализации бюджетных программ за 2024 год",
    date: "13.01.2026",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/950931?lang=ru",
  },
  {
    id: 17,
    title: "Мемлекеттік қызметтер көрсетуге қоғамдық мониторинг нәтижелері",
    date: "13.01.2026",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/950649?lang=ru",
  },
  {
    id: 18,
    title: "Результат общественного мониторинга оказания государственных услуг",
    date: "13.01.2026",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/950647?lang=ru",
  },
  {
    id: 19,
    title: "ПРИКАЗ",
    date: "06.01.2026",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/946761?lang=ru",
  },
  {
    id: 20,
    title: "Постановления акимата Акмолинской области от 19 декабря 2025 года №А-12/659 «О корректировке показателей областного бюджета на 2025 год»",
    date: "06.01.2026",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/946757?lang=ru",
  },
  {
    id: 21,
    title: "Постановления акимата Акмолинской области от 19 декабря 2025 года №А-12/659 «О корректировке показателей областного бюджета на 2025 год» 009",
    date: "06.01.2026",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/946740?lang=ru",
  },
  {
    id: 22,
    title: "Постановления акимата Акмолинской области от 19 декабря 2025 года №А-12/659 «О корректировке показателей областного бюджета на 2025 год» ",
    date: "06.01.2026",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/946722?lang=ru",
  },
  {
    id: 23,
    title: "Положение об отделе проектного управления и координации в сфере связи",
    date: "10.11.2025",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/920972?lang=ru",
  },
  {
    id: 24,
    title: "Положение об отделе искусственного интеллекта и цифрового развития",
    date: "10.11.2025",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/920968?lang=ru",
  },
  {
    id: 25,
    title: "Положение об отделе архивов ГУ «Управление цифровизации и архивов Акмолинской области»",
    date: "10.11.2025",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/920967?lang=ru",
  },
  {
    id: 26,
    title: "Положение об отделе административно-правовой работы",
    date: "10.11.2025",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/920966?lang=ru",
  },
  {
    id: 27,
    title: "Устав  коммунального государственного учреждения «Smart Aqkol-2018» управления цифровизации и архивов Акмолинской области",
    date: "07.11.2025",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/920118?lang=ru",
  },
  {
    id: 28,
    title: "План мероприятий по устранению выявленных  коррупционных рисков входе проведения внутреннего анализа  коррупционных рисков в ГУ «Управление цифровизации и архивов Акмолинской области»",
    date: "25.06.2025",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/861231?lang=ru",
  },
  {
    id: 29,
    title: "Аналитическая справка по результатам внутреннего анализа коррупционных рисков в деятельности государственного учреждения «Управление цифровизации и архивов Акмолинской области» за  Май- Декабрь 2024 года",
    date: "25.06.2025",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/861229?lang=ru",
  },
  {
    id: 30,
    title: "Информация о вакансиях",
    date: "11.06.2025",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/855571?lang=ru",
  },
  {
    id: 31,
    title: "Отчет о результатах проведения общественного мониторинга качества оказания государственных услуг 2024 год",
    date: "05.02.2025",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/792878?lang=ru",
  },
  {
    id: 32,
    title: "О работе  государственных  архивных  учреждений  Акмолинской области  за  2024 год",
    date: "23.12.2024",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/768551?lang=ru",
  },
  {
    id: 33,
    title: "Информация о вакансиях",
    date: "13.11.2024",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/749708?lang=ru",
  },
  {
    id: 34,
    title: "Сведения о количестве фондов, единиц хранений на всех носителях в государственных архивах Акмолинской области по состоянию на 01.11.2024 год",
    date: "11.11.2024",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/748289?lang=ru",
  },
  {
    id: 35,
    title: "Список работников  архивной службы Акмолинской  области",
    date: "11.11.2024",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/748285?lang=ru",
  },
  {
    id: 36,
    title: "О работе  государственных  архивных  учреждений  Акмолинской области  за 9 месяцев 2024 года",
    date: "04.11.2024",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/744197?lang=ru",
  },
  {
    id: 37,
    title: "Аналитическая справка  по результатам внутреннего анализа коррупционных рисков в деятельности государственного учреждения «Управление цифровизации и архивов Акмолинской области» за май-декабрь 2023 года",
    date: "05.06.2024",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/672376?lang=ru",
  },
  {
    id: 38,
    title: "Заключение об итогах проведения публичного обсуждения отчета  о деятельности  государственных архивов Акмолинской области по вопросам оказания государственной услуги за 2023 год",
    date: "02.04.2024",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/637850?lang=ru",
  },
  {
    id: 39,
    title: "Отчет о результатах проведения общественного мониторинга качества оказания государственных услуг 2023 год",
    date: "26.03.2024",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/633145?lang=ru",
  },
  {
    id: 40,
    title: "Порядок обжалования государственных услуг",
    date: "25.09.2023",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/525262?lang=ru",
  },
  {
    id: 41,
    title: "Результаты общественного мониторинга качества оказания государственных услуг",
    date: "22.09.2023",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/523884?lang=ru",
  },
  {
    id: 42,
    title: "О работе  государственных  архивных  учреждений  Акмолинской области  за полугодие  2023 года",
    date: "17.07.2023",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/495125?lang=ru",
  },
  {
    id: 43,
    title: "Анализ обращений, поступающих на телефон 109",
    date: "05.07.2023",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/491918?lang=ru",
  },
  {
    id: 44,
    title: "О работе  государственных  архивных  учреждений  Акмолинской области  за первый квартал 2023 года",
    date: "20.04.2023",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/459503?lang=ru",
  },
  {
    id: 45,
    title: "ОСНОВНЫЕ НАПРАВЛЕНИЯ развития архивного дела в Акмолинской области на 2023 год",
    date: "25.01.2023",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/410794?lang=ru",
  },
  {
    id: 46,
    title: "О работе  государственных  архивных  учреждений  Акмолинской области за 2022 год",
    date: "24.01.2023",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/410830?lang=ru",
  },
  {
    id: 47,
    title: "О работе  государственных  архивных  учреждений  Акмолинской области  за 9 месяцев  2022 года",
    date: "07.10.2022",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/354856?lang=ru",
  },
  {
    id: 48,
    title: "ПОЛОЖЕНИЕ об уполномоченном по этике",
    date: "03.10.2022",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/353565?lang=ru",
  },
  {
    id: 49,
    title: "Статус реализаций проекта  FIXED WIRELESS ACCESS",
    date: "21.09.2022",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/348318?lang=ru",
  },
  {
    id: 50,
    title: "Структура ГУ \"Управление цифровизации и архивов Акмолинской области\"",
    date: "12.09.2022",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/344036?lang=ru",
  },
  {
    id: 51,
    title: "План встречи Председателя Комитета по делам архивов и управления документацией Министерства культуры и спорта РК с коллективами госархивов Акмолинской области",
    date: "08.09.2022",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/343037?lang=ru",
  },
  {
    id: 52,
    title: "График проведения  государственными архивами Акмолинской области онлаин-ярмарок по оказанию госуслуги в 2022 г",
    date: "08.09.2022",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/343036?lang=ru",
  },
  {
    id: 53,
    title: "План по госзакупкам в 2022 г.",
    date: "08.09.2022",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/342981?lang=ru",
  },
  {
    id: 54,
    title: "Финансовая отчетность",
    date: "08.09.2022",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/342979?lang=ru",
  },
  {
    id: 55,
    title: "Аналитическая справка о проведенной работе управления цифровизации и архивов Акмолинской области по повышению информированности услугополучателей о порядке оказания государственных услуг за август 2022 года",
    date: "08.09.2022",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/342910?lang=ru",
  },
  {
    id: 56,
    title: "Купили плохой товар? Как потребители могут направить жалобу через систему e-tutynushy.kz?",
    date: "28.07.2022",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/329917?lang=ru",
  },
  {
    id: 57,
    title: "О работе государственных архивных учреждений Акмолинской области за полугодие 2022 года",
    date: "12.07.2022",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/324316?lang=ru",
  },
  {
    id: 58,
    title: "Положение  об отделе цифровизации и цифровой трансформации ГУ «Управление цифровизации и архивов Акмолинской области»",
    date: "07.07.2022",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/342721?lang=ru",
  },
  {
    id: 59,
    title: "Положение  об отделе проектного управления ГУ «Управление цифровизации и архивов Акмолинской области»",
    date: "07.07.2022",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/342720?lang=ru",
  },
  {
    id: 60,
    title: "Положение  об отделе административно-правовой работы ГУ «Управление цифровизации и архивов Акмолинской области»",
    date: "07.07.2022",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/342718?lang=ru",
  },
  {
    id: 61,
    title: "Положение  об отделе связи и информационных технологий  ГУ «Управление цифровизации и архивов Акмолинской области»",
    date: "07.07.2022",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/342719?lang=ru",
  },
  {
    id: 62,
    title: "Положение  об отделе архивов ГУ «Управление цифровизации и архивов Акмолинской области»",
    date: "07.07.2022",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/342717?lang=ru",
  },
  {
    id: 63,
    title: "Запущено мобильное приложение «Электронный налоговый кошелек» «E-salyq-Azamat»",
    date: "01.07.2022",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/321310?lang=ru",
  },
  {
    id: 64,
    title: "Решение конкурсной комиссии от 10 июня 2022 года",
    date: "10.06.2022",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/315488?lang=ru",
  },
  {
    id: 65,
    title: "ГРАФИК проведения собеседования",
    date: "07.06.2022",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/314360?lang=ru",
  },
  {
    id: 66,
    title: "РЕШЕНИЕ о допуске участников конкурса к собеседованию",
    date: "07.06.2022",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/314361?lang=ru",
  },
  {
    id: 67,
    title: "Решение конкурсной комиссии от 14 апреля 2022 года",
    date: "15.04.2022",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/294308?lang=ru",
  },
  {
    id: 68,
    title: "Решение конкурсной комиссии от 13 апреля 2022 года",
    date: "14.04.2022",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/293763?lang=ru",
  },
  {
    id: 69,
    title: "Әңгімелесу және эссе өткізу КЕСТЕСІ",
    date: "11.04.2022",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/292334?lang=ru",
  },
  {
    id: 70,
    title: "График проведения собеседования и эссе",
    date: "11.04.2022",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/292333?lang=ru",
  },
  {
    id: 71,
    title: "РЕШЕНИЕ о допуске участников конкурса к собеседованию",
    date: "11.04.2022",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/292314?lang=ru",
  },
  {
    id: 72,
    title: "Положение о ГУ \"Управление цифровизации и архивов Акмолинской области\" № А-11/613",
    date: "27.11.2021",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/265068?lang=ru",
  },
  {
    id: 73,
    title: "Основные направления развития архивного дела в Акмолинской области на 2022 год",
    date: "01.11.2021",
    url: "https://www.gov.kz/org/aqmola-digital/documents/details/318368?lang=ru",
  },
];

function DocumentsPage({ language }: { language: Language }) {
  const [search, setSearch] = useState("");
  const [currentPage , setCurrentPage] = useState(1);
  const filteredFiles = files.filter((file) => file.title.toLowerCase().includes(search.toLowerCase()));
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredFiles.length / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = (startIndex + itemsPerPage);
  const currentFiles = filteredFiles.slice(startIndex, endIndex);
  return (
    <section className="documents-page internal-page" aria-labelledby="documents-heading">
      <PageHero {...getPageHeroText('documents', language)} language={language} headingId="documents-heading" icon={<PageHeroIcon kind="documents" />} illustration={<PageHeroIllustration kind="documents" />} />
      <div className="documents-toolbar">
      <label className="documents-search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 4.5 4.5" />
        </svg>
        <input aria-label="Поиск документов" placeholder="Поиск документов..." onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }} value={search} />
      </label>
      </div>
      <div className="documents-list">
      {filteredFiles.length === 0 && <p className="documents-empty" role="status">Документы не найдены</p>}
      {currentFiles.map((file) => (
        <article className="document-card" key={file.id}>
          <span className="document-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z" />
              <path d="M14 3v6h6M8 13h8M8 17h5" />
            </svg>
          </span>
          <div className="document-details">
            <h2>{file.title}</h2>
            <p className="document-date"><span>Дата публикации:</span> {file.date}</p>
          </div>
          {file.url && <a className="document-open" href={file.url}>Открыть документ <span aria-hidden="true">↗</span></a>}
        </article>
      ))}
      </div>
      {totalPages > 0 && (
        <nav className="documents-pagination" aria-label="Страницы документов">
          <button type="button" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
            Назад
          </button>
          {pageNumbers.map((page) => (
            <button
              type="button"
              key={page}
              aria-label={`Страница ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <button type="button" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
            Вперёд
          </button>
        </nav>
      )}
    </section>
  );
}

export default DocumentsPage;
