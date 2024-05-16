import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Crée une nouvelle instance de l'application Vue
const app = createApp(App);

// Configure le router pour l'application
app.use(router);

// Montre l'application sur l'élément #app dans le fichier HTML principal
app.mount("#app");
