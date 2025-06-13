// pages/global-data/child/child.js
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
    // 获取全局对象
    const app = getApp()
    console.log(app.globalData);

    // 删除持久化数据
    wx.removeStorageSync('name')

    // 异步删除
    wx.removeStorage({
      key: 'sex',
      success: () => {
        console.log('删除成功');
      }
    })

    // 读取持久化数据
    const value = wx.getStorageSync('name')
    console.log(value);

    // 异步读取数据
    wx.getStorage({
      key: 'sex',
      // 读取成功的回调函数
      success: res => {
        // res 读取出的数据内容
        console.log(res);
      },
      fail(err) {
        console.error(err);
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