// 引入 leanCloud sdk
const AV = getApp().globalData.AV

// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navItem: [{
        id: '0',
        name: '神话',
        cover: '/img/img/book10.jpg',
      },
      {
        id: '1',
        name: '神话2',
        cover: '/img/img/book11.jpg',
      },
      {
        id: '2',
        name: '神话3',
        cover: '/img/img/book12.jpg',
      },
      {
        id: '3',
        name: '神话4',
        cover: '/img/img/book13.jpg',
      }
    ],
    // 查询结果
    result: [],

    showSearch: false,

    // 防抖用的计时器id
    timer: undefined
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 查询数据库
    // this.query()
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

  // 查询所有的分类信息
  query() {
    const query = new AV.Query('Category')
    query.find().then(res => {
      this.setData({
        navItem: res.map(item => ({
          id: item.id,
          ...item.attributes
        }))
      })
    })
  },

  // 搜索框被点击了
  onSearchTap() {
    this.setData({
      showSearch: true
    })
  },

  onSearchPanelTap() {
    console.log('panel tap');
    this.setData({
      showSearch: false,
      result: []
    })
  },

  onSearchBarTap() {
    console.log('tap');
  },

  onResultTap(ev) {
    console.log('result tap');
    console.log(ev.currentTarget.dataset.id);
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + ev.currentTarget.dataset.id
    })
  },

  // 搜索输入框输入事件
  onInput(ev) {
    clearTimeout(this.data.timer)
    let timer = setTimeout(() => {
      if (ev.detail.value.trim() === '') {
        this.setData({
          result: []
        })
        return
      }
      // 构造书名查询条件
      const query1 = new AV.Query('Book')
      // 查询name字段包含ev.detail.value的数据
      query1.contains('name', ev.detail.value)
      // 构造作者的查询条件
      const query2 = new AV.Query('Book')
      query2.contains('author', ev.detail.value)

      // 或运算
      const query = AV.Query.or(query1, query2)
      query.find().then(res => {
        console.log(res);
        this.setData({
          result: res.map(item => {
            return {
              id: item.id,
              ...item.attributes
            }
          })
        })
      })
    }, 500)
    this.setData({
      timer
    })
  }
})