<template>
	<view class="paycontent">
		<view class="imgview">
      <image class="logo" src="/static/image/okpic.png"></image>
    </view>
		<view class="text-area">
			<text class="title">{{text}}</text>
		</view>
		<!-- 内置浏览器返回方式 -->
    <!-- <view class="backview" @click="backApp">
      <text>返回巨拼APP</text>
    </view> -->
	<!-- 外部浏览器返回方式 -->
	<view class="backview"  @click="colse">
	  <a :href='url'>返回巨拼APP</a>
	  <!-- <a>{{url}}</a> -->
	</view>
	</view>
</template>

<script>
	import {
		weixinPay,
		getTradeOrderDetails
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
				text:'支付成功'
			}
		},
		onLoad(option) {
			this.type = store.getters.type
			this.order = store.getters.order
			let order = this.order
			console.log(this.order)
			console.log(this.type)
			if(this.type == 4){//返回订单列表页
				this.url = this.url +'pages/me/pages/my-order/my-order?tabIndex=1'
			}else{
				this.url = this.url +`pages/goods/pages/confirm-order/submit-success?orderId=${order.trade.order_id}&price=${order.trade.total_amount}&name=${order.tradeOrder.goods_name}&img=${order.tradeOrder.goods_img}&type=${order.trade.order_type}&hour=${order.hour}&money=${order.money}&id=${order.tradeOrder.goods_id}&shareTitle=${order.setting.share_title}`
			}
			// this.getOrderDetail()
			console.log(this.url)
		},
		colse(){
			location.url = '/'
		},
		onBackPress(e) {
			alert('返回')
			if(e.from==="backbutton") {
				if (uni.getStorageSync('isLowAccount')) {
					console.log('返回')
					return true
				}
			}
		},
		methods: {
			getOrderDetail(){
				let that = this
				getTradeOrderDetails({
					order_id:that.order.order_id
				}).then(res => {
				  console.log(res)
					if(res.data.trade.status_name=='待付款'){
						that.text = '订单待支付'
					}
				}).catch((err) => {
					console.log(err)
				})
				
			},
			backApp(){
				console.log('触发返回')
				// uni.webView.redirectTo({
				// 	url:'/pages/goods/pages/confirm-order/submit-success'
				// })
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.paycontent{
    background: #1A1622;
    height: 100vh;
    width: 100vw;    
    border-top: 1px solid #1A1622;
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
      color: #333333;
      height: 80rpx;
      line-height: 80rpx;
      border-radius: 50rpx;
      width: 446rpx;
      background: white;
      text-align: center;
      margin: 30% auto 0;
	  a{
		  color: #000000;
		  text-decoration:none;
	  }
    }
  }
</style>
