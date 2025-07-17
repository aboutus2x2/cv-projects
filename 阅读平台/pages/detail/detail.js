// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 按钮数据
    btns: [{
        title: '详情',
        active: true
      },
      {
        title: '目录',
        active: false
      },
    ],
    placeholderHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options.id);

    const wi = wx.getWindowInfo()
    this.setData({
      placeholderHeight: wi.screenHeight - wi.safeArea.bottom
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

  // 切换按钮
  onSwitch(ev) {
    // 获取自定义的索引
    let i = ev.currentTarget.dataset.index
    console.log(i);

    if (this.data.btns[i].active) return
    this.data.btns.forEach((btn, index) => {
      // 设置对应索引的active为true
      btn.active = i === index
    })

    this.setData({
      btns: this.data.btns
    })
  }
})