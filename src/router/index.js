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
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
