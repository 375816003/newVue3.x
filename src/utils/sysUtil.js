import moment from 'moment';
// import CryptoJS from 'crypto-js';
export default class sysUtil {

  /**
   *  获取当前 7天的时间 一周时间
   * @param {String} type  start 本周的开始时间 end 本周的结束时间
   */
  static getCurrDays(type) {
    let date = [];
    let start7 = moment().subtract('days', 6).format('YYYY-MM-DD'); // 前7天的时间
    let start29 = moment().subtract('days', 29).format('YYYY-MM-DD'); // 前29天的时间
    let startM3 = moment().subtract('days', 89).format('YYYY-MM-DD'); // 前3个月的时间
    let years = moment().subtract('days', 179).format('YYYY-MM-DD'); // 前180天的时间
    switch (type) {
      case 'week':
        date[0] = moment(`${start7} 00:00:00`).valueOf();
        break;
      case 'month':
        date[0] = moment(`${start29} 00:00:00`).valueOf();
        break;
      case 'quarter':
        date[0] = moment(`${startM3} 00:00:00`).valueOf();
        break;
      case 'halfYear':
        date[0] = moment(`${years} 00:00:00`).valueOf();
        break;
    }
    date[1] = moment().valueOf();
    return date;
  }
  

  /**
   * 判断对象是否为空对象
   * @param {*} obj 需要判断的对象
   * @returns true 是空对象 false 不是空对象
   */
  static isEmptyObj(obj) {
    if (typeof obj !== 'object') {
      return false;
    }
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
  /**
   * 判断数据是否为空
   * @param {*} value 要判断的对象
   * @returns true 为空 false 不为空
   */
  static isEmpty(value) {
    return value === null || value === 'null' || value === undefined || value === '' || value.length === 0 || this.isEmptyObj(value);
  }

  /**
   * 判断对象是否含有某些属性
   * @param {Object} obj 要判断的对象 
   * @param {Array} attrs 是否包含的属性
   */
  static hasAttrs(obj, attrs) {
    if (_.isPlainObject(attrs)) {
      attrs = [attrs];
    }
    for (let i = 0; i < attrs.length; i++) {
      let attr = attrs[i];
      if (!_.hasIn(obj, attr)) {
        return false;
      }
    }
    return true;
  }

  /**
   * 根据生日获取年龄
   * @param {*} birthday 生日
   * @returns {*} age 年龄
   */
  static getAge(birthday) {
    let birth = moment(birthday);
    let now = moment({
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0
    });

    let value = birth.valueOf();

    if (_.isNaN(value)) {
      return -2;
    }

    if (birth.isAfter(now, 'day')) {
      return -1;
    }

    let duration = moment.duration(now.diff(birth));
    let age = duration.years();
    return age;
  }

  /**
   * 在用户身份证号通过正则验证后，再进行年龄验证
   * @param  pid 用户的身份证号
   * @returns true 通过 false 未通过 
   */
  static handlePid(pid) {
    let birthday = pid.substring(6, 10) + '-' + pid.substring(10, 12) + '-' + pid.substring(12, 14);
    let age = this.getAge(birthday);
    if (age >= 0 && age <= 130) {
      return true;
    } else {
      return false;
    }
  }

  static handPhone(value) {
    if (!value) {
      return false;
    }
    value = value.trim();
    let reg = /^1\d{10}$/

    return reg.test(value);
  }

  /**
   * 获取时、分、秒、毫秒都置为0的时间
   * @param {Number} time 
   * @returns 时间毫秒数
   */
  static getStartDate(time) {
    time = moment(time).valueOf();
    if (this.isEmpty(time)) {
      return '';
    }

    let date = moment(time).set({
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0
    });
    return date.valueOf();
  }
  /**
   * 获取某天的结束日期
   * @param {*} time 
   * @returns 日期毫秒数
   * //
   */
  static getEndDate(time) {
    time = this.resetDate(time);
    if (time === '') {
      return '';
    }
    time = moment(time).add(1, 'day').valueOf() - 1;
    return time;
  }
  /**
   * 获取某天是否在某各时间段范围内包含开始和结束
   * @param {*} time 
   * @param {*} startTime 
   * @param {*} endTime 
   * @returns 日期毫秒数
   * //
   */
  static getBetween(time, startTime, endTime) {

    let b = moment(time).isBetween(startTime, endTime, 'day');
    let b1 = moment(time).isSame(startTime, 'day');
    let b2 = moment(time).isSame(endTime, 'day');
    return !!(b || b1 || b2);
  }

  /**
   * 获取数据的数据类型（包括array类型）
   * @param {*} data 需要获取数据类型的数据
   * @returns 数据类型
   */
  static getDataType(data) {
    if (_.isArray(data)) {
      return 'array';
    }

    if (_.isObject(data)) {
      return 'object';
    }

    return typeof data;
  }
  /**
   * 毫秒数转化为日期格式字符串 如果是本年 年为2位 否则为4位
   * @param {*} time 
   * @returns 转化后的日期字符串
   */
  static timeFormat(time) {
    if (moment().isSame(moment(time), 'year')) {
      return moment(time).format('YY-MM-DD HH:mm');
    } else {
      return moment(time).format('YYYY-MM-DD HH:mm');
    }
  }

  /**
   * 判断是否是手机端浏览器
   * @returns true 是 flase 否
   */
  static isPhone() {
    let userAgentInfo = navigator.userAgent;
    let Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone");
    let flag = false;
    for (let v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = true;
        break;
      }
    }
    return flag;
  }
  /**
   * 判断浏览器是哪个设备的
   * @returns 'android' 安卓系统 'ios' 苹果系统  'web' web端
   */
  static getClient() {
    let userAgent = navigator.userAgent;
    let isAndroid = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1;
    if (isAndroid) {
      return 'android';
    }
    let isiOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isiOS) {
      return 'ios';
    }
    return 'web';
  }
  /**
   * 判断是否是微信浏览器
   * @returns true 是 false 否
   */
  static isWeixin() {
    let userAgent = navigator.userAgent.toLowerCase();
    return userAgent.match(/MicroMessenger/i) == "micromessenger";
  }
  /**
   * Number 转换大写
   * @param number 要转换的数值
   */
  static number2String(number) {
    let chnNumChar = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
    let chnUnitChar = ["", "十", "百", "千", "万", "十万", "百万", "千万", "亿", "十亿", "百亿", "千亿"];

    let str = number + '';
    let count = str.length;
    let numStr = '';
    for (let i = 0; i < count; i++) {
      let num = Number(str[i]);
      let unit = count - i - 1;
      let hasUnit = true;
      if (count !== 1 && num === 0) {
        if (i === count - 1) {
          continue;
        }
        let nextNum = Number(str[i + 1]);
        if (nextNum === 0) {
          continue;
        }
        hasUnit = false;
      }

      if (num === 1 && i === 0) {
        if (count === 1 || unit % 4 !== 1) {
          numStr += chnNumChar[num];
        }
      } else {
        numStr += chnNumChar[num];
      }

      if (hasUnit) {
        numStr += chnUnitChar[unit];
      }
    }
    return numStr;
  }
}