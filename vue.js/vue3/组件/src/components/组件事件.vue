<template>
    <div>
        <div>姓名: {{ name }}</div>
        <!-- 绑定事件 -->
        <EventChild
            @per-five="receivePerFive"
            v-model="name"
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
// .native


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
            firstName: '',
            lastName: ''
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