// 导入leanCloud sdk
const AV = require('./libs/av-core-min.js');
const adapters = require('./libs/leancloud-adapters-weapp.js');

// app.js
App({
  onLaunch() {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    // 安装微信的适配器
    AV.setAdapters(adapters);

    // 初始化 leanCloud sdk
    AV.init({
      appId: "UrSuYRev392dvKthkmVVzj7K-gzGzoHsz",
      appKey: "G5c7JhuaIUQAGqpGTXe7ZNWX",
      serverURL: "https://ursuyrev.lc-cn-n1-shared.com"
    });

    // 测试读取数据
    const query = new AV.Query('Test')
    // 调用find 查询数据
    query.find().then(res => {
      console.log(res);
    })
  },
  globalData: {
    userInfo: null
  }
})