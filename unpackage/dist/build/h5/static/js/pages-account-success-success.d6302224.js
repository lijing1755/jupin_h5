(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-account-success-success"],{"16c9":function(e,t,n){var i=n("7b0e");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("98f05a3c",i,!0,{sourceMap:!1,shadowMode:!1})},2992:function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("ceff")),o=n("82e2"),r={data:function(){return{flagmodule:!1,itemObj:{}}},onLoad:function(){this.itemObj=uni.getStorageSync("itemObj")},methods:{apple:function(){var e=this;(0,o.getAppVersionInfo)({app_type:2}).then((function(t){console.log(t),e.itemObj=t,uni.setStorageSync("itemObj",e.itemObj),e.flagmodule=!0}))},anzhuo:function(){var e=this;(0,o.getAppVersionInfo)({app_type:1}).then((function(t){console.log(t),e.itemObj=t,uni.setStorageSync("itemObj",e.itemObj),e.flagmodule=!0}))},copyhttp:function(){var e=(0,a.default)(this.itemObj.url);!1===e?uni.showToast({title:"不支持"}):uni.showToast({title:"复制成功",duration:2e3})}}};t.default=r},"2ec6":function(e,t,n){"use strict";n.r(t);var i=n("64c5"),a=n("427b");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("8e42");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"55f6aeeb",null,!1,i["a"],r);t["default"]=c.exports},"427b":function(e,t,n){"use strict";n.r(t);var i=n("2992"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},5624:function(e,t,n){e.exports=n.p+"static/img/sussess.402f3ace.png"},"64c5":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"success"},[i("v-uni-image",{attrs:{src:n("5624"),mode:""}}),i("v-uni-view",{staticClass:"info"},[e._v("注册成功")])],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-view",{staticClass:"btn1",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.apple(2)}}},[i("v-uni-image",{attrs:{src:n("a05a"),mode:""}}),e._v("苹果版下载")],1),i("v-uni-view",{staticClass:"btn1",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.anzhuo(1)}}},[i("v-uni-image",{attrs:{src:n("fddf"),mode:""}}),e._v("安卓版下载")],1)],1),e.flagmodule?i("v-uni-view",{staticClass:"flagmodule",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.flagmodule=!1}}},[i("v-uni-view",{staticClass:"module_info"},[i("v-uni-view",{staticClass:"title"},[e._v(e._s(e.itemObj.title))]),i("v-uni-view",{staticClass:"http_info"},[e._v(e._s(e.itemObj.url))]),i("v-uni-view",{staticClass:"info"},[e._v(e._s(e.itemObj.note))]),i("v-uni-view",{staticClass:"module_btn",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.copyhttp.apply(void 0,arguments)}}},[e._v("一键复制下载链接")])],1)],1):e._e()],1)},o=[]},"7b0e":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.success[data-v-55f6aeeb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:%?250?%}.success uni-image[data-v-55f6aeeb]{width:%?140?%;height:%?140?%}.success .info[data-v-55f6aeeb]{margin-top:%?32?%}.btn[data-v-55f6aeeb]{position:fixed;bottom:%?250?%;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}.btn .btn1[data-v-55f6aeeb]{width:%?360?%;height:%?70?%;background-color:#fff;-webkit-border-radius:%?100?%;border-radius:%?100?%;color:#333;font-size:%?28?%;font-weight:700;text-align:center;line-height:%?70?%;margin-top:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.btn .btn1 uni-image[data-v-55f6aeeb]{width:%?40?%;height:%?40?%;margin-right:%?3?%}.app-text[data-v-55f6aeeb]{color:red;width:%?400?%;position:fixed;text-align:center;font-size:%?26?%;bottom:%?120?%;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}.flagmodule[data-v-55f6aeeb]{width:100%;min-height:100vh;background-color:rgba(0,0,0,.7);position:fixed;top:0;left:0}.flagmodule .module_info[data-v-55f6aeeb]{width:%?490?%;background-color:#31313b;-webkit-border-radius:%?16?%;border-radius:%?16?%;margin:%?300?% auto;text-align:center;padding:0 %?50?% %?30?%}.flagmodule .module_info .title[data-v-55f6aeeb]{padding:%?40?% 0 %?16?% 0;font-size:%?38?%;color:#fff}.flagmodule .module_info .http_info[data-v-55f6aeeb]{width:100%;word-wrap:break-word;color:#e8e8e9;font-size:%?26?%}.flagmodule .module_info .info[data-v-55f6aeeb]{width:100%;height:%?150?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;background-color:#3a3a3c;word-wrap:break-word;padding:%?9?% %?14?%;overflow:auto;color:#e8e8e9;font-size:%?24?%;margin:%?17?% 0 %?30?% 0;text-align:initial}.flagmodule .module_info .module_btn[data-v-55f6aeeb]{width:100%;height:%?70?%;-webkit-border-radius:%?200?%;border-radius:%?200?%;background-color:#666;color:#e8e8e9;font-size:%?26?%;line-height:%?70?%}',""]),e.exports=t},"82e2":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.getRegisterAgreement=t.webRegistered=t.getAppVersionInfo=t.editUserInfo=t.sendPhoneCode=t.resetPassword=t.login=t.register=void 0;var a=i(n("d658")),o="/mer/mobile",r=function(e){return(0,a.default)({url:"".concat(o,"/register"),method:"post",data:e,isLoading:!0})};t.register=r;var s=function(e){return(0,a.default)({url:"".concat(o,"/login"),method:"POST",data:e,isLoading:!0})};t.login=s;var c=function(e){return(0,a.default)({url:"".concat(o,"/resetPassword"),method:"post",data:e})};t.resetPassword=c;var u=function(e){return(0,a.default)({url:"/index/sendPhoneCode",method:"POST",data:e})};t.sendPhoneCode=u;var d=function(e){return(0,a.default)({url:"".concat(o,"/editUserInfo"),method:"POST",data:e})};t.editUserInfo=d;var l=function(e){return(0,a.default)({url:"/index/getAppVersionInfo",method:"GET",data:e})};t.getAppVersionInfo=l;var f=function(e){return(0,a.default)({url:"/index/webRegistered",method:"POST",data:e})};t.webRegistered=f;var g=function(e){return(0,a.default)({url:"/index/getRegisterAgreement",method:"GET",data:e})};t.getRegisterAgreement=g},"8e42":function(e,t,n){"use strict";var i=n("16c9"),a=n.n(i);a.a},a05a:function(e,t,n){e.exports=n.p+"static/img/apple.92faa2ff.png"},ceff:function(e,t,n){"use strict";function i(e){if(!document.queryCommandSupported("copy"))return!1;var t=document.createElement("textarea");t.value=e,t.readOnly="readOnly",document.body.appendChild(t),t.select(),t.setSelectionRange(0,e.length);var n=document.execCommand("copy");return t.remove(),n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i},fddf:function(e,t){e.exports="data:image/png;base64,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"}}]);