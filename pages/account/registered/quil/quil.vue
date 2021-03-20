<template>
	<view style="padding: 24rpx;">
		  <rich-text :nodes="content"></rich-text>
	</view>
</template>

<script>
		import {getRegisterAgreement} from "../../../../api/account.js"
	export default {
		data() {
			return {
				content:""
			};
		},
		methods:{
			
		},
		onLoad(){
			getRegisterAgreement().then(res => {
				// console.log(res.content)
				this.content = res.content
			})
		}
	}
</script>

<style lang="scss">

</style>
