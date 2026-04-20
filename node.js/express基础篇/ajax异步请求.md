# ajax 异步请求

## 知识点

- 什么是 ajax
- ajax 的应用场景
- 如何发起 ajax 网络请求

## 什么是 ajax

`ajax （async javascript and xml）` 翻译过来就是：`异步js和xml`

通常我们把 `ajax` 理解成：异步的网络请求

## ajax 的应用场景

两种情况可以考虑使用 ajax

1. 网页中为了发送请求的同时，允许用户继续和页面进行交互
2. 不希望使用 `form` 表单，导致页面跳转

## 如何发起 ajax 网络请求

发起 `ajax` 请求的工具 我们称为 `Http Client（http客户端）`

### 使用浏览器自带的 ajax

#### XMLHttpRequest

```javascript
// 创建 xhr
const xhr = new XMLHttpRequest()
// 打开连接
// xhr.open(requestMethod, url, async)
// requestMethod 请求方法 get 或 post
// url 请求地址
// async 是否异步 默认为 true，若为 false 则，xhr.send 在收到服务器响应后才会返回
xhr.open('post', '/play', true)
// 监听收到服务器响应事件
xhr.addEventListener('load', ev=>{
    ev.currentTarget // 该对象中可以获取服务器响应数据
})
// 发送请求
xhr.send()
```

#### fetch

```javascript
// fetch api: https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch#%E6%94%AF%E6%8C%81%E7%9A%84%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0

// fetch 是一个 promise 函数
// fetch(url, options)
// url 请求路径
// options 配置对象
fetch(`/doGet?name=${fd.get('name')}&age=${fd.get('age')}`, {
    method: 'GET', // 请求方法 *GET, POST, PUT, DELETE, etc.
    mode: 'same-origin', // 跨域策略 no-cors(不跨域), *cors(跨域), same-origin(同源)
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify(data) // 数据体 body data type must match "Content-Type" header
}).then(res => {
    // res 服务器的响应对象
    console.log(res)
    // res.text() 用字符串格式读取服务器返回的结果
    // 该函数返回的是 promise
    // return res.text()
    return res.json()

    // res.json() 用json对象读取返回值
    // res.blob() 用blob对象(二进制数据对象)读取返回值
}).then(text => {
    console.log(text)
})
```

### 使用一些 http clint 框架

经典的 http client 框架有：

- jquery
- axios

jquery 已过时，可以自行查找文档，方法非常类似 fetch

axios 比较主流的 http client
