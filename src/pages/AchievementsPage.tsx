import { useState } from "react"
import { Link } from "react-router-dom"
const massiv = [
    {
        id: 1,
        title: "Победитель AI Governance Cup 2026",
        date: "24 апреля 2026 года",
        image: "/images/achievements/ai-onir-team.jpg",
        text: "Smart Aqmola стала победителем первого национального конкурса AI Governance Cup 2026 в номинации «AI Өңір» для местных исполнительных органов",
        category: "AI Өңір",
    }
]

function AchievementsPage ()
{
    const [selectedCategory, setSelectedCategory] = useState("Все")
   return (
        
 <section>
    
        <Link className="page-back-link" to = '/'>←Главная </Link>
        <h1>Наши достижения</h1>
{massiv.map((card) => (
    <div key={card.id}>
<button onClick={() => setSelectedCategory("Все")}>Все</button>
<button onClick={() => selectedCategory("AI Өңір")}>AI Өңір</button>
        <h2>{card.title}</h2>
        <p>{card.date}</p>
         <p>{card.text}</p>
         <p>{card.category}</p>
        <img src={card.image} />
    </div>
)) 
}       
</section>
    )    
}
export default AchievementsPage
