import http from './interface.js'

const baseUrl = '/trade_api'
// h5支付
export const weixinPay = (data) => {
	return http.request({
	    url: `${baseUrl}/buySingle`,
	    method: 'POST',
      data,
      isLoading: true
	})
}
// 发送验证码
export const sendPhoneCode = (data) => {
  return http.request({
    url: `/index/wx_pay`,
    method: 'GET',
    data,
  })
}