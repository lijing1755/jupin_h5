(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-play-weChatpay"],{3476:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={baseURL:"https://phptest.tatakeji.cn/jupin",secret:"9f8c9cb1ed9ca9a997a610e74b1dca58",imageBaseUrl:"https://phptest.tatakeji.cn",videoBaseUrl:"https://phptest.tatakeji.cn",imageStaticUrl:"/jupin/public/static/images"},l={baseURL:"https://jupin.lekebaba.cn/lekebaba",imageBaseUrl:"https://jupinshop.oss-cn-shenzhen.aliyuncs.com",videoBaseUrl:"https://jupinshop.oss-cn-shenzhen.aliyuncs.com",imageStaticUrl:"/lekebaba/public/static/images"},i=n,r=i.baseURL,u=i.imageBaseUrl,o=i.videoBaseUrl,c=u+i.imageStaticUrl,s=l.appId,d=[{label:"全部",value:9},{label:"待付款",value:0},{label:"待分享",value:7},{label:"待发货",value:1},{label:"待收货",value:2},{label:"待评价",value:3}],v=[{label:"已取消",value:-1},{label:"待付款",value:0},{label:"待发货",value:1},{label:"待收货",value:2},{label:"已完成",value:3},{label:"已退款",value:6},{label:"交易完成",value:4}],p=[{label:"用户撤销",value:-2},{label:"永久拒绝",value:-1},{label:"审核中",value:1},{label:"不通过",value:2},{label:"通过",value:3}],b=[{label:"待处理",value:1},{label:"待发货",value:2},{label:"待收货",value:3},{label:"已完成",value:4},{label:"已取消",value:5}],f=[{label:"销售提成",value:0},{label:"团队奖",value:1}],h=[{label:"未结算",value:0},{label:"已结算",value:1}],w=[{label:"全部",value:-1},{label:"提现中",value:3},{label:"提现成功",value:1},{label:"提现失败",value:2}],g=[{label:"全部",value:0},{label:"最新",value:1},{label:"好评",value:2},{label:"中评",value:3},{label:"差评",value:4},{label:"有图",value:5}],m=[{label:"已收藏",value:1},{label:"未收藏",value:2}],y=[{label:"会员",value:0},{label:"普通代理",value:1},{label:"一级代理",value:2},{label:"超级代理",value:3}],x="请选择商品属性",k=[{label:"零钱",value:2},{label:"银行卡",value:1}],T=[{label:"快递",value:1},{label:"物流",value:2},{label:"自提",value:3}],_=[{label:"微信支付",value:1},{label:"公帐收款",value:2}],U=[{label:"无轨迹",value:0},{label:"已揽收",value:1},{label:"在途中",value:2},{label:"已签收",value:3},{label:"问题件",value:4}],j=[{label:"一级",value:1},{label:"二级",value:2},{label:"三级",value:3},{label:"推荐代理奖",value:4},{label:"代理差额奖",value:5},{label:"代理同级奖",value:6}],S={config:i,orderStatus:d,royaltyType:f,royaltyStatus:h,withdrawStatus:w,commentType:g,imageBaseUrl:u,baseURL:r,videoBaseUrl:o,appId:s,collectType:m,emptyAttrName:x,levelType:y,withdrawType:k,integralOrderStatus:b,deliveryType:T,allOrderStatus:v,payType:_,saleOrderStatus:p,logisticsState:U,commissionLevel:j,imageStaticUrl:c};a.default=S},"5dbc":function(e,a,t){"use strict";var n=t("c8f7"),l=t.n(n);l.a},"91f6":function(e,a,t){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=t("b3fb"),l={data:function(){return{title:"wechatpay",url:""}},onLoad:function(a){this.$store.commit("SET_TOKEN",decodeURI(a.token));var t=JSON.parse(decodeURI(a.option));t.client_type="wx_h5";var l=this;(0,n.weixinPay)(t).then((function(a){e("log",JSON.stringify(a)," at pages/play/weChatpay.vue:57");var t=JSON.parse(a.data.jsApiParameters);l.url=t.mweb_url})).catch((function(a){e("log",JSON.stringify(a)," at pages/play/weChatpay.vue:66")}))},methods:{okclick:function(){location.href=this.url}}};a.default=l}).call(this,t("0de9")["log"])},a623:function(e,a,t){"use strict";t.r(a);var n=t("91f6"),l=t.n(n);for(var i in n)"default"!==i&&function(e){t.d(a,e,(function(){return n[e]}))}(i);a["default"]=l.a},a64c:function(e,a,t){var n=t("24fb");a=n(!1),a.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.wechatcontent[data-v-98886994]{background:#1a1622;height:100vh;width:100vw;border-top:1px solid #1a1622}.wechatcontent .imgview[data-v-98886994]{width:%?140?%;height:%?140?%;margin:%?50?% auto}.wechatcontent .imgview .logo[data-v-98886994]{width:100%;height:100%}.wechatcontent .peopledata[data-v-98886994]{width:%?700?%;background:#31313b;box-shadow:0 10px 20px rgba(79,98,122,.05);border-radius:%?10?%;margin:0 auto;font-size:%?28?%;padding:%?20?% 0}.wechatcontent .peopledata > uni-view[data-v-98886994]{padding:0 %?20?%}.wechatcontent .peopledata > uni-view[data-v-98886994]:nth-child(1){display:-webkit-box;display:-webkit-flex;display:flex;color:#e8e8e9}.wechatcontent .peopledata > uni-view:nth-child(1) > uni-view[data-v-98886994]:nth-child(1){-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-bottom:%?20?%}.wechatcontent .peopledata > uni-view[data-v-98886994]:nth-child(2){color:#999}.wechatcontent .bottomtent[data-v-98886994]{width:%?700?%;background:#31313b;box-shadow:0 10px 20px rgba(79,98,122,.05);border-radius:%?10?%;margin:%?30?% auto;padding:%?20?% 0}.wechatcontent .bottomtent > uni-view[data-v-98886994]{display:-webkit-box;display:-webkit-flex;display:flex;margin-left:%?20?%;margin-right:%?20?%;margin-bottom:%?20?%;font-size:%?28?%}.wechatcontent .bottomtent > uni-view > uni-view[data-v-98886994]:nth-child(1){-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#e8e8e9}.wechatcontent .bottomtent > uni-view > uni-view[data-v-98886994]:nth-child(2){color:#999}.wechatcontent .bottomtent > uni-view[data-v-98886994]:last-child{margin-bottom:%?1?%;border-top:2px solid #66667a;padding-top:%?20?%}.wechatcontent .bottomtent > uni-view:last-child > uni-view[data-v-98886994]:nth-child(2){color:#fff}.wechatcontent .waitpay[data-v-98886994]{text-align:center;font-size:%?30?%;color:#ff7403;margin-top:%?100?%;margin-bottom:%?20?%}.wechatcontent .moneypay[data-v-98886994]{margin:0 auto;width:%?446?%;height:%?80?%;line-height:%?80?%;background:#fff;text-align:center;opacity:1;border-radius:%?40?%}',""]),e.exports=a},aa11:function(e,a,t){"use strict";var n=t("4ea4");t("c975"),t("d3b7"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("96cf");var l,i=n(t("1da1")),r=n(t("ade3")),u=n(t("537b")),o=n(t("3476")),c={config:{baseUrl:o.default.baseURL,header:(l={"Content-Type":"application/json;charset=UTF-8"},(0,r.default)(l,"Content-Type","application/x-www-form-urlencoded"),(0,r.default)(l,"Referer","http://www.jupin.test/jupin/pay"),l),data:{},method:"GET",dataType:"json",responseType:"text",success:function(){},fail:function(){},complete:function(){}},interceptor:{request:null,response:null},request:function(e,a){var t=this;return(0,i.default)(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e||(e={}),e.baseUrl=e.baseUrl||t.config.baseUrl,e.dataType=e.dataType||t.config.dataType,e.url=e.baseUrl+e.url,e.data=e.data||{},e.method=e.method||t.config.method,null!==u.default.getters.token&&""!==u.default.getters.token&&(n={Authorization:"Bearer ".concat(u.default.getters.token)},e.header=Object.assign({},e.header,n)),-1!==e.url.indexOf("/index/getMyPaper")||e.hideLoading||uni.showLoading({title:"加载中"}),a.abrupt("return",new Promise((function(a,n){var l=null,r=getCurrentPages()[getCurrentPages().length-1];e.complete=function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(i){var o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(setTimeout((function(){uni.hideLoading()}),500),o=i.statusCode,i.config=l,t.interceptor.response&&(c=t.interceptor.response(i),c&&(i=c)),d(i),200!==o){e.next=9;break}a(i.data),e.next=17;break;case 9:if(i.data.data,401!==o&&403!==o){e.next=16;break}return e.next=13,u.default.commit("SET_QUERY",r.options);case 13:n(i),e.next=17;break;case 16:500===o?(uni.showToast({title:i.data.msg,icon:"none"}),n(i)):(60001===i.data.code||50007===i.data.code||40504===i.data.code||uni.showToast({title:i.data.msg,icon:"none"}),n(i));case 17:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),l=Object.assign({},t.config,e),l.requestId=(new Date).getTime(),t.interceptor.request&&t.interceptor.request(l),s(l),uni.request(l)})));case 9:case"end":return a.stop()}}),a)})))()},get:function(e,a,t){return t||(t={}),t.url=e,t.data=a,t.method="GET",this.request(t)},post:function(e,a,t){return t||(t={}),t.url=e,t.data=a,t.method="POST",this.request(t)},put:function(e,a,t){return t||(t={}),t.url=e,t.data=a,t.method="PUT",this.request(t)},delete:function(e,a,t){return t||(t={}),t.url=e,t.data=a,t.method="DELETE",this.request(t)}};function s(e){}function d(e){var a=e.statusCode;switch(a){case 200:break;case 401:break;case 404:break;default:break}}a.default=c},b3fb:function(e,a,t){"use strict";var n=t("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.sendPhoneCode=a.weixinPay=void 0;var l=n(t("aa11")),i="/trade_api",r=function(e){return l.default.request({url:"".concat(i,"/buySingle"),method:"POST",data:e,isLoading:!0})};a.weixinPay=r;var u=function(e){return l.default.request({url:"/index/wx_pay",method:"GET",data:e})};a.sendPhoneCode=u},c7c0:function(e,a,t){"use strict";var n;t.d(a,"b",(function(){return l})),t.d(a,"c",(function(){return i})),t.d(a,"a",(function(){return n}));var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",{staticClass:"wechatcontent"},[t("v-uni-view",{staticClass:"imgview"},[t("v-uni-image",{staticClass:"logo",attrs:{src:"/static/image/jupinlogo.png"}})],1),t("v-uni-view",{staticClass:"peopledata"},[t("v-uni-view",[t("v-uni-view",[e._v("收货人: 张xx")]),t("v-uni-view",[e._v("13013013013")])],1),t("v-uni-view",[e._v("广东省 广州市 花都区 红姑写字楼")])],1),t("v-uni-view",{staticClass:"bottomtent"},[t("v-uni-view",[t("v-uni-view",[e._v("商品总计")]),t("v-uni-view",[e._v("￥3013")])],1),t("v-uni-view",[t("v-uni-view",[e._v("运费")]),t("v-uni-view",[e._v("￥3013")])],1),t("v-uni-view",[t("v-uni-view",[e._v("余额")]),t("v-uni-view",[e._v("￥3013")])],1),t("v-uni-view",[t("v-uni-view",[e._v("总计")]),t("v-uni-view",[e._v("￥3013")])],1)],1),t("v-uni-view",{staticClass:"waitpay"},[e._v("待付费15:00")]),t("v-uni-view",{staticClass:"moneypay",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.okclick()}}},[e._v("微信支付 ( $180:00 )")])],1)},i=[]},c8f7:function(e,a,t){var n=t("a64c");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var l=t("4f06").default;l("4aa5a0f1",n,!0,{sourceMap:!1,shadowMode:!1})},dc21:function(e,a,t){"use strict";t.r(a);var n=t("c7c0"),l=t("a623");for(var i in l)"default"!==i&&function(e){t.d(a,e,(function(){return l[e]}))}(i);t("5dbc");var r,u=t("f0c5"),o=Object(u["a"])(l["default"],n["b"],n["c"],!1,null,"98886994",null,!1,n["a"],r);a["default"]=o.exports}}]);