// pages/properties/properties.js
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
    // 查询元素
    const query = wx.createSelectorQuery()
    const nodeRef = query.select('.my-view')
    nodeRef.fields({
      // 查询自定义属性
      dataset: true,
    }, res => {
      console.log(res);
    })
    query.exec()
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

  onTap(ev) {
    // 通过事件对象 ev 读取元素身上的自定义属性 data-
    console.log(ev);
    // 通过 ev.target.dataset 来读取自定义属性
    console.log(ev.target.dataset.id);
  }
})