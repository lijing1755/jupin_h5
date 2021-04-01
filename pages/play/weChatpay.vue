<template>
	<view class="wechatcontent">
		<view class="imgview">
      <image class="logo" src="/static/image/jupinlogo.png"></image>
    </view>
    <view class="peopledata">
      <view>
        <view>收货人: {{order.trade.username}}</view>
        <view>{{order.trade.tel}}</view>
      </view>
      <view>{{order.trade.region}} {{order.trade.address}}</view>
    </view>
    <view class="bottomtent">
      <view>
        <view>商品总计</view>
        <view>￥{{order.trade.goods_price}}</view>
      </view>
      <view>
        <view>运费</view>
        <view>￥{{order.trade.shipping_price}}</view>
      </view>
      <view>
        <view>余额</view>
        <view>￥{{order.trade.user_balance_fee}}</view>
      </view>
      <view>
        <view>总计</view>
        <view>￥{{order.trade.total_amount}}</view>
      </view>
    </view>
    <view class="waitpay">待付费<u-count-down @end="end" timestamp="240" :show-hours="false" bg-color="#1A1622"
					 color="#FF7403" font-size="30rpx" separator-color="#FF7403" separator-size="24rpx"></u-count-down></view>
    <view class="moneypay" :class="[showpay?'notallowpay':'allowpay']" @click="okclick()">微信支付 ( ${{order.trade.order_amount}} )</view>
	
	</view>
</template>

<script>
	import {
		weixinPay,
		getTradeOrderDetails
	} from '@/common/vmeitime-http/pay.js' 
	import store from '@/store/index.js'
	export default {
		data() {
			return {
				title: 'wechatpay',
				url:'',
				order_id:0,
				showpay:false,//订单是否已经支付
				order:{},
				hour:null,
				money:null,
				time:240
				
			}
		},
		created(){
			
		},
		onLoad(option) {

			let url = decodeURI(option.option+'&package='+option.package+'&redirect_url='+option.redirect_url)
			this.order_id = option.orderId
			this.$store.commit('SET_TYPE',option.type)
			this.$store.commit('SET_TOKEN', option.token)
			this.hour = option.hour
			this.money = option.money
			
			this.url = url
			
			// let that = this
			
			
		},
		onShow(){
			this.getOrderDetail()
		},
		methods: {
			end(){
				this.showpay = true
				this.time = 0
			},
			getOrderDetail(){
				let that = this
				getTradeOrderDetails({
					order_id:that.order_id
				}).then(res => {
				  console.log(res)
					that.order = res.data
					that.order.money = that.money
					that.order.hour = that.hour
					this.$store.commit('SET_ORDER', that.order)
					console.log(res.data.trade.status_name)
					if(res.data.trade.status_name!='待付款'){//订单已支付，倒计时归零，按钮变灰
						this.showpay = true
						this.time = 0
					}
				}).catch((err) => {
					console.log(err)
				})
				
			},
			okclick(){
				if(this.time == 0){
					uni.showToast({
						title:'支付超时，请返回巨拼重新发起支付',
						icon:'none'
					})
					return
				}
				if(this.order.trade.status_name!='待付款'){
					uni.showToast({
						title:'订单已支付',
						icon:'none'
					})
					return
				}
				  //调起微信app支付
				  // console.log(this.url)
				  location.href=this.url
				// uni.navigateTo({
				//   url: `/pages/play/successpay`
				// });
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wechatcontent {
    background: #1A1622;
    height: 100vh;
    width: 100vw;    
    border-top: 1px solid #1A1622;
    .imgview{
      width: 140rpx;
      height:140rpx;
      margin: 50rpx auto;
      .logo{
        width: 100%;
        height:100%;
      }
    }
    .peopledata{
      width: 700rpx;
      background: #31313B;
      box-shadow: 0px 10px 20px rgba(79, 98, 122, 0.05);
      border-radius: 10rpx;
      margin: 0 auto;
      font-size: 28rpx;
      padding: 20rpx 0;
      &>view{
        padding: 0 20rpx;
      }
      &>view:nth-child(1){
        display: flex;
        color: #E8E8E9;
        &>view:nth-child(1){
          flex: 1;
          margin-bottom: 20rpx;
        }
      }
      &>view:nth-child(2){
          color: #999999;
        }
    }
    .bottomtent{
      width: 700rpx;
      background: #31313B;
      box-shadow: 0px 10px 20px rgba(79, 98, 122, 0.05);
      border-radius: 10rpx;
      margin: 30rpx auto;
      padding: 20rpx 0;
      &>view{
        display: flex;        
        margin-left: 20rpx;
        margin-right: 20rpx;
        margin-bottom: 20rpx;
        font-size: 28rpx;
        &>view:nth-child(1){
          flex: 1;
          color: #E8E8E9;
        }
        &>view:nth-child(2){
          color: #999999;
        }
      }
      &>view:last-child{
        margin-bottom: 1rpx;
        border-top: 2px solid #66667A;
        padding-top: 20rpx;
        &>view:nth-child(2){
          color: #FFFFFF;
        }
      }
    }
    .waitpay{
      text-align: center;
      font-size: 30rpx;
      color: #FF7403;
      margin-top: 100rpx;
      margin-bottom: 20rpx;
    }
    .moneypay{
      margin: 0 auto;
      width: 446rpx;
      height: 80rpx;
      line-height: 80rpx;
      text-align: center;
      opacity: 1;
      border-radius: 40rpx;
    }
	.allowpay{
		background:#2BA25D;
	}
	.notallowpay{
		background:#FFFFFF;
	}

	}
</style>
