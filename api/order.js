import http from '@/utils/request'

const baseUrl = '/mer/online'
// 获取线上订单内容信息，支持分页、检索
export const getOnlineOrder = (data) => {
	return http({
	    url: `${baseUrl}/order`,
	    method: 'GET',
      data,
      isLoading: true
	})
}