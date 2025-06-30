// pages/screen/screen.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 状态栏高度
    statuBarHeight: 0,
    // 选项卡底部占位组件的高度
    tabbarBottom: 0,
    // 底部占位符高度
    bottomPlaceholder: 0,
    // 滚动屏的高度
    scrollViewHeight: 666
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 获取屏幕设备的参数
    const windowInfo = wx.getWindowInfo()
    console.log(windowInfo);
    this.setData({
      // 获取安全区域的顶部高度并赋值给顶部占位符
      statuBarHeight: windowInfo.safeArea.top,
      tabbarBottom: windowInfo.screenHeight - windowInfo.safeArea.bottom,
      bottomPlaceholder: windowInfo.screenHeight - windowInfo.safeArea.bottom + 50,
      scrollViewHeight: windowInfo.screenHeight - windowInfo.safeArea.top - 50 - (windowInfo.screenHeight - windowInfo.safeArea.bottom + 50),
      triggered: false,
    })
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
    console.log('开启下拉刷新');
    // 下拉刷新开始的时候，设置 triggered 为 true 打开下拉刷新
    this.setData({
      triggered: true
    })


    // 使用setTimeout假装进行了3秒钟的网络请求
    setTimeout(() => {
      // 加载完成后，关闭下拉刷新

      // 设置triggered 为false 关闭下拉刷新
      this.setData({
        triggered: false
      })
    }, 3000)
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

  }
})