// pages/global-data/global-data.js
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
    // 小程序对象
    const app = getApp()
    // 重启小程序后一下数据就没有了
    console.log(app.globalData);
    console.log(app.globalData.name);
    console.log(app.globalData.sex);

    // 保存数据到全局对象中
    app.globalData.name = '张三'
    app.globalData.sex = 'male'


    // 设置持久化数据
    wx.setStorageSync('name', '老王')

    // 异步设置数据
    wx.setStorage({
      // 数据名
      key: 'sex',
      // 数据值
      data: 'other',
      success: () => {
        console.log('设置数据成功');
      }
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

  }
})