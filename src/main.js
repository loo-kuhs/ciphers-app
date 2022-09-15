import Vue from "vue";
import VueClipboard from "vue-clipboard2";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./register-ServiceWorker";

Vue.use(VueClipboard);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
