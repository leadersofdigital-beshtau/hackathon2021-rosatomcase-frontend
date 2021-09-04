import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
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
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            key: 0
        }
    },
    {
        path: "/dashboard/mailing",
        name: "Mailing",
        component: Mailing,
        meta: {
            key: 1
        }
    },
    {
        path: "/dashboard/supply",
        name: "Supply",
        component: Supply,
        meta: {
            key: 2
        }
    },
    {
        path: "/dashboard/tasks",
        name: "Tasks",
        component: Tasks,
        meta: {
            key: 3
        }
    },
    {
        path: "/dashboard/reports",
        name: "Reports",
        component: Reports,
        meta: {
            key: 4
        }
    },
    {
        path: "/dashboard/search",
        name: "Search",
        component: Search,
        meta: {
            key: 5
        }
    },
    {
        path: "/dashboard/discussions",
        name: "Discussions",
        component: Discussions,
        meta: {
            key: 6
        }
    },
    {
        path: "/dashboard/education",
        name: "Education",
        component: Education,
        meta: {
            key: 7
        }
    },
    {
        path: "/dashboard/docs",
        name: "Docs",
        component: Docs,
        meta: {
            key: 7
        }
    },
    {
        path: "/dashboard/subscriptions",
        name: "Subscriptions",
        component: Subscriptions,
        meta: {
            key: 8
        }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
