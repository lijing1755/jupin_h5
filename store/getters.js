const getters = {
	userInfo: state => state.user.userInfo,
	token: state => state.user.token,
	type:state => state.user.type,
	order:state => state.user.order
}
export default getters
