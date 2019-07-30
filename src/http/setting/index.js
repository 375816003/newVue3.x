import api from '../index'
import urls from './urls'

// const header = {};

export default {
  getdownOrgs(data) {
    // return出去了一个promise
    return api.get(urls.token, data)
  },

}