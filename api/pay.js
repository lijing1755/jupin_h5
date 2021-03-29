import http from '@/utils/request'

const baseUrl = '/pay'
// 获取线上订单内容信息，支持分页、检索
export const weixinPay = (data) => {
	return http({
	    url: `${baseUrl}/weixinPay`,
	    method: 'GET',
      data,
      isLoading: true
	})
}