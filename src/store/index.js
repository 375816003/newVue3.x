import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import webim from './modules/webim'; // im聊天模块

Vue.use(Vuex);

// 初始化全局常量
const state = {
  loading:false
};

const actions = {
  setLoading({ commit, state }, params) {
    commit('setLoading', params);
  },
}

const mutations = {
  setLoading(state, params) { //修改名字
    state.loading = params;
  },
}
/* Store实例 */
export default new Vuex.Store({
  modules: {
    webim
  },
  state,
  getters,
  actions: actions,
  mutations: mutations
});
