import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import api from '../api.js'

Vue.use(ElementUI);

Vue.prototype.$http = api

Vue.config.productionTip = false;
//http://localhost:4000/captcha/sent?phone=18092697582
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
