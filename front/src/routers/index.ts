import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../pages/MainPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegistationPage from "../pages/RegistationPage.vue";

const routers = [
    {
        path: "/",
        component: MainPage
    },
    {
        path: "/signIn",
        component: LoginPage
    },
    {
        path: "/signUp",
        component: RegistationPage
    },
    {
        path: "/cart",
        component: MainPage
    },
];

const router = createRouter({
    routes: routers,
    history: createWebHistory()
});

export default router;