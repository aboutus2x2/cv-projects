const AV = getApp().globalData.AV

// pages/category/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryId: '',
    title: '',
    words: '',
    author: '',
    cover: '',
    listData: [
      {
        id: 0,
        cover: '/img/img/book10.jpg',
        name:'书1'
      },
      {
        id: 1,
        cover: '/img/img/book11.jpg',
        name:'书2'
      },
      {
        id: 2,
        cover: '/img/img/book12.jpg',
        name:'书3'
      },
      {
        id: 3,
        cover: '/img/img/book13.jpg',
        name:'书4'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const {
      categoryId
    } = options

    console.log(categoryId);
    this.setData({
      categoryId
    })

    this.query()
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

  // 查询数据
  query() {
    wx.showLoading()

    const query = new AV.Query('Category')
    query.equalTo('objectId', this.data.categoryId)
    query.find().then(res => {
      console.log(res);
      let data = res[0].attributes
      // 保存数据
      this.setData({
        title: data.name,
        words: data.words,
        author: data.author,
        cover: data.cover
      })

      // 修改标题
      wx.setNavigationBarTitle({
        title: this.data.title,
      })
    }).finally(()=>{
      wx.hideLoading()
    })
  }
})