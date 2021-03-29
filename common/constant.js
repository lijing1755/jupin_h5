//测试环境
const dev = {

	//#ifdef MP-WEIXIN
	appId: 'wx0cebbf185608a51c',
	//#endif
	//#ifdef MP-TOUTIAO
	appId: 'tte6bb900679919216',
	//#endif
	baseURL: 'https://phptest.tatakeji.cn/jupin',
	// baseURL: 'https://wechat3.walkerbang.com/jupin',
	secret: '9f8c9cb1ed9ca9a997a610e74b1dca58',
	imageBaseUrl: 'https://phptest.tatakeji.cn',
	videoBaseUrl: 'https://phptest.tatakeji.cn',
	imageStaticUrl: '/jupin/public/static/images'
};

//正式环境
const build = {
	//#ifdef MP-WEIXIN
	appId: 'wx0cebbf185608a51c',
	//#endif
	//#ifdef MP-TOUTIAO
	appId: 'tt431935a4dc237272',
	//#endif
	baseURL: 'https://jupin.lekebaba.cn/lekebaba',
	// baseURL: 'https://wechat3.walkerbang.com/jupin',
	imageBaseUrl: 'https://jupinshop.oss-cn-shenzhen.aliyuncs.com',
	videoBaseUrl: 'https://jupinshop.oss-cn-shenzhen.aliyuncs.com',
	imageStaticUrl: '/lekebaba/public/static/images'
};
// const config = process.env.NODE_ENV === 'development' ? dev : build;
const config = dev;
// const baseURL =process.env.NODE_ENV === 'development' ? dev.baseURL: build.baseURL
// const baseURL = config.baseURL
// const imageBaseUrl =process.env.NODE_ENV === 'development' ? 'https://wechat3.walkerbang.com': 'https://jupinshop.oss-cn-shenzhen.aliyuncs.com'
// const imageBaseUrl = config.imageBaseUrl
// const imageBaseUrl ='https://wechat3.walkerbang.com'
// const videoBaseUrl =process.env.NODE_ENV === 'development' ?  'https://wechat3.walkerbang.com':'https://jupinshop.oss-cn-shenzhen.aliyuncs.com'
// const videoBaseUrl = config.videoBaseUrl
// 图片基本域名
// const imageStaticUrl = imageBaseUrl + '/jupin/public/static/images'
// const imageStaticUrl = process.env.NODE_ENV === 'development'? imageBaseUrl + '/jupin/public/static/images':imageBaseUrl + '/lekebaba/public/static/images'
const {
	baseURL,
	imageBaseUrl,
	videoBaseUrl
} = config;
const imageStaticUrl = imageBaseUrl + config.imageStaticUrl;
// app_id配置
const appId = process.env.NODE_ENV === 'development' ? dev.appId : build.appId;

// 订单tab状态
const orderStatus = [{
	label: '全部',
	value: 9
}, {
	label: '待付款',
	value: 0
}, {
	label: '待分享',
	value: 7
}, {
	label: '待发货',
	value: 1
}, {
	label: '待收货',
	value: 2
}, {
	label: '待评价',
	value: 3
}];

// 全部订单状态 -1:已取消,0:待支付,1:待发货,2:待收货,3:待评论,4:已完成,5:有退款商品,6:该订单商品全部已退款
const allOrderStatus = [{
	label: '已取消',
	value: -1
}, {
	label: '待付款',
	value: 0
}, {
	label: '待发货',
	value: 1
}, {
	label: '待收货',
	value: 2
}, {
	label: '已完成',
	value: 3
}, {
	label: '已退款',
	value: 6
}, {
	label: '交易完成',
	value: 4
}];

// 售后订单状态 -2:用户撤销,-1:永久拒绝，1:售后中,2:不通过，3:通过
const saleOrderStatus = [{
	label: '用户撤销',
	value: -2
}, {
	label: '永久拒绝',
	value: -1
}, {
	label: '审核中',
	value: 1
}, {
	label: '不通过',
	value: 2
}, {
	label: '通过',
	value: 3
}];

// 积分订单状态
const integralOrderStatus = [{
	label: '待处理',
	value: 1
}, {
	label: '待发货',
	value: 2
}, {
	label: '待收货',
	value: 3
}, {
	label: '已完成',
	value: 4
}, {
	label: '已取消',
	value: 5
}];

// 提成类型
const royaltyType = [{
	label: '销售提成',
	value: 0
}, {
	label: '团队奖',
	value: 1
}];
// 提成状态
const royaltyStatus = [{
	label: '未结算',
	value: 0
}, {
	label: '已结算',
	value: 1
}];

// 提现状态
const withdrawStatus = [{
	label: '全部',
	value: -1
}, {
	label: '提现中',
	value: 3
}, {
	label: '提现成功',
	value: 1
}, {
	label: '提现失败',
	value: 2
}];

// 评论类型
const commentType = [{
	label: '全部',
	value: 0
}, {
	label: '最新',
	value: 1
}, {
	label: '好评',
	value: 2
}, {
	label: '中评',
	value: 3
}, {
	label: '差评',
	value: 4
}, {
	label: '有图',
	value: 5
}];

// 收藏类型
const collectType = [{
	label: '已收藏',
	value: 1
}, {
	label: '未收藏',
	value: 2
}];

// 身份类型
const levelType = [{
	label: '会员',
	value: 0
}, {
	label: '普通代理',
	value: 1
}, {
	label: '一级代理',
	value: 2
}, {
	label: '超级代理',
	value: 3
}];

// 空的商品属性
const emptyAttrName = '请选择商品属性';

// 提现类型
const withdrawType = [{
	label: '零钱',
	value: 2
}, {
	label: '银行卡',
	value: 1
}];

// 发货方式
const deliveryType = [{
	label: '快递',
	value: 1
}, {
	label: '物流',
	value: 2
}, {
	label: '自提',
	value: 3
}];

// 支付方式
const payType = [{
	label: '微信支付',
	value: 1
}, {
	label: '公帐收款',
	value: 2
}];

// 物流状态
const logisticsState = [{
	label: '无轨迹',
	value: 0
}, {
	label: '已揽收',
	value: 1
}, {
	label: '在途中',
	value: 2
}, {
	label: '已签收',
	value: 3
}, {
	label: '问题件',
	value: 4
}];

// 提成级别
const commissionLevel = [{
	label: '一级',
	value: 1
}, {
	label: '二级',
	value: 2
}, {
	label: '三级',
	value: 3
}, {
	label: '推荐代理奖',
	value: 4
}, {
	label: '代理差额奖',
	value: 5
}, {
	label: '代理同级奖',
	value: 6
}];

export default {
	config,
	orderStatus,
	royaltyType,
	royaltyStatus,
	withdrawStatus,
	commentType,
	imageBaseUrl,
	baseURL,
	videoBaseUrl,
	appId,
	collectType,
	emptyAttrName,
	levelType,
	withdrawType,
	integralOrderStatus,
	deliveryType,
	allOrderStatus,
	payType,
	saleOrderStatus,
	logisticsState,
	commissionLevel,
	imageStaticUrl
};
