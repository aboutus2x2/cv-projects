// pages/auth/auth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  takePhoto() {
    console.log('takePhoto');

    // // 读取用户当前权限
    // wx.getSetting({
    //   success: res => {
    //     console.log(res);

    //     if (!res.authSetting['scope.camera']) {
    //       // 若不存在相机权限则进行授权
    //       wx.authorize({
    //         scope: 'scope.camera',
    //         success: res => {
    //           console.log(res);
    //           console.log('相机权限授权成功');

    //           // 授权相机权限成功后就可以调用相机对应的功能
    //           // 比如 拍照
    //           console.log('拍照成功');
    //         },
    //         fail: err => {
    //           console.log(err);
    //         }
    //       })
    //     } else {
    //       // 已经有权限时
    //       // 直接调用对应权限的api
    //       console.log('拍照成功');
    //     }
    //   }
    // })


    // 读取用户权限
    wx.getSetting({
      success: res => {
        console.log(res);

        if (typeof res.authSetting['scope.camera'] === 'undefined') {
          // 用户从未授权过

          // 进行授权
          wx.authorize({
            scope: 'scope.camera',
            success: () => {
              // 授权成功
              // 进行拍照
              console.log('拍照成功');
            }
          })
        } else if (res.authSetting['scope.camera'] === false) {
          // 授权的时候拒绝过

          // 打开设置项让用户自己开启权限
          wx.openSetting()
        } else {
          // 已经授权过

          // 进行拍照
          console.log('拍照成功');
        }
      }
    })
  }
})