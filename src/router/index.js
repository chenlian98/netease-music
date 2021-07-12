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
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
