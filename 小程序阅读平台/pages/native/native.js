// pages/native/native.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: ''
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

  scanCode() {
    console.log('scanCode');

    // 扫码
    wx.scanCode({
      // onlyFromCamera: true,
      success: res => {
        console.log(res);
      },
      fail(err) {
        console.error(err);
      }
    })
  },

  takePhoto() {
    console.log('takePhoto');
    // 当前相机的上下文对象
    const ctx = wx.createCameraContext()
    // 拍照
    ctx.takePhoto({
      // 拍照成功的回调
      success: res => {
        console.log(res);
        this.setData({
          src: res.tempImagePath
        })
      },
      fail(err) {
        console.log(err);
      }
    })
  }
})