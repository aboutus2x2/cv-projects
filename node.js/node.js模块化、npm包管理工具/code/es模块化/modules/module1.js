// export 导出
// 方法1: 定义并导出
export const sex = 'male'

export class Human {
}

export function fn() {
}

// 方法2: 先声明后导出
let name = '张三'
let age = 17

export {
    name,
    age
}


// 默认导出
// 一个模块只能使用一次 export default 默认导出
export default 'hello world'