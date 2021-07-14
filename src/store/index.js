import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// import axios from "axios";
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
  actions: {
    search(val) {
      console.log(val)
      return axios
        .get(`http://localhost:3000/search?keywords=${val}`)
        .then((res) => {
          // console.log(res.data.result.songs);
          this.list = res.data.result.songs;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
  getters: {
  },
});
