import type { Project } from "../types/types.ts";

export const projects: Project[] = [
    {
        id: 1,
        title: "Misha Store",
        description: "Fullstack интернет-магазин электроники с каталогом, фильтрацией, корзиной, избранным и JWT-авторизацией",
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
        title: "Cafe Fano",
        description: "Лендинг кафе с меню, категориями блюд и функционалом корзины заказов",
        imageUrl: "/projects/cafe.png",
        stack: ["React", "TypeScript", "Vite", "CSS"],
        linkDemo: "https://cafe-landing-six.vercel.app",
        linkGit: "https://github.com/dscordik/cafe-landing"
    },
    {
        id: 3,
        title: "Premium Seltec",
        description: "Landing page для beauty-салона с записью к мастеру и демонстрацией мобильного приложения",
        imageUrl: "/projects/app.png",
        stack: ["React", "TypeScript", "Vite", "CSS", "Responsive Design"],
        linkDemo: "https://app-landing-ten-silk.vercel.app",
        linkGit: "https://github.com/dscordik/app-landing"
    },
    {
        id: 4,
        title: "Quiz: Какой ты программист",
        description: "Интерактивный квиз для определения роли в IT: Frontend, Backend, Designer или DevOps",
        imageUrl: "/projects/kviz.png",
        stack: ["React", "TypeScript", "Vite", "State Management", "CSS"],
        linkDemo: "https://kviz-landing-ec3z.vercel.app",
        linkGit: "https://github.com/dscordik/kviz-landing"
    },
    {
        id: 5,
        title: "Визитка мастера по ремонту",
        description: "Сайт-визитка для специалиста по диагностике и ремонту электроники с контактной информацией",
        imageUrl: "/projects/vizitka.png",
        stack: ["React", "TypeScript", "Vite", "CSS"],
        linkDemo: "https://vizitka-land.vercel.app",
        linkGit: "https://github.com/dscordik/vizitka-land"
    },
    {
        id: 6,
        title: "Калькулятор кредитов",
        description: "Калькулятор для расчёта ипотеки, кредита и микрозайма: сумма, срок, ставка и ежемесячный платёж",
        imageUrl: "/projects/crediit-calc.png",
        stack: ["React", "TypeScript", "Vite", "CSS"],
        linkDemo: "https://credits-calc-land.vercel.app",
        linkGit: "https://github.com/dscordik/credits-calc-land"
    },
    {
        id: 7,
        title: "To-Do List",
        description: "Список задач с приоритетами, фильтрами, поиском, статистикой и сохранением данных между сессиями",
        imageUrl: "/projects/todo.png",
        stack: ["React", "TypeScript", "UUID", "Local Storage", "CSS"],
        linkDemo: "https://to-do-list-dscordik.vercel.app",
        linkGit: "https://github.com/dscordik/to-do-list"
    }
];