import Vue from "vue";
import VueRouter from "vue-router";
import LogIn from "../views/LogIn.vue";


// console.log(LogIn);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LogIn",
    component: LogIn,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
