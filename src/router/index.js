import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import index from "../views/index.vue";

Vue.use(VueRouter);
//路由配置
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Index",
    name: "Index",
    component: () => import("../views/index"),
  },
];

const router = new VueRouter({
  mode: "history", //去掉#号
  routes,
});

export default router;
