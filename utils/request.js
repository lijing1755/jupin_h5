import store from '@/store/index.js'; //vuex
import config from '@/config'
import alert from './alert'
let token = '';  //凭证
function service(options = {}) {
  store.getters.token && (token = store.getters.token); //从vuex中获取登录凭证
  options.url = `${config.baseUrl}${options.url}`;
  // 存入token
  if (store.getters.token) {
    const _token = {
      'Authorization': `Bearer ${store.getters.token}`
    }
    options.header = Object.assign({}, options.header, _token)
  }
  options.isLoading && uni.showLoading({
    title: '加载中'
  });
  return new Promise((resolved, rejected) => {
    options.success = (res) => { //成功
      res = res.data
      if (Number(res.code) == 10000) {  //请求成功
        resolved(res.data);
      } else {
        console.log(res.code)
        // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
        if (res.code === 12100 || res.code === 12101 || res.code === 13000) {
          alert.showModal('登陆已过期，请重新登录','提示',false,'确定登出').then(()=>{
            store.dispatch('FedLogOut').then(() => {
              console.log('res.code'+res.code)
              uni.reLaunch({
                url: '/pages/account/login/login'
              });
            })
          })
        }else {
          uni.showToast({
            icon: 'none',
            duration: 3000,
            title: `${res.msg}`
          });
        }

        rejected(res.msg);//错误
      }
    }
    options.fail = (err) => {//错误
      rejected(err); //错误
    }
    options.complete = () => {
      options.isLoading && uni.hideLoading()
    }
    uni.request(options);
  });
}
export default service;