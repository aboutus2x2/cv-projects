// pages/components/components.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '组件展示页',
    tabs: [{
        url: '/abc',
        text: '选项卡1'
      },
      {
        url: '/xyz',
        text: '选项卡2'
      }
    ]
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

  changeTitle() {
    this.setData({
      title: '导航栏'
    })
  },

  toggleDarkMode() {
    // 查询组件
    const navbar = this.selectComponent('.navbar')
    // 调用组件方法
    navbar.darkMode()
  },

  onThemeChange(ev) {
    console.log('自定义事件触发了');
    console.log(ev);
  },

  onParentThemeChange(ev) {
    console.log('父组件接收到自定义事件');
    console.log(ev);
  }
})