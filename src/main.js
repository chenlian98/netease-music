import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./components/ElementXComponents";
import "./components/Iview";
import "normalize.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

//http://localhost:3000/cloudsearch?keywords=’许嵩‘
//http://localhost:3000/song/url?id=167876 //查询到歌曲得id
