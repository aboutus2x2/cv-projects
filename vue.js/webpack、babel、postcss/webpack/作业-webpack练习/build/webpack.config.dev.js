// 使用工厂函数返回一个配置对象
const path = require("path");
const common = require('./common.config')

module.exports = (env, param) => {
    // env: 环境变量
    // param: 打包环境的一些参数 包括 环境变量 env 模式 mode 配置路径 config
    console.log(env)
    console.log(param)
    return {
        mode: 'development',
        // 开发服务器
        devServer: {
            // 静态资源文件夹
            static: {
                directory: path.resolve(__dirname, '../dist')
            }
        },
        ...common
    }
}