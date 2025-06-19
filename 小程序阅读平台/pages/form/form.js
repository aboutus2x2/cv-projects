// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '李四',
    pwd: '123',
    sex: 'other',
    // 复选按钮的数据源
    hobbies: [{
        value: 'dlq',
        text: '打篮球',
        checked: false
      },
      {
        value: 'tzq',
        text: '踢足球',
        checked: true
      },
      {
        value: 'ymq',
        text: '羽毛球',
        checked: true
      },
    ],
    agree: false,
    desc: '123\n456',

    // range: ['中国', '日本', '韩国']

    country: '2',
    range: [{
        value: 'CN',
        text: '中国'
      },
      {
        value: 'JP',
        text: '日本'
      },
      {
        value: 'KO',
        text: '韩国'
      },
    ],

    clazz: ['1', '2'],
    multiRange: [
      [{
          value: '1b',
          text: '一班'
        },
        {
          value: '2b',
          text: '二班'
        },
        {
          value: '3b',
          text: '三班'
        },
      ],
      [{
          value: '1z',
          text: '一组'
        },
        {
          value: '2z',
          text: '二组'
        },
        {
          value: '3z',
          text: '三组'
        },
      ]
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

  // 姓名输入事件
  onNameInput(ev) {
    console.log(ev);

    this.setData({
      name: ev.detail.value
    })
  },

  onPwdInput(ev) {
    this.setData({
      pwd: ev.detail.value
    })
  },

  // 单选按钮变化事件
  onSexChange(ev) {
    console.log(ev);
    this.setData({
      sex: ev.detail.value
    })
  },

  // 复选框变化事件
  onHobbiesChange(ev) {
    console.log(ev);
    // 当前选中的值数组
    ev.detail.value
    this.data.hobbies.forEach(hobby => {
      // 若选项包含在ev.detail.value中，则修改checked为true
      hobby.checked = ev.detail.value.includes(hobby.value)
    })
    this.setData({
      hobbies: this.data.hobbies
    })
  },

  onAgreeChange(ev) {
    console.log(ev);
    this.setData({
      agree: ev.detail.value
    })
  },

  onDescInput(ev) {
    this.setData({
      desc: ev.detail.value
    })
  },

  onCountryChange(ev) {
    console.log(ev);
    this.setData({
      country: ev.detail.value
    })
  },

  onClazzChange(ev) {
    console.log(ev);
    this.setData({
      clazz: ev.detail.value
    })
  },

  onSubmit() {
    console.log(this.data);
  },

  onFormSubmit(ev) {
    console.log(ev);
  },

  onFormReset(ev) {
    console.log(ev);
    console.log(this.data);

    this.setData({
      name: '李四',
      pwd: '123',
      sex: 'other',
      hobbies: [{
          value: 'dlq',
          text: '打篮球',
          checked: false
        },
        {
          value: 'tzq',
          text: '踢足球',
          checked: true
        },
        {
          value: 'ymq',
          text: '羽毛球',
          checked: true
        },
      ],
      agree: false,
      desc: '123\n456',
      country: '2',
      clazz: ['1', '2']
    })
  }
})