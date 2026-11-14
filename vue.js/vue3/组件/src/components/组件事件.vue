<template>
    <div>
        <div>姓名: {{ name }}</div>
        <div>firstName: {{ fn }}; lastName: {{ ln }}</div>
        <!-- 绑定事件 -->
        <!-- v-model后可以添加参数，例如 v-model:firstName 这个代表双向绑定一个 firstName 属性 -->
        <EventChild
            @per-five="receivePerFive"
            v-model="name"
            v-model:firstName="fn"
            v-model:last-name="ln"
        ></EventChild>
    </div>
</template>

<script>
// 知识点：
// 什么是组件事件？
// 应用场景
// 事件声明
// 事件触发
// 事件参数
// 实现组件的v-model
// vue2
// v-model 没有参数
// .native 将事件绑定给原生元素而不是组件


// 什么是组件事件？
// 由组件发出的事件就是组件事件

// 应用场景
// 子组件想要传递参数或汇报状态给父组件的时候，可以考虑使用组件事件

import EventChild from "@/components/EventChild";

export default {
    components: {
        EventChild
    },
    data() {
        return {
            name: '张三',
            fn: 'Bob',
            ln: 'Great'
        };
    },
    methods: {
        receivePerFive(count) {
            console.log('收到了 EventChild 的 perFive 事件')
            console.log(count)
        }
    }
};
</script>

<style scoped>

</style>