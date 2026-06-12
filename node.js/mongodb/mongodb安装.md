# mongodb安装

[MongoDB Server下载地址](https://www.mongodb.com/try/download/community)

[MongoDB Shell下载地址](https://www.mongodb.com/try/download/shell)

[MongoDB Compass下载地址](https://www.mongodb.com/try/download/compass)

## 下载 MongoDB Server

- `.msi` 微软安装向导
- `.zip` 压缩绿色版

区别:

- `.msi` 会添加注册表并自动添加windows服务，开机自动启动 mongodb
- `.zip` 程序绿色环保，但需要通过命令行启动

## 通过命令行启动 mongodb

启动 mongodb 前，需要先创建 mongodb 的启动配置文件

mongodb 的配置文件格式为 `yaml`，名称通常叫 `mongod.conf`

给配置文件添加内容如下:

```yml
# 网络配置
net:
   # 绑定ip
   bindIp: 0.0.0.0
   # 绑定所有可用ip
   bindIpAll: true
   # 数据库服务的端口号
   port: 27017
# 存储配置
storage:
   # 数据库保存路径
   dbPath: D:/xxx/xxx/db
# 系统日志
systemLog:
   # 目标格式
   destination: file
   # 日志存放路径
   path: "D:/xxx/xxx/log/mongod.log"
   # 追加日志
   logAppend: true
storage:
   journal:
      enabled: true
# 安全选项
security:
   # 是否开启权限校验
   authorization: disabled
```

关于配置文件的其他配置，可以查看此[详情](https://www.mongodb.com/docs/manual/reference/configuration-options/)

配置完成后，使用命令行启动数据库

```shell
mongod --config <配置文件路径>
# 或
mongod -f <配置文件路径>
```

## 添加用户并开启权限检测

### 添加用户

mongodb 默认没有用户，也不会校验数据库权限

为了安全起见，需要添加用户，例如: root权限用户、数据库管理员和普通用户

请使用 mongo shell 或 mongo compass 执行以下命令

```js
// 切换到管理员数据库
use admin
// 创建用户
db.createUser(
    user: 'root',
    pwd: 'xxxxxx',
    roles: [
        'root'
    ]
)
```

db.createUser[详情请见](https://www.mongodb.com/docs/manual/reference/method/db.createUser/)

创建用户的内置角色[详情请见](https://www.mongodb.com/docs/manual/reference/built-in-roles/#built-in-roles)

可以在 mongodb shell 中使用 `db.createUser.help()` 查看帮助信息，`createUser` 方法名替换成其他方法就能查看其他方法的帮助信息了

### 开启权限检测

在 `mongod.conf` 配置文件中添加如下配置

```yml
# 安全选项
security:
   # 是否开启权限校验
   authorization: enabled
```

开启权限后，若要操作数据库，需要在对应数据库下登录用户

```js
// 切换数据库到创建用户的数据库下
use admin
// 登录
db.auth('root', 'xxxxxx')
```

登录完后可以操作任意数据库的数据了，例如

```js
db.getCollection('stu').insert({name: '张三', sex: 'male'})
```