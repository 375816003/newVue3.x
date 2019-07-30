import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import webim from './modules/webim'; // im聊天模块

Vue.use(Vuex);

// 初始化全局常量
const state = {
  loading:false,
  system: 'hdSystem',
  routes:{},
  token:'',
};

const actions = {
  setLoading({ commit, state }, params) {
    commit('setLoading', params);
  },
  setSystem({ commit, state }, params) {
    commit('setSystem', params);
  },
  setRoutes({ commit, state }, params) {
    commit('setRoutes', params);
  },
  setToken({ commit, state }, params) { 
    commit('setToken', params);
  },
}

const mutations = {
  setLoading(state, params) { //修改名字
    state.loading = params;
  },
  setSystem(state, params) { //切换系统
    state.system = params;
  },
  setRoutes(state, params) { // 动态设置路由 
    state.routes = params;
  },
  setToken(state, params) { // 登陆页面 获取token
    state.token = params;
  },
}
/* Store实例 */
export default new Vuex.Store({
  modules: {
    webim
  },
  state,
  getters,
  actions,
  mutations
});
