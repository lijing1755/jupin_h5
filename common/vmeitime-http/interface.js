/**
 * 通用uni-app网络请求
 * 基于 Promise 对象实现更简单的 request 使用方式，支持请求和响应拦截
 */

/*
// 开放的接口
import http from './interface'

http.config.baseUrl = "http://localhost:8080/api/"

http.request(url:'user/list',method:'GET').then((res)=>{
	console.log(JSON.stringify(res))
})
http.get('user/list').then((res)=>{
	console.log(JSON.stringify(res))
})
http.get('user/list', {status: 1}).then((res)=>{
	console.log(JSON.stringify(res))
})
http.post('user', {id:1, status: 1}).then((res)=>{
	console.log(JSON.stringify(res))
})
http.put('user/1', {status: 2}).then((res)=>{
	console.log(JSON.stringify(res))
})
http.delete('user/1').then((res)=>{
	console.log(JSON.stringify(res))
})

*/
import store from '@/store/index.js'
import constant from '@/common/constant.js'
export default {
	config: {
		baseUrl: constant.baseURL,
		header: {
			'Content-Type': 'application/json;charset=UTF-8',
			'Content-Type': 'application/x-www-form-urlencoded',
			'Referer':'http://www.jupin.test/jupin/pay'
		},
		data: {},
		method: "GET",
		dataType: "json",
		/* 如设为json，会对返回的数据做一次 JSON.parse */
		responseType: "text",
		success() {},
		fail() {},
		complete() {}
	},
	interceptor: {
		request: null,
		response: null
	},
	async request(options, isRefresh) {
		if (!options) {
			options = {}
		}
		options.baseUrl = options.baseUrl || this.config.baseUrl
		options.dataType = options.dataType || this.config.dataType
		options.url = options.baseUrl + options.url
		options.data = options.data || {}
		options.method = options.method || this.config.method
		// console.log(options)
		//TODO 加密数据

		//TODO 数据签名
		/*
		_token = {'token': getStorage(STOREKEY_LOGIN).token || 'undefined'},
		_sign = {'sign': sign(JSON.stringify(options.data))}
		options.header = Object.assign({}, options.header, _token,_sign)
		*/
		//没有token,则调用login获取token, 登录接口不获取token
		//#ifdef MP-WEIXIN
		var apiName = 'miniOauth2Auth'
		//#endif
		//#ifdef MP-TOUTIAO
		var apiName = 'getTtTokenByOauth2Code'
		//#endif
		// if (!store.getters.token && options.url !== `${options.baseUrl}/index/${apiName}` && options.url !==
		// 	`${options.baseUrl}/index/weLogin`) {
		// 	await store.dispatch('login')
		// }

		if (store.getters.token !== null && store.getters.token !== '') {
			// const _token = {'Authorization': `Bearer null`}
			const _token = {
				'Authorization': `Bearer ${store.getters.token}`
			}
			options.header = Object.assign({}, options.header, _token)
		}
		if (options.url.indexOf('/index/getMyPaper') === -1 && !options.hideLoading) {
			uni.showLoading({
				title: '加载中'
			});
		}
		return new Promise((resolve, reject) => {
			let _config = null
			const currentRoute = getCurrentPages()[getCurrentPages().length - 1]
			options.complete = async (response) => {
				setTimeout(function() {
					uni.hideLoading()
				}, 500);
				let statusCode = response.statusCode
				response.config = _config
				// if (process.env.NODE_ENV === 'development') {
				// 	if (statusCode === 200) {
				// 		console.log("【" + _config.requestId + "】 结果：" + JSON.stringify(response.data))
				// 	}
				// }
				if (this.interceptor.response) {
					let newResponse = this.interceptor.response(response)
					if (newResponse) {
						response = newResponse
					}
				}
				// 统一的响应日志记录
				_reslog(response)
				if (statusCode === 200) { //成功
					resolve(response.data);
				} else {
					const data = response.data.data
					if (statusCode === 401 || statusCode === 403) {
			// 			if (options.url !== `${options.baseUrl}/index/miniOauth2Auth` && options.url !==
			// `${options.baseUrl}/index/weLogin` && !uni.getStorageSync('loginStatus')) {
			// 				uni.setStorageSync('loginStatus', true)
			// 				await store.dispatch('login')
			// 				uni.setStorageSync('loginStatus', false)
			// 				uni.reLaunch({
			// 					url: '/pages/tabbar/index'
			// 				});
			// 			}
						// await store.dispatch('login')
						// uni.reLaunch({
						// 	url: '/pages/tabbar/index'
						// });
						await store.commit('SET_QUERY',currentRoute.options)
						//#ifdef MP-WEIXIN
						uni.redirectTo({
							url: `/pages/authorize/index?currentRouter=${currentRoute.route}`
						});
						//#endif
						//#ifdef APP-PLUS
						if(currentRoute.route === 'pages/tabbar/live'){
							uni.navigateTo({
								url: `/pages/appLogin/index?currentRouter=${currentRoute.route}`
							});
						}else{
							uni.redirectTo({
								url: `/pages/appLogin/index?currentRouter=${currentRoute.route}`
							});
						}
						//#endif
						//#ifdef MP-TOUTIAO
						uni.redirectTo({
							url: `/pages/authorize/index?currentRouter=${currentRoute.__route__}`
						});
						
						//#endif
						reject(response)
					} else if (statusCode === 500) {
						uni.showToast({
							title: response.data.msg,
							icon: 'none'
						})
						reject(response)
					} else if (response.data.code === 60001 ||response.data.code === 50007 || response.data.code === 40504) {
						reject(response)
					} else {
						uni.showToast({
							title: response.data.msg,
							icon: 'none'
						})
						reject(response)
					}
				}
			}

			_config = Object.assign({}, this.config, options)
			_config.requestId = new Date().getTime()

			if (this.interceptor.request) {
				this.interceptor.request(_config)
			}

			// 统一的请求日志记录
			_reqlog(_config)

			// if (process.env.NODE_ENV === 'development') {
			// 	console.log("【" + _config.requestId + "】 地址：" + _config.url)
			// 	if (_config.data) {
			// 		console.log("【" + _config.requestId + "】 参数：" + JSON.stringify(_config.data))
			// 	}
			// }

			uni.request(_config);
		});
	},
	get(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'GET'
		return this.request(options)
	},
	post(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'POST'
		return this.request(options)
	},
	put(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'PUT'
		return this.request(options)
	},
	delete(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'DELETE'
		return this.request(options)
	}
}


/**
 * 请求接口日志记录
 */
function _reqlog(req) {
	// if (process.env.NODE_ENV === 'development') {
	// 	console.log("【" + req.requestId + "】 地址：" + req.url)
	// 	if (req.data) {
	// 		console.log("【" + req.requestId + "】 请求参数：" + JSON.stringify(req.data))
	// 	}
	// }
	//TODO 调接口异步写入日志数据库
}

/**
 * 响应接口日志记录
 */
function _reslog(res) {
	let _statusCode = res.statusCode;
	// if (process.env.NODE_ENV === 'development') {
	// 	console.log("【" + res.config.requestId + "】 地址：" + res.config.url)
	// 	if (res.config.data) {
	// 		console.log("【" + res.config.requestId + "】 请求参数：" + JSON.stringify(res.config.data))
	// 	}
	// 	console.log("【" + res.config.requestId + "】 响应结果：" + JSON.stringify(res))
	// }
	//TODO 除了接口服务错误外，其他日志调接口异步写入日志数据库
	switch (_statusCode) {
		case 200:
			break;
		case 401:
			break;
		case 404:
			break;
		default:
			break;
	}
}
