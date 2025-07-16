const AV = getApp().globalData.AV

// pages/ucenter/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    author: '',
    // 分类名称
    category: '0',
    // 封面图
    cover: '',
    // 简介
    desc: '',
    // 目录
    dir: '',

    // 选择范围
    range: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
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

  // 查询分类
  query() {
    const query = new AV.Query('Category')
    query.find().then(res => {
      this.setData({
        range: res.map(item => item.attributes.name)
      })
      console.log(this.data.range);
    })
  },

  onNameInput(ev) {
    this.setData({
      name: ev.detail.value
    })
  },

  onAuthorInput(ev) {
    this.setData({
      author: ev.detail.value
    })
  },
  onCategoryChange(ev) {
    this.setData({
      category: ev.detail.value
    })
  },

  // 上传文件
  upload() {
    // 选择媒体文件
    wx.chooseMedia({
      count: 1,
      success: res => {
        // res 选择的媒体文件信息
        console.log(res);
        // 获取文件地址
        let uri = res.tempFiles[0].tempFilePath
        // 读取文件名
        let fileName = uri.match(/(?<=\/)[^\/]+$/)[0]
        const data = {
          blob: {
            uri
          }
        }
        // 构造文件对象
        const file = new AV.File(fileName, data)
        // 保存文件到服务器
        file.save().then(file => {
          console.log(file.url());
          // 保存封面图
          this.setData({
            cover: file.url()
          })
        })
      },
      fail(err) {
        console.error(err);
      }
    })
  },

  onDescInput(ev) {
    this.setData({
      desc: ev.detail.value
    })
  },

  onDirInput(ev) {
    this.setData({
      dir: ev.detail.value
    })
  },

  onReset() {
    this.setData({
      name: '',
      author: '',
      category: '0',
      cover: '',
      desc: '',
      dir: ''
    })
  },

  onSubmit(ev) {
    // 显示转圈提示
    wx.showLoading()

    console.log(ev);

    // 声明 class
    const Book = AV.Object.extend('Book');

    // 构建对象
    const book = new Book();

    // 为属性赋值
    book.set('name', this.data.name);
    book.set('author', this.data.author);
    book.set('category', this.data.range[this.data.category]);
    book.set('cover', this.data.cover);
    book.set('desc', this.data.desc);
    book.set('dir', this.data.dir);

    // 将对象保存到云端
    book.save().then(_book => {
      // 成功保存之后，执行其他逻辑
      console.log(`保存成功。objectId：${_book.id}`);

      // 返回页面
      wx.navigateBack()
    }, (error) => {
      // 异常处理
      console.error(error);
    }).finally(() => {
      // 隐藏加载中提示
      wx.hideLoading()
    })
  }
})