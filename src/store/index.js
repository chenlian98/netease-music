import Vue from "vue";
import Vuex from "vuex";
// import search from "./modules/search.js";

Vue.use(Vuex);

//状态管理
export default new Vuex.Store({
  strict: true, //开启日志
  modules: {
    // search,
  },
});
