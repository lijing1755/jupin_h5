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
//获取订单信息
export const getTradeOrderDetails = (data) => {
	return http.request({
	    url: `${baseUrl}/getTradeOrderDetails`,
	    method: 'GET',
	    data,
	})
}
// 发送验证码
export const payTrade = (data) => {
  return http.request({
    url: `${baseUrl}/payTrade`,
    method: 'POST',
    data,
  })
}