import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import component from "../components.js";
import api from "../api.js";



Vue.prototype.$http = api;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  component,
  render: (h) => h(App),
}).$mount("#app");
