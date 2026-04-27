## http协议

#### 什么是http协议
http （Hypertext transfer protocol）全称 超文本传输协议

分析理解：

- 超文本：比文本更多的信息（图片，超链接，媒体资源等等）
- 传输：运送
- 协议：服务端客户端共同认可的规则

连起来理解：运送比文本更多信息的 “服务器客户端共同认可的” 规则

> 协议就像游戏规则，规定了服务器和客户端怎么互相聊天，怎么一起愉快的玩耍

#### 通过浏览器直观看看http协议
打开chrome浏览器，f12或ctrl+shift+i，在network下查看请求

#### 常用请求头和响应头

请求头就是浏览器上的 ```request header```

响应头就是浏览器上的 ```response header```

- ```Request Method```：请求方法

名称 | 特点 | 服务器取值方式
---|---|---
get | 传递参数在url上可见 | 通过```url.parse(req.url).query```取值
post | 传递参数在url上不可见 | 通过```req.body```取值

- ```Content-Type```：内容类型

有常见的以下几种类型

名称 | 含义
---|---
text/html | html文档
text/plain | 纯文本
image/jpeg | .jpg图片
image/png | .png图片
text/xml | xml文档
application/json | json数据
application/x-www-form-urlencoded | 表单url编码数据，例如：a=1&b=2&c=3
multipart/form-data | 上传文件时常看到
charset=utf-8 | 指定编码集

- ```Status Code```：状态码

状态码只指示请求或响应状态，不对业务负责

常见状态码

代码 | 含义
--- | ---
200 | 请求成功
302 | 资源重定向
400 | 客户端请求的语法错误，服务器无法理解
403 | 权限不足 限制访问
404 | 资源未找到
500 | 服务器内部错误
503 | 请求超时

- ```User-Agent```：访问代理

意思是什么东西访问了服务器，通常可以用作平台判断。例如：不同浏览器，该值不一样
