const session = window.sessionStorage;
const localStorage = window.localStorage;

export default {
  setSession(key, value) {
    let obj = {
      data: value
    };
    if (value === null) {
      obj.type = 'null';
    } else {
      obj.type = typeof value;
    }
    value = JSON.stringify(obj);
    session.setItem(key, value);
  },

  getSession(key) {

    let value = session.getItem(key);
    if (value === null || value === undefined) {
      //todo
      return value;
    }
    value = JSON.parse(value);
    if (value.type === 'undefined') {
      return undefined;
    } else if (value.type === 'null') {
      return null;
    } else {
      return value.data;
    }
  },

  removeSession(key) {
    session.removeItem(key);
  },

  clearSession() {
    session.clear();
  },
  setLocalStorage(key, value) {
    let userName = this.getSession('username');
    var obj = {
      data: value
    };
    if (value === null) {
      obj.type = 'null';
    } else {
      obj.type = typeof value;
    }
    value = JSON.stringify(obj);
    localStorage.setItem(key + '_' + userName, value);
  },
  getLocalStorage(key) {
    let userName = this.getSession('username');
    var value = localStorage.getItem(key + '_' + userName);

    if (value === null || value === undefined) {
      return value;
    }
    value = JSON.parse(value);
    if (value.type === 'undefined') {
      return undefined;
    } else if (value.type === 'null') {
      return null;
    } else {
      return value.data;
    }
  },
  clearLocalStorage() {
    localStorage.clear();
  },
  removeLocalStorage(key) {
    let userName = this.getSession('username');
    localStorage.removeItem(key + '_' + userName);
  }
}
