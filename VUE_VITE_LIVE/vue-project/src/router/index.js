import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: MainPage,
        },
        {
            path: "/cafe",
            component: CafePage,
        },
        {
            path: "/blog",
            component: BlogPage,
        },
        {
            path: "/mail",
            component: MailPage,
        },
    ],
});

export default router;
