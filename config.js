const dev = {
  baseUrl: 'https://wechat3.walkerbang.com/jupin',
  imageBaseUrl: 'https://wechat3.walkerbang.com/jupin',
  staticBaseUrl: 'https://wechat3.walkerbang.com/jupin'
}

//正式环境
const build = {
  baseUrl: 'https://jupin.lekebaba.cn/lekebaba',
  imageBaseUrl: 'https://jupin.lekebaba.cn/lekebaba',
  staticBaseUrl: 'https://jupin.lekebaba.cn/lekebaba'
}

module.exports = process.env.NODE_ENV === 'development' ? dev : build
// module.exports = process.env.NODE_ENV === 'development' ? build : build