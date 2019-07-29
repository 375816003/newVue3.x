import api from '../index'
import urls from './urls'

// const header = {};

export default {
  getToken(data) {
    // return出去了一个promise
    return api.post(urls.token, {}, {'Content-Type':'application/json'}, {
      username: "admin",
      password: "admin"
    })
  }
}