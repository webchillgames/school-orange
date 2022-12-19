import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/pages/HomePage.vue";
import Blank from "@/pages/BlankPage.vue";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: '/"/:catchAll(.*)"', component: Blank },
  ],
});
