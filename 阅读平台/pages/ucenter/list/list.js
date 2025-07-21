const AV = getApp().globalData.AV

// pages/ucenter/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 当前页
    page: 1,
    listData: [],

    // 数据是否已经查询完
    over: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
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
    this.onPullDownRefresh()
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
    console.log('pull down refresh');
    // 清空并还原数据
    this.setData({
      page: 1,
      listData: [],
      over: false
    })
    this.query(() => {
      // 查询结束后 停止下拉刷新
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if (this.data.over) return

    // 翻页
    this.setData({
      page: this.data.page + 1
    })

    // 查询数据
    this.query()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  // 查询列表
  // callback 代表查询完成后的回调
  query(callback) {
    const query = new AV.Query('Book')

    // 分页查询
    // 限制查询数据的数量
    query.limit(5)
    // skip 跳过多少数据不查询
    query.skip((this.data.page - 1) * 5)
    // 按照 updatedAt (更新时间) 进行降序排列
    query.descending('updatedAt')
    // 查询
    query.find().then(res => {
      console.log(res);

      if (res.length === 0) {
        this.setData({
          over: true
        })
        return
      }

      const listData = res.map(item => {
        return {
          id: item.id,
          ...item.attributes
        }
      })

      this.setData({
        listData: [...this.data.listData, ...listData]
      })
    }).finally(() => {
      // 无论最终查询结果如何
      // 都会执行此处的代码
      typeof callback === 'function' && callback()
    })
  },

  // 删除
  onRemove(ev) {
    wx.showModal({
      title: '删除',
      content: '确定删除吗',
      success: res => {
        if (res.confirm) {
          // 确定
          console.log(ev.currentTarget.dataset.id);

          // 创建要删除的数据对象
          let book = AV.Object.createWithoutData('Book', ev.currentTarget.dataset.id)

          wx.showLoading({
            title: '正在删除',
          })
          // 调用图书对象的销毁方法
          book.destroy().finally(() => {
            wx.hideLoading()
            // 刷新页面
            this.onPullDownRefresh()
          })
        }
      }
    })
  }
})