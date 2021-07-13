import Vue from "vue";
import VueRouter from "vue-router";
import LogIn from "../views/LogIn.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/Home",
    name: "Home",
    component: () => import("../views/Home"),
  },
  {
    path: "/m/admin",
    name: "admin",
    component: () => import("../views/m/admin"),
    children: [
      {
        path: "",
        name: " admin",
        component: () => import("../views/m/haizhi"),
      },
      {
        path: "haizi",
        name: "haizi",
        component: () => import("../views/m/haizhi"),
      },
      {
        path: "nihao",
        name: "nihao",
        component: () => import("../views/m/nihao"),
      },
      {
        path: "posts",
        name: "posts",
        component: () => import("../views/m/posts"),
      },
    ],
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("@/views/NotFound"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
