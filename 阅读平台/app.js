const AV = require('./libs/av-core-min.js');
const adapters = require('./libs/leancloud-adapters-weapp.js');

// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    AV.setAdapters(adapters);
    AV.init({
      appId: "UrSuYRev392dvKthkmVVzj7K-gzGzoHsz",
      appKey: "G5c7JhuaIUQAGqpGTXe7ZNWX",
      serverURL: "https://ursuyrev.lc-cn-n1-shared.com"
    });
  },
  globalData: {
    userInfo: null
  }
})
