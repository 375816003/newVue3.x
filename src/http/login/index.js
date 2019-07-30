import api from '../index'
import urls from './urls'

// const header = {};

export default {
  getToken(data) {
    // return出去了一个promise
    return api.post(urls.token, data,)
  },
  getInitInfo(params){
    return api.post(urls.getInitInfo, {}, {},params)
  }
}