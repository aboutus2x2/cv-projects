<template>
    <div>
        <EventChild></EventChild>
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

import EventChild from "@/components/EventChild";

export default {
    components: {
        EventChild
    },
    data() {
        return {
            name: '',
            firstName: '',
            lastName: ''
        };
    },
    methods: {}
};
</script>

<style scoped>

</style>