import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import webim from './modules/webim'; // im聊天模块

Vue.use(Vuex);

// 初始化全局常量
const state = {
 
};


/* Store实例 */
export default new Vuex.Store({
  modules: {
    webim
  },
  state,
  getters,
  actions:{},
  mutations:{}
});
