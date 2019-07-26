import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from 'store'
import moment from 'moment';
import ElementUI from 'element-ui';
import echarts from 'echarts';
import lodash from 'lodash';
import 'element-ui/lib/theme-chalk/index.css';  
import api from './api/install'

Vue.use(api);
Vue.use(ElementUI);

moment.lang('zh-cn');
Vue.config.productionTip = false

Vue.prototype.$moment = moment;
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
