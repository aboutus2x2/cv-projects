// pages/work1/work1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 设置颜色值
    color: '#000',
    users: [{
        id: 1,
        name: '张三'
      },
      {
        id: 2,
        name: '李四'
      },
      {
        id: 3,
        name: '老王'
      },
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

  onToggle() {
    // 要更新页面的话就必须使用 this.setData 方法
    this.setData({
      color: this.data.color === '#000' ? '#ff0' : '#000'
    })
  },

  remove(ev) {
    // 读取id
    let id = ev.target.dataset.id
    console.log(id);

    // showModel 显示模态窗口
    wx.showModal({
      // 标题
      title: '删除',
      // 信息
      content: '确定删除吗?',
      success: res => {
        console.log(res);
        if (res.confirm) {
          // 用户点击了确定
          // 删除数据
          // 查询索引
          let i = this.data.users.findIndex(user => user.id === id)
          // 删除数组成员
          this.data.users.splice(i, 1)
          console.log(this.data.users);
          // 更新页面
          this.setData({
            users: this.data.users
          })
        } else if (res.cancel) {
          // 用户点击了取消
        }
      }
    })
  }
})