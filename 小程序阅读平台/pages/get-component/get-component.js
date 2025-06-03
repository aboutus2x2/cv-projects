// pages/get-component/get-component.js
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
    // 创建查询器
    const query = wx.createSelectorQuery()
    // 通过css选择器添加查询条件
    // nodeRef 可以理解成查询出来的结果代理
    const nodeRef = query.select('.box')
    // fields 接收两个参数,
    // 第一个参数：查询属性的配置
    // 第二个参数：查询结束的回调
    nodeRef.fields({
      dataset: true, // 自定义属性，也就是标签上 data- 开头的属性
      size: true, // 元素的宽高
      rect: true, // 元素的位置 top left right bottom
      properties: ['url'], // 元素的固有属性，不能查询 id class style 属性和绑定的事件属性
      computedStyle: ['backgroundColor', 'width', 'height'] // 查询样式
    }, (res) => {
      // 该 res 就是查询的结果
      console.log(res)
    })

    // 执行查询命令
    // 执行之后 nodeRef 才会收到
    query.exec()

    // 查询自定义组件
    const myComponent = this.selectComponent('.my-c')
    console.log(myComponent);
    // 读取组件data中的属性
    console.log(myComponent.data.id);
    // 访问组件methods中的方法
    myComponent.fn()
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