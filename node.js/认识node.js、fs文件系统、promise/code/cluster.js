// 集群
// 集群的含义就是一个事物的多个重复个体形成的群落，例如：蚂蚁，蜜蜂形成的蚂蚁群，蜜蜂群就是集群；
// 多台服务器可以组成服务器主机集群；
// 多个相同的应用程序也能组成应用程序集群，例如服务器应用集群，数据库集群等
// node.js 的集群模块就是创建应用集群用的
// 集群的作用：集群模块可以让js代码在多个cpu核心上运行多个副本 可以更好的利用cpu，同时执行多份代码
// 集群中有主从的概念

const cluster = require('cluster');
const os = require('os')

// 判断是否是主程序
if (cluster.isMaster) {
    for (let i = 0; i < os.cpus().length; i++) {
        // 每个cpu核心上开启一个从程序
        cluster.fork()
    }
} else {
    console.log(process.pid, '从程序中执行的代码')
}