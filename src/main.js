import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//Bootstrap 5.22
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

createApp(App).use(store).use(router).mount("#app");
