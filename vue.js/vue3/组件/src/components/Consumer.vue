<template>
    <div>
        <h1>消费者</h1>
        <div>自己的message: {{ message }}</div>
        <div>info: {{ info }}</div>
        <!--        <div>注入的参数: {{ message.value }}</div>-->
        <div>注入的参数: {{ msg }}</div>
        <div>读取应用层Provide: {{ theme }}</div>
        <GrandSon></GrandSon>
    </div>
</template>

<script>
import GrandSon from "@/components/GrandSon";

export default {
    name: "Consumer",
    components: {GrandSon},
    // 声明消费者消费的属性
    // 1. 使用数组声明
    // inject: ['message'],
    // 2. 使用对象方式声明消费属性
    inject: {
        // key: 注入值的属性名
        msg: {
            // 当前msg的值 从哪一个注入的属性中读取
            from: 'message'
        },
        info: {
            form: 'info',
            // 声明默认值
            default() {
                return 'this is default info'
            }
        },
        theme: {
            // from 可以省略 省略时代表注入的数据名就叫 theme
        }
    },
    data() {
        return {
            message: 'my self message'
        }
    }
}
</script>

<style scoped>

</style>