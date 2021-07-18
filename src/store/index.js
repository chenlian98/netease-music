import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
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
  actions: {
    async search(valS) {
      // console.log(val);
      const res = await axios({
        url: `http://localhost:3000/search?keywords=${valS}`,
      });
      valS.commit("SET_VAL", res.data.result.songs);
    },
  },
  modules: {},
  getters: {},
});
