//搜索方法
import { getArticle } from "../api/api";

export default {
  msg: "search module",
  namespaced: true,
  state: {
    list: [],
  },
  mutations: {
    SET_TABLE_DATA(state, data) {
      state.list = data;
    },
    actions: {
      async getItem({ commit }, id) {
        const res = await getArticle(id);
        commit("SET_ITEM", res.data);
      },
    },
  },
};
