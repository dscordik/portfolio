import type { Project } from "../types/types.ts";

export const projects: Project[] = [
    {
        id: 1,
        title: "Misha Store",
        shortDescription: "Fullstack интернет-магазин электроники с каталогом, фильтрацией, корзиной, избранным и JWT-авторизацией",
        fullDescription: "Полноценный интернет-магазин электроники с собственным бэкендом на FastAPI. Реализованы каталог товаров с фильтрацией и сортировкой, корзина, список избранного, и авторизация через JWT-токены с хранением пользователей в базе.",
        problem: "Разобраться в полном цикле fullstack-разработки: от проектирования REST API на FastAPI до связывания его с React-фронтендом, включая настоящую авторизацию, а не просто моковые данные.",
        imageUrl: "/projects/shop.png",
        stack: ["React", "TypeScript", "React Router", "react-icons", "FastAPI", "SQLAlchemy", "Pydantic", "JWT"],
        linkDemo: "https://online-shop-seven-iota.vercel.app",
        linkGit: "https://github.com/dscordik/online-shop"
    },
    {
        id: 2,
        title: "Telegram Mini App",
        shortDescription: "Каркас Telegram Mini App с бэкендом на FastAPI: каталог, корзина, заказы, авторизация через Telegram",
        fullDescription: "Универсальный boilerplate для Mini App внутри Telegram — с бесшовной авторизацией через Telegram WebApp initData (криптографически проверяется на бэкенде), адаптивным мобильным UI с MainButton/BackButton, каталогом товаров, корзиной и историей заказов пользователя.",
        problem: "Разобраться в специфике Telegram Mini Apps — авторизации через initData с проверкой подписи, интеграции с Telegram WebApp SDK, и в целом в мобильном UI, который живёт внутри мессенджера, а не в обычном браузере.",
        imageUrl: "/projects/tg-mini-app.png",
        stack: ["React", "TypeScript", "Vite", "FastAPI", "SQLAlchemy", "Pydantic", "JWT", "Telegram WebApp SDK"],
        linkDemo: "https://t.me/myshop_tma_bot",
        linkGit: "https://github.com/dscordik/tg-mini-app"
    },
    {
        id: 3,
        title: "Cafe Fano",
        shortDescription: "Лендинг кафе с меню, категориями блюд и функционалом корзины заказов",
        fullDescription: "Лендинг для вымышленного кафе с фильтрацией меню по категориям (закуски, основные блюда, десерты, напитки), корзиной заказа с изменением количества и формой оформления.",
        problem: "Отработать паттерн 'состояние живёт в родителе, компоненты только отображают' на практике, приближенной к реальному заказу заказчика — такой сайт можно предложить любому локальному кафе.",
        imageUrl: "/projects/cafe.png",
        stack: ["React", "TypeScript", "Vite", "CSS"],
        linkDemo: "https://cafe-landing-six.vercel.app",
        linkGit: "https://github.com/dscordik/cafe-landing"
    },
    {
        id: 4,
        title: "Premium Seltec",
        shortDescription: "Landing page для beauty-салона с записью к мастеру и демонстрацией мобильного приложения",
        fullDescription: "Лендинг вымышленного мобильного приложения для beauty-салона — с мокапом телефона, блоком фичей и отзывами клиентов, оформленный под запись к мастеру.",
        problem: "Собрать полностью статичный лендинг без единого useState, где вся сложность — не в логике, а в подаче контента и вёрстке мокапа устройства.",
        imageUrl: "/projects/app.png",
        stack: ["React", "TypeScript", "Vite", "CSS", "Responsive Design"],
        linkDemo: "https://app-landing-ten-silk.vercel.app",
        linkGit: "https://github.com/dscordik/app-landing"
    },
    {
        id: 5,
        title: "Quiz: Какой ты программист",
        shortDescription: "Интерактивный квиз для определения роли в IT: Frontend, Backend, Designer или DevOps",
        fullDescription: "Квиз из 10 вопросов, где каждый ответ добавляет тег категории. В конце подсчитывается, какой тег встречался чаще всего, и выводится соответствующий результат с описанием.",
        problem: "Реализовать подсчёт результата по накопленным тегам через reduce — самая сложная логическая часть, которую пришлось решать пошагово, включая типизацию и поиск ошибок.",
        imageUrl: "/projects/kviz.png",
        stack: ["React", "TypeScript", "Vite", "State Management", "CSS"],
        linkDemo: "https://kviz-landing-ec3z.vercel.app",
        linkGit: "https://github.com/dscordik/kviz-landing"
    },
    {
        id: 6,
        title: "Визитка мастера по ремонту",
        shortDescription: "Сайт-визитка для специалиста по диагностике и ремонту электроники с контактной информацией",
        fullDescription: "Одностраничная визитка вымышленного мастера по ремонту электроники — с блоком услуг, статистикой (лет опыта, клиентов, ремонтов) и контактами.",
        problem: "Собрать конкретный, воспроизводимый шаблон, который реально можно предложить живому специалисту — мастеру, репетитору, фотографу.",
        imageUrl: "/projects/vizitka.png",
        stack: ["React", "TypeScript", "Vite", "CSS"],
        linkDemo: "https://vizitka-land.vercel.app",
        linkGit: "https://github.com/dscordik/vizitka-land"
    },
    {
        id: 7,
        title: "Калькулятор кредитов",
        shortDescription: "Калькулятор для расчёта ипотеки, кредита и микрозайма: сумма, срок, ставка и ежемесячный платёж",
        fullDescription: "Калькулятор аннуитетного платежа — пользователь вводит сумму, срок и ставку, по кнопке 'Рассчитать' получает ежемесячный платёж, переплату и итоговую стоимость с человекочитаемым форматированием чисел.",
        problem: "Реализовать формулу аннуитетного платежа и проверить её на реальном примере, плюс аккуратно развести стейт инпутов и стейт результата, который не должен пересчитываться на лету.",
        imageUrl: "/projects/crediit-calc.png",
        stack: ["React", "TypeScript", "Vite", "CSS"],
        linkDemo: "https://credits-calc-land.vercel.app",
        linkGit: "https://github.com/dscordik/credits-calc-land"
    },
    {
        id: 8,
        title: "To-Do List",
        shortDescription: "Список задач с приоритетами, фильтрами, поиском, статистикой и сохранением данных между сессиями",
        fullDescription: "Планировщик задач с приоритетами, датой/временем, поиском и фильтрацией, статистикой (всего/выполнено/срочных) и массовыми действиями — 'выполнить все' / 'отменить всё'.",
        problem: "Первый серьёзный пет-проект — научиться работать со сложным состоянием списка, где каждая задача редактируется независимо от остальных.",
        imageUrl: "/projects/todo.png",
        stack: ["React", "TypeScript", "UUID", "Local Storage", "CSS"],
        linkDemo: "https://to-do-list-dscordik.vercel.app",
        linkGit: "https://github.com/dscordik/to-do-list"
    }
];