# 使用scroll-view进行下拉刷新

- 创建 `scroll-view` 如下
  ```html
  <!-- 
      给scroll-view添加下拉刷新功能
      当高度为动态计算的高度时 一定要给高度设置初始值 例如：style="height: {{scrollHeight || 666}}px" 或者 scrollHeight 初始设置为 666

      refresher-enabled 开启下拉刷新功能
      refresher-default-style 下拉时三个点的颜色
      refresher-background 下拉框背景色
      refresher-triggered 是否触发刷新 true 为触发 false 为关闭 当设置为false时将关闭下拉刷新
      bindrefresherrefresh 绑定下拉刷新事件
  -->
  <scroll-view class="my-navbar" scroll-y style="height: {{scrollHeight}}px" refresher-enabled refresher-default-style="white" refresher-background="pink" refresher-triggered="{{triggered}}" bindrefresherrefresh="onPullDownRefresh">
    ...
    页面内容写在这里
    ...
  <scroll-view>
  ```
- 实现页面依赖的 `js`
  ```js
  // js 代码的 data 和 onPullDownRefresh 如下
  Page({
    ...

    data: {
        triggered: false,
        scrollHeight: 1024, // 滚动区域高度
    },

    onPullDownRefresh() {
        this.setData({triggered: true}) // 开启刷新状态
        // todo 做刷新需要做的事情 这里用定时器来模拟网络请求
        setTimeout(()=>{
            this.setData({triggered: false}) // 只要设置 triggered 下拉刷新就会关闭
        }, 3000)
    }
  })
  ```
  