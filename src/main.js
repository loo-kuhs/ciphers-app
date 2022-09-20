import { createApp, h } from "vue";
import VueClipboard from "vue-clipboard2";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./register-ServiceWorker";

const app = createApp({
  store,
  router,
  render: () => h(App),
}).use(VueClipboard);

app.mount("#app");
//createApp(App).use(VueClipboard, store).use(router).mount("#app");
