import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ConnectionView from "../views/ConnectionView.vue";
import DashboardView from "../views/DashboardView.vue";
import DetailsView from "../views/DetailsView.vue";
import { createAuthGuard } from "@auth0/auth0-vue";



export function router(app) {

  const routes = [
    {
      path: "/",
      name: "connection",
      component: ConnectionView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
      beforeEnter: createAuthGuard(app)
    },
    {
      path: "/patient/:id",
      name: "patient",
      component: DetailsView,
      beforeEnter: createAuthGuard(app)
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
  ];

  return createRouter({
    history: createWebHashHistory(),
    routes: routes,
  });
  
}
