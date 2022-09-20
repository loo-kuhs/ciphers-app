import { CIPHER_KEYS } from "./ciphers/index";

import { createRouter, createWebHistory } from "vue-router";
import store from "./store";

import Index from "./views/Index.vue";
import About from "./views/About.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
      children: [
        {
          path: "./about/:cipherKey",
          name: "aboutCipher",
          props: true,
          component: About,
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});

router.beforeEach((to, from, next) => {
  let isModalVisible = false,
    redirect = false;

  if (to.name === "aboutCipher") {
    if (CIPHER_KEYS.includes(to.params.cipherKey)) {
      isModalVisible = true;
    } else {
      redirect = true;
    }
  }
  store.commit("setIsModalVisible", isModalVisible);
  return redirect ? next("/") : next();
});

export default router;