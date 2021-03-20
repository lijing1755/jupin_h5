import http from '@/utils/request'

const baseUrl = '/mer/announcement'
// 获取公告列表
export const getList = (data) => {
	return http({
	    url: `${baseUrl}/page`,
	    method: 'GET',
	    data
	})
}