import http from '@/utils/request'

const baseUrl = '/mer/mobile'
// 重置密码
export const register = (data) => {
	return http({
	    url: `${baseUrl}/register`,
	    method: 'post',
	    data,
      isLoading: true
	})
}
// 登陆
export const login = (data) => {
	return http({
	    url: `${baseUrl}/login`,
	    method: 'POST',
      data,
      isLoading: true
	})
}
// 重置密码
export const resetPassword = (data) => {
	return http({
	    url: `${baseUrl}/resetPassword`,
	    method: 'post',
	    data
	})
}
// 获取手机验证码
export const sendPhoneCode = (data) => {
	return http({
	    url: `/index/sendPhoneCode`,
	    method: 'POST',
	    data
	})
}
// 更新用户信息
export const editUserInfo = (data) => {
	return http({
	    url: `${baseUrl}/editUserInfo`,
	    method: 'POST',
	    data
	})
}

//获取app版本信息 /index/getAppVersionInfo
export const getAppVersionInfo = (data) => {
	return http({
	    url: `/index/getAppVersionInfo`,
	    method: 'GET',
      data,
	})
}
//用户注册和绑定 /index/webRegistered
export const webRegistered = (data) => {
	return http({
	    url: `/index/webRegistered`,
	    method: 'POST',
	    data
	})
}
//注册协议 /index/getRegisterAgreement
export const getRegisterAgreement = (data) => {
	return http({
	    url: `/index/getRegisterAgreement`,
	    method: 'GET',
	    data
	})
}
