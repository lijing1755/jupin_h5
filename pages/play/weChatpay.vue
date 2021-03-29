<template>
	<view class="wechatcontent">
		<view class="imgview">
      <image class="logo" src="/static/image/jupinlogo.png"></image>
    </view>
    <view class="peopledata">
      <view>
        <view>收货人: 张xx</view>
        <view>13013013013</view>
      </view>
      <view>广东省 广州市 花都区 红姑写字楼</view>
    </view>
    <view class="bottomtent">
      <view>
        <view>商品总计</view>
        <view>￥3013</view>
      </view>
      <view>
        <view>运费</view>
        <view>￥3013</view>
      </view>
      <view>
        <view>余额</view>
        <view>￥3013</view>
      </view>
      <view>
        <view>总计</view>
        <view>￥3013</view>
      </view>
    </view>
    <view class="waitpay">待付费15:00</view>
    <view class="moneypay" @click="okclick()">微信支付 ( $180:00 )</view>
	
	</view>
</template>

<script>
	import {
		weixinPay,
		sendPhoneCode
	} from '@/common/vmeitime-http/pay.js' 
	export default {
		data() {
			return {
				title: 'wechatpay',
				url:''
			}
		},
		onLoad(option) {
			

			this.$store.commit('SET_TOKEN', decodeURI(option.token))
			let data = JSON.parse(decodeURI(option.option))
			data.client_type='wx_h5'
			let that = this
			weixinPay(data).then(res => {
			  console.log(JSON.stringify(res))
				let temp = JSON.parse(res.data.jsApiParameters)
				// alert('打印路径')
				// alert(temp.mweb_url)
				
				that.url=temp.mweb_url
				// alert(that.url)
				// location.href=that.url
			}).catch((err) => {
				console.log(JSON.stringify(err))
				// this.submitting = false
			})
			// let that = this
			// sendPhoneCode().then(res =>{
			// 	console.log(res.mWebUrl)
			// 	that.url=res.mWebUrl
			// }).catch(err =>{
			// 	console.log(err)
			// })
		},
		methods: {
			okclick(){
				
				
				  
				  
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
      background: #FFFFFF;
      text-align: center;
      opacity: 1;
      border-radius: 40rpx;
    }
	}
</style>
