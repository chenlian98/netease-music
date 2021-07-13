import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
//状态管理
export default new Vuex.Store({
  //管理data
  state: {
    count: 10,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  // 执行异步操作 ajax请求
  actions: {},
  modules: {},
  getters: {
    count10(state) {
      return state * state.count;
    },
  },
});
