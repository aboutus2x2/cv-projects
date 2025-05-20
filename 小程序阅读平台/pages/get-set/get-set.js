// 导入语法
const m = require('./utils.js')

// pages/get-set/get-set.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '射雕英雄传',
    age: 17
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

  // 按钮点击后的处理程序
  // 可以接收事件对象 event
  onBtnTap(event) {
    console.log('click');
    console.log(event);

    // 修改data中的值
    // this: 代表的是当前的页面对象模型
    this.setData({
      title: '天龙八部',
      age: 28
    })

    // 读取data中的值
    console.log(this.data.title);
    console.log(this.data.age);

    // 使用导入的模块内容
    console.log(m);
    this.setData({
      title: m.text
    })
    console.log(m.add(1, 2));
  }
})