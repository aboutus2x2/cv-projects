// 使用工厂函数返回一个配置对象
const path = require("path");
const common = require('./common.config')

module.exports = (env, param) => {
    return {
        // 生产环境配置
        mode: 'production',
        ...common
    }
}