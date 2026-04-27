## TCP/IP协议

TCP（translate controll protocol）传输控制协议

TCP/IP协议不仅仅指的是TCP 和IP两个协议，而是指一个由FTP、SMTP、TCP、UDP、IP等协议构成的协议簇， 只是因为在TCP/IP协议中TCP协议和IP协议最具代表性，所以被称为TCP/IP协议

TCP/IP 主要规定链路层、网络层、传输层、应用层

重点：

- 网络层规定了ip地址
- 传输层规定了端口号 port

> 通过ip + 端口的组合，可以找到互联网上的一个应用服务。如果在使用http协议访问网络时，不加端口号，则默认访问 80 端口。例如：访问 http://127.0.0.1/ 等价于访问 http://127.0.0.1:80/
