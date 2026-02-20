## fullpage.js 安装
1、访问https://github.com/alvarotrigo/fullPage.js，下载对应代码
   获取 dist文件中的 fullpage.min.css fullpage.min.js
2、npm install fullpage.js 在node_modules/fullpage.js/dist下获取
  fullpage.min.css fullpage.min.js
## fullpage.js 使用
1、引入样式文件 fullpage.min.css(fullpage.css)
2、引入js文件 fullpage.min.js(fullpage.js)
3、通过class="section" 设置垂直滑动全屏区域
4、在section中设置class="slide" 设置水平滑动的全屏区域
5、在js代码中使用 new fullpage 初始化fullpage效果

## fullpage.js 常用的API
 fullpage_api.moveSectionUp() 上滑
 fullpage_api.moveSectionDown() 下滑
 fullpage_api.moveTo(section,slide) 指定位置滑动

## fullpage.js 回调函数
```js
 new fullpage('#app',{
  //滑动完成后触发该回调函数
  //origin : 起始位置的section
  //destination: 终点位置的section
  //direction : 滑动方向（down up）
  //trigger : 触发滑动的方式 （wheel click keydown...）
  afterLoad:function(origin, destination, direction, trigger){...},
  //滑动刚开始就触发该回调函数
  onLeave:function(origin, destination, direction, trigger){...}
 })
 ```