<template>
	
	<view class="">
		<view v-else class="paycontent"  v-if="phonetext=='Safari'">
			<view class="backview">
				<a :href='url'>返回巨拼APP</a>
			</view>

		</view>
		<view v-else class="paycontent" >
			<view class="paysuccess">
				<image class="payimg" src="../../static/image/paysuccess.png" mode="widthFix"></image>
			</view>	
			<!-- 内置浏览器返回方式 -->
			<view class="backview" @click="backApp">
			  <text v-if="phone=='Android'">已完成支付</text>
			  <a v-if="phone=='ios'" :href='url'>已完成支付</a>
			</view>
			<view class="backview notice" @click="back">
			  <text>支付遇到问题，重新支付</text>
			</view>
		</view>
	
	<!-- 外部浏览器返回方式 -->
	<!-- <view class="backview" >
	  
	</view>
	<view class="backview" @click="back">
	  <a >支付遇到问题，重新支付</a>
	</view> -->
	</view>
</template>

<script>
	import {
		weixinPay,
		getTradeOrderDetails,
		payTrade
	} from '@/common/vmeitime-http/pay.js' 
	import store from '@/store/index.js'
	import uniData from '@/components/uni.webview.1.5.2.js'
	export default {
		data() {
			return {
				title: 'successpay',
				url:'jupin://',//jupin://pages/goods/pages/confirm-order/submit-success?price=999
				type:0,
				order:{},
				text:'支付成功',
				res:null,
				phone:'Android',
				phonetext:'qq'
			}
		},
		onLoad(option) {
			this.type = store.getters.type
			this.order = store.getters.order
			let order = this.order
			console.log(this.order.order_id)
			console.log(this.type)
			
				// this.url = this.url +`pages/goods/pages/confirm-order/submit-success?orderId=${order.trade.order_id}&price=${order.trade.total_amount}&name=${order.tradeOrder.goods_name}&img=${order.tradeOrder.goods_img}&type=${order.trade.order_type}&hour=${order.hour}&money=${order.money}&id=${order.tradeOrder.goods_id}&shareTitle=${order.setting.share_title}`
			this.url = this.url +'pages/me/pages/my-order/webPay'
			
			this.getOrderDetail()
			this.getPhone()
			this.getBrowsers()
			console.log('支付支付')
		},
		colse(){
			location.url = '/'
		},
		onBackPress(e){
			// uni.webView.navigateBack({
			// 	url:'/pages/goods/pages/detail/detail?id=${tradeOrder}&'
			// })
		},
		methods: {
			getBrowsers(){
				// this.getBrow();
				var u = navigator.userAgent.toLocaleLowerCase();
				// this.phonetext = u
				if (u.indexOf("safari") > -1 && u.indexOf('iphone') > -1) {
					this.phonetext =  "Safari";
				}
				
			},

			getPhone(){
				let that =this
				 switch(uni.getSystemInfoSync().platform){
				    case 'android':
				
				       console.log('运行Android上')
				
				       break;
				
				    case 'ios':
				
				      that.phone = 'ios'
				
				       break;
				
				    default:
				
				       console.log('运行在开发者工具上')
				
				       break;
				
				}
			},
			getOrderDetail(){
				let that = this
				getTradeOrderDetails({
					order_id:that.order.trade.order_id
				}).then(res => {
				  console.log(JSON.stringify(res))
					if(res.data.trade.status_name=='待付款'){
						that.text = '订单待支付'
					}
				}).catch((err) => {
					console.log(err)
				})
				
			},
			
			back(){
				let that = this
				console.log('订单')
				console.log(that.order)
				payTrade({
					order_id:that.order.trade.order_id,
					client_type:'wx_h5'
				}).then(res => {
				  console.log(res)
				  location.href =JSON.parse(res.data.jsApiParameters).mweb_url

				}).catch((err) => {
					console.log(err)
				})
					
					
					// location.href = `https://phptest.tatakeji.cn/jupin/front/pages/play/weChatpay`
				
			},
			backApp(){
				console.log('触发返回')
				let url = ''
				if(this.type == 4){//返回订单列表页
					url = '/pages/me/pages/my-order/my-order?tabIndex=1'
				}else{
					// this.url = this.url +`pages/goods/pages/confirm-order/submit-success?orderId=${order.trade.order_id}&price=${order.trade.total_amount}&name=${order.tradeOrder.goods_name}&img=${order.tradeOrder.goods_img}&type=${order.trade.order_type}&hour=${order.hour}&money=${order.money}&id=${order.tradeOrder.goods_id}&shareTitle=${order.setting.share_title}`
					url = '/pages/me/pages/my-order/my-order?tabIndex=0'
				}
				uni.webView.redirectTo({//跳转至订单列表页
					url:url
				})
				
			}	
			
		}
	}
</script>

<style lang="scss" scoped>
	.paycontent{
    height: 100vh;
    width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	
	.paysuccess{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 100rpx;
		.payimg{
			width: 70%;
		}
	}
    .imgview{
      width: 140rpx;
      height:140rpx;
      margin: 30% auto 0;
      .logo{
        width: 100%;
        height:100%;
      }
    }
    .text-area{
      color: white;
      text-align: center;
      margin-top: 40rpx;
    }
    .backview{
      color: #fff;
	  background-color: #FF7403;
      height: 80rpx;
      line-height: 80rpx;
      border-radius: 50rpx;
      width: 446rpx;
      text-align: center;
      margin: 40rpx auto 0;
	  a{
		  color: #000000;
		  text-decoration:none;
	  }
    }
	.notice{
		background-color: #fff;
		color: #FF7403;
		border: 2rpx solid #FF7403;
	}
  }
</style>
