const url ='https://www.gov.kz/org/aqmola-digital/press/news/1?lang=ru';;

const response = await fetch(url);

console.log(response.status);

const html = await response.text();
 
const position = html.indexOf('Акмолинская область поделилась опытом');
const start = html.indexOf('href="', position) + 6;
const end = html.indexOf('"', start);

const path = html.slice(start, end);
const fullUrl =  new URL(path, 'https://www.gov.kz');

const titleStart = html.lastIndexOf('title="', position) + 7;
const titleEnd = html.indexOf('"', titleStart);

const cardPosition = html.indexOf('card-news-list__link')

console.log(html.slice(cardPosition, cardPosition + 300))