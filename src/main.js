import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Components from "../ElementXComponents.js";
import "element-ui/lib/theme-chalk/index.css";
import "normalize.css"

// import api from "../api.js";
// Vue.prototype.$http = api;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  Components,
  render: (h) => h(App),
}).$mount("#app");
