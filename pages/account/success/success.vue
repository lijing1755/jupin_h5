<template>
	<view>
		<view class="success">
			<image src="../../../static/tabbar/sussess.png" mode=""></image>
			<view class="info">
				注册成功
			</view>
		</view>
		
		<view class="btn">
				<view class="btn1" @click="apple(2)">
					<image src="../../../static/image/apple.png" mode=""></image>
					苹果版下载
				</view>
				<view class="btn1" @click="anzhuo(1)">
					<image src="../../../static/image/anzhuo.png" mode=""></image>
					安卓版下载
				</view>
			<!-- <view class="btn1" @click="flagmodule = true" >
				巨拼APP下载
			</view> -->
		</view>
	<!-- 	<view class="app-text">
			苹果APP暂时无法下载，苹果手机用户请到微信小程序搜索“巨拼”小程序登录
		</view> -->
		<view class="flagmodule" v-if="flagmodule" @click="flagmodule = false">
			<view class="module_info">
				<view class="title">
					{{itemObj.title}}
				</view>
				<view class="http_info">
					{{itemObj.url}}
				</view>
				<view class="info">
					{{itemObj.note}}
				</view>
				<view class="module_btn" @click.stop="copyhttp">
					一键复制下载链接
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import h5Copy from '@/utils/junyi-h5-copy.js'
	import {getAppVersionInfo,sendPhoneCode,webRegistered,getRegisterAgreement} from "../../../api/account.js"
	export default {
		data() {
			return {
				flagmodule:false,
				itemObj:{},
			};
		},
		onLoad() {
			this.itemObj = uni.getStorageSync("itemObj")
		},
		methods:{
			apple(){
				getAppVersionInfo({
					 app_type:2
				}).then(res => {
					 console.log(res)
					 this.itemObj = res
					 uni.setStorageSync("itemObj",this.itemObj)
					 this.flagmodule = true
				})
			},
			anzhuo(){
				getAppVersionInfo({
					 app_type:1
				}).then(res => {
					 console.log(res)
					 this.itemObj = res
					 uni.setStorageSync("itemObj",this.itemObj)
					 this.flagmodule = true
				})
			},
			copyhttp(){
			 let content = 'H5复制插222件' 
			 const result = h5Copy(this.itemObj.url)
					if (result === false) {
					  uni.showToast({
						title:'不支持',
					  })
					} else {
					  uni.showToast({
						  title: '复制成功',
						  duration: 2000
					  });
					}
			},
		}
	}
</script>

<style lang="scss" scoped>
.success{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 250rpx;
	image{
		width: 140rpx;
		height:  140rpx;
	}
	.info{
		margin-top: 32rpx;
	}
}
.btn{
		position: fixed;
		bottom: 250rpx;
		left: 50%;
		transform: translate(-50%,0);
		.btn1 {
			width: 360rpx;
			height: 70rpx;
			background-color: #fff;
			border-radius: 100rpx;
			color: #333333;
			font-size: 28rpx;
			font-weight: bold;
			text-align: center;
			line-height: 70rpx;
			margin-top: 30rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			image{
				width: 40rpx;
				height: 40rpx;
				margin-right: 3rpx;
			}
		}
	}
	.app-text{
		color: red;
		width: 400rpx;
		position: fixed;
		text-align: center;
		font-size: 26rpx;
		bottom: 120rpx;
		left: 50%;
		transform: translate(-50%,0);
	}
	.flagmodule{
		width: 100%;
		min-height: 100vh;
		background-color: rgba(0,0,0,0.7);
		position: fixed;
		top: 0;
		left: 0;
		.module_info{
			width: 490rpx;
			// height: 450rpx;
			background-color: #31313B;
			border-radius: 16rpx;
			margin: 300rpx auto;
			text-align: center;
			padding: 0 50rpx 30rpx;
			.title{
				padding: 40rpx 0 16rpx 0;
				font-size: 38rpx;
				color: #fff;
			}
			.http_info{
				width: 100%;
				word-wrap: break-word;
				color: #E8E8E9;
				font-size: 26rpx;
			}
			.info{
				width: 100%;
				height: 150rpx;
				border-radius: 10rpx;
				background-color: #3A3A3C;
				word-wrap: break-word;
				padding: 9rpx 14rpx;
				overflow: auto;
				color: #E8E8E9;
				font-size: 24rpx;
				margin: 17rpx 0 30rpx 0;
				text-align: initial;
			}
			.module_btn{
				width: 100%;
				height: 70rpx;
				border-radius: 200rpx;
				background-color: #666666;
				color: #E8E8E9;
				font-size: 26rpx;
				line-height: 70rpx;
			}
		}
		
	}
</style>
