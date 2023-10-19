import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./pages/MainPage.vue";

const routers = [
    {
        path: "/",
        component: MainPage
    },
];

const router = createRouter({
    routes: routers,
    history: createWebHistory()
});

export default router;