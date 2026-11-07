
import { createServer } from "node:http";

const server = createServer((req, res) => {
  console.log("Запрошенный путь:", req.url);

  if (req.url === "/api/news") {
   const news = {
  results: [
    {
      id: 1,
      title: "Тестовая новость Smart Aqmola",
      summary: "Проверяем связь React и Node.js",
      published_at: "2026-11-06",
      image_url: null,
      url: "https://www.gov.kz"
    }
  ]
};

    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(news));
  } else {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Главная страница");
  }
});

server.listen(3002, () => {
  console.log("Сервер запущен: http://localhost:3002");
});
