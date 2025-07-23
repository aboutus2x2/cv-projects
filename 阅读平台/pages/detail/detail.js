const AV = getApp().globalData.AV

// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 按钮数据
    btns: [{
        title: '详情',
        active: false
      },
      {
        title: '目录',
        active: true
      },
    ],
    placeholderHeight: 0,
    // 封面图
    cover: '/img/img/book10.jpg',
    // 书名
    name: '书名',
    // 作者
    author: '作者',
    desc: '详情',
    dir: [],

    // 收藏id
    deskId: undefined
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options.id);
    // 假id
    // options.id = '63b3c6f360195e6845fca940'

    const wi = wx.getWindowInfo()

    this.setData({
      id: options.id,
      placeholderHeight: wi.screenHeight - wi.safeArea.bottom
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
  },

  query() {
    wx.showLoading({
      title: '查询中',
    })

    let query = new AV.Query('Book')
    // 添加查询条件
    query.equalTo('objectId', this.data.id)
    query.find().then(res => {
      console.log(res);
      let data = res[0].attributes
      this.setData({
        cover: data.cover,
        name: data.name,
        author: data.author,
        desc: data.desc,
        dir: data.dir.split('\n')
      })
      console.log(this.data.dir);
    }).finally(() => {
      wx.hideLoading()
    })


    // 查询收藏id
    query = new AV.Query('Desk')
    query.equalTo('bookId', this.data.id)
    query.find().then(res => {
      if (res.length > 0) {
        // 保存收藏id
        this.setData({
          deskId: res[0].id
        })
      }
    })
  },
  onEnterDesk() {
    wx.showLoading({
      title: '加入中',
    })
    const Desk = AV.Object.extend('Desk')
    let desk = new Desk()
    desk.set('bookId', this.data.id)
    desk.save().then(res => {
      console.log(res);
      this.setData({
        deskId: res.id
      })
    }).finally(() => {
      wx.hideLoading()
    })
  },

  // 移出书桌
  onRemoveDesk() {
    wx.showLoading({
      title: '移出中',
    })
    // 构造书桌对象
    const desk = AV.Object.createWithoutData('Desk', this.data.deskId)
    desk.destroy().then(res => {
      this.setData({
        deskId: null
      })
    }).finally(() => {
      wx.hideLoading()
    })
  }
})