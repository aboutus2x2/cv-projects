// components/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      // value: [{url: '', text: ''}]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    placeholder: 0,
    _tabs: []
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  lifetimes: {
    attached() {
      this.data.tabs.forEach(tab=>{
        this.data._tabs.push({...tab, active: false})
      })
      this.data._tabs[0].active = true;

      const wi = wx.getWindowInfo()
      this.setData({
        _tabs: this.data._tabs,
        placeholder: wi.screenHeight - wi.safeArea.bottom 
      })
      console.log(this.data._tabs);
    }
  }
})