import type { Language } from '../content'

type FooterContent = {
  description: string; linksTitle: string; links: string[]; contactsTitle: string
  temporary: string; addressLabel: string; address: string; phoneLabel: string; phone: string
  socialTitle: string; socialLabels: string[]; socialNotice: string; rights: string
}

// Временные нейтральные контакты для макета. Заменить подтверждёнными перед запуском.
// Демонстрационный email не является рабочим, телефон и адрес пока не предоставлены.
export const footerContacts = {
  email: 'info@example.com',
  paths: ['/about', '/projects', '/news', '/careers', '/documents', '/contacts'],
}

// Официальные URL социальных сетей не предоставлены: используются локальные SVG без ссылок.
export const footerContent: Record<Language, FooterContent> = {
  RU: {
    description: 'Цифровые решения, развитие информационных систем и технологическая поддержка Акмолинской области.',
    linksTitle: 'Полезные ссылки', links: ['Об организации', 'Проекты', 'Новости', 'Вакансии', 'Документы', 'Контакты'],
    contactsTitle: 'Контакты', temporary: 'Временные контактные данные',
    addressLabel: 'Адрес', address: 'Кокшетау, адрес уточняется', phoneLabel: 'Телефон', phone: 'Номер уточняется',
    socialTitle: 'Социальные сети и сервисы', socialLabels: ['Социальные сети', 'Внешние сервисы'],
    socialNotice: 'Официальные ссылки будут добавлены позже.', rights: 'Все права защищены.',
  },
  KZ: {
    description: 'Ақмола облысына арналған цифрлық шешімдер, ақпараттық жүйелерді дамыту және технологиялық қолдау.',
    linksTitle: 'Пайдалы сілтемелер', links: ['Ұйым туралы', 'Жобалар', 'Жаңалықтар', 'Бос жұмыс орындары', 'Құжаттар', 'Байланыс'],
    contactsTitle: 'Байланыс', temporary: 'Уақытша байланыс деректері',
    addressLabel: 'Мекенжай', address: 'Көкшетау, мекенжай нақтыланады', phoneLabel: 'Телефон', phone: 'Нөмір нақтыланады',
    socialTitle: 'Әлеуметтік желілер мен сервистер', socialLabels: ['Әлеуметтік желілер', 'Сыртқы сервистер'],
    socialNotice: 'Ресми сілтемелер кейін қосылады.', rights: 'Барлық құқықтар қорғалған.',
  },
  EN: {
    description: 'Digital solutions, information systems development and technology support for the Aqmola region.',
    linksTitle: 'Useful links', links: ['About us', 'Projects', 'News', 'Careers', 'Documents', 'Contacts'],
    contactsTitle: 'Contacts', temporary: 'Temporary contact details',
    addressLabel: 'Address', address: 'Kokshetau, address to be confirmed', phoneLabel: 'Phone', phone: 'Number to be confirmed',
    socialTitle: 'Social networks and services', socialLabels: ['Social networks', 'External services'],
    socialNotice: 'Official links will be added later.', rights: 'All rights reserved.',
  },
}
