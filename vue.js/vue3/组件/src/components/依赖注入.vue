<template>
    <div>
        <input type="text" v-model="message">
        <Consumer></Consumer>
    </div>
</template>

<script>
// 知识点：
// 什么是依赖注入？
// 应用场景
// 声明供应商
// 声明消费者
// 消费者别名
// 消费者默认值
// 响应式注入
//    由于响应式注入的是一个 computed 计算属性
//    所以响应式属性使用 .value 取值 否则取出来的值会带有引号
//    自动解包配置 app.config.unwrapInjectedRef = true;
// 应用层 Provide
//    应用层 Provide 需要定义在 main.js 中


// 什么是依赖注入？
// 依赖注入就是，一个先辈组件提供一些属性，这样的后辈组件都可以读取该属性的值


// 应用场景
// i18n 国际化
// 多套页面主题
// 其他所有需要传值给后辈组件的场景


// 什么是应用层 Provide
// 应用层 Provide 就是全局供应的数据，在任意组件中都可以使用 inject 获取值


import Consumer from "@/components/Consumer";
// 引入一个创建计算属性的函数
import {computed} from 'vue'

export default {
    components: {
        Consumer
    },
    data() {
        return {
            message: 'hello world'
        };
    },
    // 声明供应商提供的参数
    // 1. 直接声明对象值
    // provide: {
    //     message: 'this is message'
    // },
    // 2. 使用工厂函数来定义值
    provide() {
        // 返回要供应的参数
        // 工厂函数内可以使用 this 关键来构造供应的数据
        return {
            // 这种写法会导致注入的 message 不是响应式的
            // message: this.message
            // 使用 computed 获取一个计算属性
            // 这样一来 当 this.message 发生变化时，则 计算属性会重新计算新的值
            message: computed(() => this.message)
        }
    },
};
</script>

<style scoped>

</style>