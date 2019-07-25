import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from 'store'
import moment from 'moment';
import ElementUI from 'element-ui';
import echarts from 'echarts';
import lodash from 'lodash';
import QRCode from 'qrcodejs2';
import profile from 'profile';

import './assets/css/index.scss';
import './assets/css/fontColor.scss';
import 'element-ui/lib/theme-chalk/index.css';  
Vue.use(ElementUI);

moment.lang('zh-cn');
Vue.config.productionTip = false

Vue.prototype.$moment = moment;
Vue.prototype.$echarts = echarts;
Vue.prototype.$store = store;
Vue.prototype.$QRCode = QRCode;
Vue.prototype.$profile = profile;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
