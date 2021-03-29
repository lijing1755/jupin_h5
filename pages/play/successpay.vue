<template>
	<view class="paycontent">
		<view class="imgview">
      <image class="logo" src="/static/image/okpic.png"></image>
    </view>
		<view class="text-area">
			<text class="title">支付成功</text>
		</view>
		<!-- 内置浏览器返回方式 -->
    <!-- <view class="backview" @click="backApp">
      <text>返回巨拼APP</text>
    </view> -->
	<!-- 外部浏览器返回方式 -->
	<view class="backview" >
	  <a href='jupin://pages/goods/pages/confirm-order/submit-success?price=999'>返回巨拼APP</a>
	</view>
	</view>
</template>

<script>
	import uniData from '@/components/uni.webview.1.5.2.js'
	export default {
		data() {
			return {
				title: 'successpay'
			}
		},
		onLoad(option) {
			console.log(JSON.stringify(option.option))
		},
		methods: {
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
