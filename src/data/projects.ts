import type { Project } from "../types/types.ts";

export const projects: Project[] = [
    {
        id: 1,
        title: "Misha Store",
        shortDescription: "Fullstack интернет-магазин электроники с каталогом, фильтрацией, корзиной, избранным и JWT-авторизацией",
        fullDescription: "Полноценный интернет-магазин электроники с собственным бэкендом на FastAPI. Реализованы каталог товаров с фильтрацией и сортировкой, корзина, список избранного, и авторизация через JWT-токены с хранением пользователей в базе.",
        problem: "Небольшому магазину электроники нужен рабочий онлайн-каталог с фильтрацией и корзиной, чтобы клиент мог сам найти нужный товар и оформить заказ без звонка менеджеру — а владелец не переплачивал за готовую CMS с лишним функционалом.",
        imageUrl: "/projects/shop.png",
        stack: [
            "React",
            "TypeScript",
            "React Router",
            "react-icons",
            "FastAPI",
            "SQLAlchemy",
            "Pydantic",
            "JWT"
        ],
        linkDemo: "https://online-shop-seven-iota.vercel.app",
        linkGit: "https://github.com/dscordik/online-shop"
    },
    {
        id: 2,
        title: "Telegram Mini App",
        shortDescription: "Каркас Telegram Mini App с бэкендом на FastAPI: каталог, корзина, заказы, авторизация через Telegram",
        fullDescription: "Универсальный boilerplate для Mini App внутри Telegram — с бесшовной авторизацией через Telegram WebApp initData (криптографически проверяется на бэкенде), адаптивным мобильным UI с MainButton/BackButton, каталогом товаров, корзиной и историей заказов пользователя.",
        problem: "Бизнесу с аудиторией в Telegram (а не в отдельном приложении) нужен способ продавать прямо внутри мессенджера — без установки отдельного приложения и с готовой авторизацией по аккаунту пользователя, что резко снижает порог входа для клиента.",
        imageUrl: "/projects/tg-mini-app.png",
        stack: ["React", "TypeScript", "Vite", "FastAPI", "SQLAlchemy", "Pydantic", "JWT", "Telegram WebApp SDK"],
        linkDemo: "https://t.me/ВПИШИ_USERNAME_СВОЕГО_БОТА",
        linkGit: "https://github.com/dscordik/tg-mini-app"
    },
    {
        id: 3,
        title: "Cafe Fano",
        shortDescription: "Лендинг кафе с меню, категориями блюд и функционалом корзины заказов",
        fullDescription: "Лендинг для вымышленного кафе с фильтрацией меню по категориям (закуски, основные блюда, десерты, напитки), корзиной заказа с изменением количества и формой оформления.",
        problem: "Кафе без сайта теряет клиентов, которые хотят посмотреть меню и цены заранее, до звонка или визита — особенно если меню часто пылится только в виде фото в Instagram, где неудобно искать конкретное блюдо.",
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
        problem: "Beauty-салону нужно показать приложение для записи ещё до его выхода в App Store/Google Play — лендинг с мокапом и понятным описанием фич закрывает эту задачу и параллельно собирает первых пользователей на запуск.",
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
        problem: "IT-школам и коммьюнити нужен лёгкий, вовлекающий формат для сбора лидов и соцсетевых шеров — квиз с понятным результатом работает лучше сухой формы 'оставьте заявку', потому что человек в первую очередь получает что-то для себя.",
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
        problem: "Частному мастеру, работающему без офиса, нужна цифровая визитка, чтобы выглядеть надёжно перед новым клиентом — люди неохотно доверяют технику незнакомцу без сайта и отзывов, даже если находят его по объявлению или сарафанному радио.",
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
        problem: "Банку или брокеру важно, чтобы клиент сам прикинул реальную переплату до визита в офис — калькулятор на сайте снижает количество бесполезных консультаций с людьми, которые в итоге не проходят по доходу или передумывают, увидев итоговую сумму.",
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
        problem: "Человеку с большим количеством мелких задач нужен инструмент, где приоритет и срочность видны сразу, без лишних кликов — обычный список без фильтров и статистики быстро превращается в нечитаемую простыню, которую перестают открывать.",
        imageUrl: "/projects/todo.png",
        stack: ["React", "TypeScript", "UUID", "Local Storage", "CSS"],
        linkDemo: "https://to-do-list-dscordik.vercel.app",
        linkGit: "https://github.com/dscordik/to-do-list"
    }
];