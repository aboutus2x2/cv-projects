## webpack

[官网](https://webpack.js.org/)

资源打包工具（还有类似工具：gulp grunt vite）

解决项目资源依赖的问题

#### 安装
```shell script
npm install --save-dev webpack

# 如果你使用 webpack 4+ 版本，你还需要安装 CLI
npm install --save-dev webpack-cli
```

#### 核心概念
- 入口（entry）
- 出口（output）
- loader
- 插件（plugins）
- 模式

#### 执行打包命令
```shell script
npx webpack

# 带配置文件的打包命令
npx webpack --config webpack.config.js

# 可以通过npm scripts来去掉npx的调用
```