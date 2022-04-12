import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Index from "@/pages/Index.vue";

import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    isAdmin?: boolean;
    requiresAuth: boolean;
    title: string;
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Index,
    meta: {
      title: "Home",
      requiresAuth: false,
      isAdmin: false
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "text-gray-900 font-bold",
  routes
});

// set the browser's page title based on the meta value
router.beforeEach((to, from, next) => {
  document.title = import.meta.env.VITE_APP_TITLE + " - " + to.meta.title;
  next();
});

export default router;
