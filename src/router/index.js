import { createRouter, createWebHashHistory } from "vue-router";

import Supply from "../views/Provider.vue";
import Tasks from "../views/Tasks";
import Mailing from "../views/Mailing";
import Reports from "../views/Reports";
import Search from "../views/Search";
import Discussions from "../views/Discussions";
import Education from "../views/Education";
import Docs from "../views/Docs";
import Subscriptions from "../views/Subscriptions";

const routes = [
    {
        path: "/dashboard/mailing",
        name: "Mailing",
        component: Mailing,
        meta: {
            key: 1,
            title: 'Рассылка',
        }
    },
    {
        path: "/dashboard/supply",
        name: "Supply",
        component: Supply,
        meta: {
            key: 2,
            title: 'Поставщик',
        }
    },
    {
        path: "/dashboard/tasks",
        name: "Tasks",
        component: Tasks,
        meta: {
            key: 3,
            title: 'Задачи',
        }
    },
    {
        path: "/dashboard/reports",
        name: "Reports",
        component: Reports,
        meta: {
            key: 4,
            title: 'Отчеты',
        }
    },
    {
        path: "/dashboard/search",
        name: "Search",
        component: Search,
        meta: {
            key: 5,
            title: 'История поиска',
        }
    },
    {
        path: "/dashboard/discussions",
        name: "Discussions",
        component: Discussions,
        meta: {
            key: 6,
            title: 'Обсуждения',
        }
    },
    {
        path: "/dashboard/education",
        name: "Education",
        component: Education,
        meta: {
            key: 7,
            title: 'Обучение',
        }
    },
    {
        path: "/dashboard/docs",
        name: "Docs",
        component: Docs,
        meta: {
            key: 7,
            title: 'Документы',
        }
    },
    {
        path: "/dashboard/subscriptions",
        name: "Subscriptions",
        component: Subscriptions,
        meta: {
            key: 8,
            title: 'Мои подписки',
        }
    }
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
});

export default router;
