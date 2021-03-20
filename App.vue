<script>
export default {
	onLaunch: function() {
    console.log('App Launch');
    // if(uni.getStorageSync('token')) {
    //   this.$store.dispatch("getMerchantInfo",{});
    // }

	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
/*每个页面公共css */
@import './static/common.css';
@import "uview-ui/index.scss";
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */
page {
  background-color: #1A1622;
  color: #E8E8E9;
  font-size: 30rpx;
}
</style>
