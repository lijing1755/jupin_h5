<template>
	<view class="paycontent">
		<view class="imgview">
      <image class="logo" src="/static/image/okpic.png"></image>
    </view>
		<view class="text-area">
			<text class="title">支付成功</text>
		</view>
    <view class="backview">
      <text>返回巨拼APP</text>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'successpay'
			}
		},
		onLoad() {

		},
		methods: {

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
    }
  }
</style>
