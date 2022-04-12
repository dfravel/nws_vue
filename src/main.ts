import { createApp } from "vue";
import BaseLayout from "@/components/BaseLayout.vue";

import App from "@/App.vue";
import router from "@/router";
import { createHead } from "@vueuse/head";

// use FontAwesome
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from "@/utils/FontAwesome";

//using sass for more options
import "@/assets/styles/index.scss";
import { createPinia } from "pinia";
const pinia = createPinia();

const head = createHead();
const app = createApp(App);

// load our components and alias them
app.component("BaseLayout", BaseLayout);
app.component("fa", FontAwesomeIcon);
app.component("fal", FontAwesomeLayers);
app.component("fat", FontAwesomeLayersText);
app.use(router);
app.use(pinia);
app.use(head);

app.mount("#app");
