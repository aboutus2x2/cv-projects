// components/navbar/navbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '自定义导航栏',
      observer: function (newVal, oldVal) {
        console.log(newVal);
        console.log(oldVal);
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    placeholder: 0,
    backgroundColor: '#f00'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    add(a, b) {
      return a + b
    },
    darkMode() {
      this.setData({
        backgroundColor: '#000'
      })

      // 触发自定义事件
      this.triggerEvent('theme-change', 'dark', {
        bubbles: true,
        capturePhase: false
      })
    }
  },

  // 以下是新版本的生命周期
  lifetimes: {
    attached: function () {
      console.log('attached');
      const wi = wx.getWindowInfo()
      this.setData({
        placeholder: wi.safeArea.top
      })

      console.log(this.add(2, 3));
    },
    detached: function () {},
  },

  // 以下是较老的生命周期版本

  // 组件创建时
  created() {
    console.log('组件创建时');
  },

  // 组件插入页面节点后
  attached() {
    console.log('组件插入页面节点后');
  },

  // 组件渲染完成后
  ready() {
    console.log('组件渲染完成后');
  },

  // moved 组件在页面中移动了节点位置

  // 组件被移除
  detached() {
    console.log('组件被移除');
  }
})