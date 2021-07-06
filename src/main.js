import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementXComponents from "../ElementXComponents.js";
import "element-ui/lib/theme-chalk/index.css";
import api from "../api.js";

// import ElementUI from "element-ui";
Vue.prototype.$http = api;
// Vue.use(ElementUI);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  ElementXComponents,
  render: (h) => h(App),
}).$mount("#app");
