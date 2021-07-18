import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LogIn",
    component: () => import("../views/LogIn.vue"),
  },
  {
    path: "/Home",
    name: "Home",
    component: () => import("../views/Home"),
  },
  {
    path: "/m/MHome",
    name: "MHome",
    component: () => import("../views/m/MHome"),
    children: [
      // {
      //   path: "",
      //   name: "MHome",
      //   component: () => import("../views/m/MHome"),
      // },
      {
        path: "Discovery",
        name: "Discovery",
        component: () => import("../views/m/m-views/Discovery"),
      },
      {
        path: "Podcast",
        name: "Podcast",
        component: () => import("../views/m/m-views/Podcast"),
      },
      {
        path: "User",
        name: "User",
        component: () => import("../views/m/m-views/User"),
      },
      {
        path: "Forum",
        name: "Forum",
        component: () => import("../views/m/m-views/Forum"),
      },
    ],
  },
  //404路由
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
