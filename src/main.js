import { createApp } from "vue";
import VueClipboard from "vue-clipboard2";

import App from './App.vue'
import router from "./router";
import store from "./store";
import "./register-ServiceWorker";


Vue.config.productionTip = false;

/* Vue.createApp({
  router,
  store,
  render: (h) => h(App),
}).mount("#app"); */

createApp(App)({
  router,
})
  .use(store, VueClipboard)
  .mount("#app");
