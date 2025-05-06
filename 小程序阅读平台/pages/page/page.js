// pages/page/page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '我是标题'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('页面加载完成后触发 onLoad');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log('页面初次渲染完成 onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('页面显示 onShow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log('页面隐藏 onHide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log('前看 child1 的 onUnload');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log('下拉刷新');

    setTimeout(() => {
      console.log('关闭下拉刷新');
      // 停止下拉刷新
      wx.stopPullDownRefresh()
    }, 2000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('到达底部');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    console.log('分享');
  }
})