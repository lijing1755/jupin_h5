<template>
	<!-- 	<view class="from-li flex-align-center">
			<input type="text" v-model="postData.codeInput" placeholder-class="place" placeholder="验证码" />
			<view class="code-wrap" @click="getPhoneCode">
				{{ hasSend?time+'s':'获取' }}
			</view>
		</view> -->
	<view>
		<view class="content">
			<view class="content_list">
				<view class="name">手机号码</view>
				<view class="ipt"><input type="number" v-model="phone" placeholder="请输入手机号码" /></view>
			</view>
			<view class="content_list">
				<view class="name">验证码</view>
				<view class="ipt">
					<input style="width: 60%;overflow: hidden;" type="number" v-model="code" placeholder="请输入验证码" />
					<view class="code" @tap="getCode">
						{{tips}}
					</view>
				</view>
			</view>
			<view class="content_list" style="margin-top: 30rpx;">
				<view class="name">推荐人</view>
				<view>{{from_phone}}</view>
			</view>
			<u-toast ref="uToast"></u-toast>
			<u-verification-code :seconds="seconds" @end="end" @start="start" ref="uCode" @change="codeChange"></u-verification-code>
		</view>
		<view class="btn">
			<view class="btn1" @click="jumpsuccess">
				提交注册
			</view>
			<!-- <view class="btn1" @click="apple(2)">
				<image src="../../../static/image/apple.png" mode=""></image>
				苹果版下载
			</view>
			<view class="btn1" @click="anzhuo(1)">
				<image src="../../../static/image/anzhuo.png" mode=""></image>
				安卓版下载
			</view> -->
		</view>
		<view class="quil">
			<image @click="quilstats = false" v-if="quilstats" src="../../../static/image/change.png" mode=""></image>
			<image @click="quilstats = true" v-else src="../../../static/image/closechange.png" mode=""></image>
			<view @click="jumpquil">
				请同意<text>《用户协议》</text>
			</view>
		</view>
		<view class="flagmodule" v-if="flagmodule" @click="flagmodule = false">
			<view class="module_info" @click.stop>
				<view class="title">
					下载提示
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
				seconds: 60,
				flagmodule: false,
				tips: '',
				phone:"",
				code:"",
				type:1,
				itemObj:{},
				from_phone:"",
				quilstats:false,
			};
		},
		onLoad(options){
			var that = this
			console.log(options.from_phone)
			that.from_phone = options.from_phone
			uni.getSystemInfo({
			    success: function (res) {
			        console.log(res.model);
					if(res.model == 'iPhone'){
						that.type = 2
						console.log("111")
					}else {
						that.type = 1
						console.log("222")
					}
			    }
			});
			 // getAppVersionInfo({
				//  type:this.type
			 // }).then(res => {
				//  console.log(res)
				//  this.itemObj = res
				//  uni.setStorageSync("itemObj",this.itemObj)
			 // })
		},
		methods: {
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
			jumpquil(){
				uni.navigateTo({
					url:"./quil/quil"
				})
			},
			copyhttp() {
				const result = h5Copy(this.itemObj.url)
				if (result === false) {
					uni.showToast({
						title: '不支持',
					})
				} else {
					uni.showToast({
						title: '复制成功',
						duration: 2000 
					});
				}
			},
			jumpsuccess() {
				if(!this.phone){
					uni.showToast({
						title: '请输入手机号码',
						icon:"none"
					})
					return
				}
				if(!this.code){
					uni.showToast({
						title: '请输入验证码',
						icon:"none"
					})
					return
				}
				if(!this.quilstats){
					uni.showToast({
						title: '请勾选用户协议',
						icon:"none"
					})
					return
				}
				webRegistered({
					phone:this.phone,
					code:this.code,
					from_phone:this.from_phone
				}).then(res => {
					console.log(res)
					uni.navigateTo({
						url: "../success/success"
					})
				})
			
			},
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					sendPhoneCode({
						phone:this.phone
					}).then(res => {
						console.log(res)
						setTimeout(() => {
							uni.hideLoading();
							// 这里此提示会被this.start()方法中的提示覆盖
							this.$u.toast('验证码已发送');
							// 通知验证码组件内部开始倒计时
							this.$refs.uCode.start();
						}, 2000);
					})
					
				} else {
					this.$u.toast('不能重复发送');
				}
			},
			end() {
				// this.$u.toast('倒计时结束');
			},
			start() {
				// this.$u.toast('倒计时开始');
			},



		}
	}
</script>

<style lang="scss" scoped>
	.quil{
		position: fixed;
		bottom: 100rpx;
		left: 50%;
		transform: translate(-50%);
		font-size: 26rpx;
		color: #E8E8E9;
		display: flex;
		align-items: center;
		image{
			width: 36rpx;
			height: 36rpx;
			margin-right: 22rpx;
		}
		text{
			color: #FF7403;
		}
	}
	.flagmodule {
		width: 100%;
		min-height: 100vh;
		background-color: rgba(0, 0, 0, 0.7);
		position: fixed;
		top: 0;
		left: 0;

		.module_info {
			width: 490rpx;
			// height: 450rpx;
			background-color: #31313B;
			border-radius: 16rpx;
			margin: 300rpx auto;
			text-align: center;
			padding: 0 50rpx 30rpx;

			.title {
				padding: 40rpx 0 16rpx 0;
				font-size: 38rpx;
				color: #fff;
			}

			.http_info {
				width: 100%;
				word-wrap: break-word;
				color: #E8E8E9;
				font-size: 26rpx;
			}

			.info {
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

			.module_btn {
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

	.btn {
		position: fixed;
		bottom: 25%;
		left: 50%;
		transform: translate(-50%);

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

	.content {
		padding: 40rpx 25rpx 0 32rpx;

		.content_list {
			display: flex;
			align-items: center;
			margin-bottom: 24rpx;

			.name {
				width: 120rpx;
				text-align: right;
				margin-right: 20rpx;
			}

			.ipt {
				flex: 1;
				background-color: #31313B;
				border-radius: 10rpx;
				height: 70rpx;
				padding: 14rpx 18rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.code {
					min-width: 150rpx;
					padding: 10rpx 13rpx;
					background-color: #666666;
					border-radius: 100rpx;
					color: #fff;
					font-size: 26rpx;
					text-align: center;

				}
			}
		}
	}
</style>
