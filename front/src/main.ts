import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./routers";
import {createPinia} from "pinia";
import {directives} from "./directives";

const app = createApp(App);
app
    .use(router)
    .use(createPinia())
    .mount("body");

for (const [key, value] of Object.entries(directives)) {
    app.directive(key,value)
}