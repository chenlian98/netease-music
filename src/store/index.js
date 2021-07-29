import Vue from "vue";
import Vuex from "vuex";
// import {search} from "api/api";
Vue.use(Vuex);
//状态管理
export default new Vuex.Store({
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
  modules: {
    // search,
  },
  getters: {},
});
