import api from '../index'
import urls from './urls'

const header = {}

export default {
  getToken(params) {
    // return出去了一个promise
    return api.post(urls.token, params, header)
  }
}