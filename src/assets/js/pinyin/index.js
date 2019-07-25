import {config} from './config';

export default class Pinyin {
  static ConvertPinyin(l1) {
    var l2 = l1.length;
    var I1 = "";
    var reg = new RegExp('[a-zA-Z0-9\- ]');
    for (var i = 0; i < l2; i++) {
      var val = l1.substr(i, 1);
      var name = this.arraySearch(val, config);
      if (reg.test(val)) {
        I1 += val;
      } else if (name !== false) {
        I1 += name;
      }
    }
    I1 = I1.replace(/ /g, '-');
    while (I1.indexOf('--') > 0) {
      I1 = I1.replace('--', '-');
    }
    return I1;
  }

  // 在对象中搜索
  static arraySearch(l1, l2) {
    for (var name in config) {
      if (config[name].indexOf(l1) != -1) {
        return this.ucfirst(name);
        break;
      }
    }
    return false;
  }

  static ucfirst(l1) {
    if (l1.length > 0) {
      var first = l1.substr(0, 1).toUpperCase();
      var spare = l1.substr(1, l1.length);
      return first + spare;
    }
  }

  static getAllFirstWord(words){
    var firstWord = '';
    for (let i = 0; i < words.length; i++){
      let pinyin = this.ConvertPinyin(words[i]);
      let first = pinyin[0];
      firstWord += first;
    }
    return firstWord;
  }
}
