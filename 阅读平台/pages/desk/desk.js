// pages/desk/desk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 是否显示整理面板
    show: false,
    listData: [{
        id: 0,
        cover: '/img/img/book10.jpg',
        name: '书1',
        author: '作者1'
      },
      {
        id: 1,
        cover: '/img/img/book11.jpg',
        name: '书2',
        author: '作者2'
      },
      {
        id: 2,
        cover: '/img/img/book12.jpg',
        name: '书3',
        author: '作者3'
      },
      {
        id: 3,
        cover: '/img/img/book13.jpg',
        name: '书4',
        author: '作者4'
      },
    ],

    // swiper的滑动块
    swiperItem: [],

    // 当前swiper的索引
    current: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // todo 设置 swiper 的加数据
    this.setData({
      swiperItem: this.data.listData.slice(0, 3)
    })
    console.log(this.data.swiperItem);
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
  onOpen() {
    this.setData({
      show: true
    })
  },
  onClose() {
    // todo 清空选择项
    // 关闭面板
    this.setData({
      show: false
    })
  },

  // swiper 当前索引变化事件
  onSwiperChange(ev) {
    // 读取当前索引
    let i = ev.detail.current
    this.setData({
      current: i
    })
  }
})