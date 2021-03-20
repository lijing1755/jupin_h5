export default {
  //自动消失提示弹窗
  autoHideAlert(title,duration=2000){
    uni.showToast({
      title: title,
      icon: 'none',
      duration: duration,
      mask: true
    });
  },
  //弹窗
  showModal(content, title, showCancel,confirmText,cancelText) {
		return new Promise((resolve,reject)=>{
      wx.showModal({
        title: title||'提示',
        content: content,
        // confirmColor: '',
        showCancel: showCancel||false,
        confirmText: confirmText||"确定",
        cancelText: cancelText||'取消',
        mask: true,
        success(res){
          if (res.confirm) {
            resolve()
          } else if (res.cancel) {
            reject()
          }
        }
      });
    })
  },
}