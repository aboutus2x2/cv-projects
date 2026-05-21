# websocket 简介

websocket 是一个服务器和客户端双向通信的协议(双工通道)，主要用作服务器向客户端主动推送数据。

[websocket api](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)

express 服务器也可以实现 websocket 协议，可以使用 [express-ws](https://www.npmjs.com/package/express-ws) 包

websocket 更常见的使用方法是做一个独立服务器，如直播弹幕服务器，聊天服务器等

完成上述服务器的 node.js 的框架有 socket.io