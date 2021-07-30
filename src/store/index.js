import Vue from "vue";
import Vuex from "vuex";
import * as search from "./modules/search";

Vue.use(Vuex);

//状态管理
export default new Vuex.Store({
  strict: true, //开启日志
  //管理data
  state: {
    valS: "valS",
  },
  mutations: {
    SET_VAL(state, data) {
      state.val = data;
    },
  },
  // 执行异步操作 ajax请求
  actions: {},
  getters: {},
  modules: {
    search,
  },
});
