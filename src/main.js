/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "maz-ui/css/main.css";
import "@vuepic/vue-datepicker/dist/main.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import "@fortawesome/fontawesome-free/css/all.css";
// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
import "aos/dist/aos.css";

const app = createApp(App);

app.config.globalProperties.$appId = 10;
app.config.globalProperties.$superAppId = 1;
app.config.globalProperties.$fileURL = "https://admin1.the-gypsy.sg/img/app/";
export const appId = 10;
export const fileURL = "https://admin1.the-gypsy.sg/img/app/";

registerPlugins(app);
app.use(store(app));
app.use(router);
app.mount("#app");
