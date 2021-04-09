<script>
import {
	mapGetters,
	mapActions
} from 'vuex';
import store from '@/store/index.js'
export default {
	onLaunch: function(option) {	
		// console.log(option)
		// let temp = JSON.stringify(option.query)
		// let token = JSON.parse(temp).token
		// alert(token)
		// this.$store.commit('SET_TOKEN', JSON.parse(temp).token)
		
	 
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
  background-color: #F7F9FC;
  color: $theme-main-color;
  font-size: 30rpx;
}

</style>
