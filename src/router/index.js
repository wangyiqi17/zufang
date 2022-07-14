import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login"),
  },
  {
    path: "/",
    name: "layout",
    component: () => import("@/views/layout"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home"),
      },
      {
        path: "/search",
        name: "search",
        component: () => import("@/views/search"),
      },
      {
        path: "/news",
        name: "news",
        component: () => import("@/views/news"),
      },
      {
        path: "/my",
        name: "my",
        component: () => import("@/views/my"),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
