import axios from 'axios'
import { Message } from 'element-ui';
import store from 'store'

// 创建 axios 实例
let service = axios.create({
  headers: {'Content-Type': 'application/json'},
  timeout: 60000
})

service.defaults.baseURL = '/dev';
// 设置 post、put 默认 Content-Type
service.defaults.headers.put['Content-Type'] = 'application/json'

// 添加请求拦截器
service.interceptors.request.use((config) => {
    if (config.method === 'post' || config.method === 'put') {
        // post、put 提交时，将对象转换为string, 为处理Java后台解析问题
        config.data = JSON.stringify(config.data)
    } 
    store.dispatch('setLoading', true);
 
    // else if (config.method === 'get' && browser.isIE) {
    //     // 给GET 请求后追加时间戳， 解决IE GET 请求缓存问题
    //     let symbol = config.url.indexOf('?') >= 0 ? '&' : '?'
    //     config.url += symbol + '_=' + Date.now()
    // }
    // 请求发送前进行处理
    return config
  },(error) => {
    setTimeout(function() {
      store.dispatch('setLoading', 0)
    }, 300)
    // 请求错误处理
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(response => {
    let {data} = response;
    store.dispatch('setLoading', false)
    if (response.data && response.data.status!= 200 ) {
      Message({
        showClose: true,
        message: response.data.message
          ? response.data.message
          : '网络请求错误，请稍后重试',
        type: "error",
        offset:200,
        duration:3000,
      });
      return Promise.reject(response.data.message);
    }
    return data
  }, error => {
    let info = {}
    let {status, statusText, data} = error.response
    if (!error.response) {
      info = {
        code: 5000,
        msg: 'Network Error'
      }
    } else {
      // 此处整理错误信息格式
      info = {
        code: status,
        data: data,
        msg: statusText
      }
    }
    store.dispatch('setLoading', false)
    return Promise.reject(info)
})
  

/**
 * 创建统一封装过的 axios 实例
 * @return {AxiosInstance}
 */
export default function() {
  return service
}