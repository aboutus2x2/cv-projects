// pages/navigation/navigation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    translateY: 0,
    animation: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    setTimeout(() => {
      this.setData({
        animation: 'animation: move 1s linear forwards'
      })
    }, 2000)

    // setTimeout(() => {
    //   this.setData({
    //     translateY: 100
    //   })
    // }, 2000)
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

  toChild1() {
    // 入栈导航
    wx.navigateTo({
      // 跳转路径
      // url: './child1/child1?a=1&b=2&c=3',
      url: '/pages/navigation/child1/child1?a=1&b=2&c=3',
      // 跳转成功后的回调
      success: () => {
        // 使用箭头函数，则此处可以使用this关键字来访问页面对象模型
        console.log('跳转成功');
      },
      // 失败后的回调
      fail() {
        console.log('失败');
      },
      // 无论跳转成功还是失败，都会触发complete
      complete: () => {
        console.log('跳转完成');
      }
    })
  }
})