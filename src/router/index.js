import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/inicio",
      name: "inicio",
      component: () => import("../components/Landing.vue"),
      children: [
        {
          path: "/form",
          name: "form",
          component: () => import("../components/Form.vue"),
        },
        {
          path: "/principal",
          name: "principal",
          component: () => import("../components/SitioPrincipal.vue"),
        },
        {
          path: "/pagination",
          name: "pagination",
          component: () => import("../components/Pagination.vue"),
        },
      ],
    },
  ],
});

export default router;
