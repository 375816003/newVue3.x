import api from '../index'
import urls from './urls'

// const header = {};

export default {
  getToken(data) { // 登陆获取token参数
    return api.post(urls.token, data,)
  },
  getInitInfo(params){ // 获取登陆用户信息及组织默认值
    return api.post(urls.getInitInfo,{},false,params)
  }
}