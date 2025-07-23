const AV = getApp().globalData.AV

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
        author: '作者1',
        // 当前数据是否勾选
        checked: false
      },
      {
        id: 1,
        cover: '/img/img/book11.jpg',
        name: '书2',
        author: '作者2',
        checked: false
      },
      {
        id: 2,
        cover: '/img/img/book12.jpg',
        name: '书3',
        author: '作者3',
        checked: false
      },
      {
        id: 3,
        cover: '/img/img/book13.jpg',
        name: '书4',
        author: '作者4',
        checked: false
      },
    ],

    // swiper的滑动块
    swiperItem: [],

    // 当前swiper的索引
    current: 0,

    // 整理模式
    manageMode: false,

    // 是否显示删除按钮
    showDelete: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 设置 swiper 的加数据
    this.setData({
      swiperItem: this.data.listData.slice(0, 3)
    })
    console.log(this.data.swiperItem);

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
  onOpen() {
    this.setData({
      show: true
    })
  },
  onClose() {
    // 清空选择项
    this.data.listData.forEach(item => {
      item.checked = false
    })

    // 关闭面板
    this.setData({
      show: false,
      showDelete: false,
      listData: this.data.listData,
      manageMode: false
    })
  },

  // swiper 当前索引变化事件
  onSwiperChange(ev) {
    // 读取当前索引
    let i = ev.detail.current
    this.setData({
      current: i
    })
  },

  // 开启管理模式
  openManageMode() {
    this.setData({
      manageMode: true
    })
  },

  // 关闭管理模式
  closeManageMode() {
    // 清空选择项
    this.data.listData.forEach(item => {
      item.checked = false
    })

    this.setData({
      manageMode: false,
      listData: this.data.listData,
      showDelete: false
    })
  },

  // 勾选选项
  onChecked(ev) {
    // 读取收藏id
    let id = ev.currentTarget.dataset.id
    console.log(id);

    let i = this.data.listData.findIndex(item => item.id === id)
    this.data.listData[i].checked = !this.data.listData[i].checked

    // 判断是否至少有一个成员被勾选了
    let some = this.data.listData.some(item => item.checked)

    this.setData({
      listData: this.data.listData,
      showDelete: some
    })
  },

  onDelete() {
    // 先保留checked为true的数组成员
    // 再map一个id数组
    let ids = this.data.listData.filter(item => item.checked).map(item => item.id)
    console.log(ids);

    let arr = this.data.listData.filter(item => !ids.includes(item.id))
    this.setData({
      listData: arr,
      showDelete: false
    })
  },

  query() {
    let query = new AV.Query('Desk')
    query.find().then(res => {
      console.log(res);
      // 构造一个 bookId 的数组
      let bookIds = res.map(item => item.attributes.bookId)

      console.log('bookIds.........');
      console.log(bookIds);

      query = new AV.Query('Book')
      // containedIn 查询某个字段包含于某个数组中的数据
      // 第一个参数: 要查询的字段
      // 第二个参数: 被包含的数组
      query.containedIn('objectId', bookIds)
      query.find().then(res => {
        console.log(res);
        this.setData({
          listData: res.map(item => ({
            id: item.id,
            ...item.attributes,
            // 每个数据要设置一个 checked 用来进行勾选
            checked: false
          }))
        })

        console.log(this.data.listData);

        this.setData({
          swiperItem: this.data.listData.slice(0, 3)
        })
        console.log(this.data.swiperItem);
      })
    })
  }
})