export default{
  handleImage(content) {
    let newStr = '';
    newStr = content.replace(/class="[\s\S]*?"/g, "");
    newStr = newStr.replace(/src="http/g, 'class="r-img" mode="widthFix" src="http');
    // newStr = newStr.replace(/src="\/public\/uploads\/ueditor/g, 'class="r-img" mode="widthFix" src="' + constant.imageBaseUrl + '/public/uploads/ueditor');
    return newStr;
  },
  // 检查手机号码
  isPhone(phone) {
    if (!(/^1\d{10}$/.test(phone))) {
      return false
    } else {
      return true
    }
  },
  // 判断数字格式
  isNumber(str) {
    if (!(/^[0-9]*$/.test(str))) {
      return false
    }
    return true
  },
  // 格式化时间
  formatTime(number, format) {
    if (number === null || number === undefined) {
      return ''
    }
    var formateArr = ['Y', 'm', 'd', 'H', 'i', 's']
    var returnArr = []

    // var date = new Date(number * 1000);
    var date = new Date(number)
    returnArr.push(date.getFullYear())
    returnArr.push(formatNumber(date.getMonth() + 1))
    returnArr.push(formatNumber(date.getDate()))

    returnArr.push(formatNumber(date.getHours()))
    returnArr.push(formatNumber(date.getMinutes()))
    returnArr.push(formatNumber(date.getSeconds()))

    for (var i in returnArr) {
      format = format.replace(formateArr[i], returnArr[i])
    }

    return format
  },
  formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  },
  // 判断是否为空对象
  isNullObj(obj) {
    for (const i in obj) { // 如果不为空，则会执行到这一步，返回false
      return false
    }
    return true // 如果为空,返回true
  },
  // 检查是否是空字符串
  isNullStr(str) {
    if (str === null || str === undefined || str === '' || str === '' || str === 'undefined') {
      return true
    }
    return false
  },
  // 判断是否空数组
  isNullArray(data) {
    if (data === null || data === undefined || data.length === 0) {
      return true
    }
    return false
  },
  // 检查是否是数组
  isArrayFn(value) {
    if (typeof Array.isArray === 'function') {
      return Array.isArray(value)
    } else {
      return Object.prototype.toString.call(value) === '[object Array]'
    }
  },
  // 验证6-12位数字和字母的正则表达式
  verifyPassword(data) {
    const reg = /^[A-Za-z0-9]{6,12}$/
    return reg.test(data)
  },
  // 获取相对当前的某天的日期
  getSomeDayFun(days) {
    var date = new Date();
    date.setTime(date.getTime() + days*24*60 * 60 * 1000);
    var day1 = date.getFullYear();
    var day2 = formatNumber(date.getMonth() + 1);
    var day3 = formatNumber(date.getDate());
    return day1.toString() + '-' + day2 + '-' + day3;
  },
  // 节流
  throttle(fn, gapTime) {
    if (gapTime == null || gapTime == undefined) {
      gapTime = 1500;
    }

    let _lastTime = null;
    return function () {
      let _nowTime = new Date();
      if (_nowTime - _lastTime > gapTime || !_lastTime) {
        fn.apply(this, arguments);
        _lastTime = _nowTime;
      }
    }
  }
}



/**
 * @description 项目轮播图跳转方法
 * @param {String} h5_href  h5端用地址
 * @param {String} mini_href  小程序端用地址
 */
function swiperGoPage(h5_href, mini_href) {
  let url;
  //#ifdef H5
  url = h5_href
  //#endif
  //#ifdef MP-WEIXIN || APP-PLUS
  url = mini_href
  //#endif
  console.log(h5_href)
  var arr = [
    '/pages/tabbar/index/index',
    '/pages/tabbar/cooperation/cooperation',
    '/pages/tabbar/serviceCases/serviceCases',
    '/pages/tabbar/me/me'
  ]
  if (/^http/.test(url)) { //是否外链
    if(arr.includes(url)) {
      uni.switchTab({
        url: `/pages/webview/index?url=${url}`
      });
    }else {
      uni.navigateTo({
        url: `/pages/webview/index?url=${url}`
      });
    }
  } else {
    if(arr.includes(url)) {
      uni.switchTab({
        url
      });
    }else {
      uni.navigateTo({
        url
      });
    }
  }
}


