import http from '@/utils/request'

const baseUrl = '/mer/merchant'
// 获取商户内容信息
export const getMerchantInfo = (data) => {
	return http({
	    url: `${baseUrl}/current`,
	    method: 'GET',
	    data
	})
}