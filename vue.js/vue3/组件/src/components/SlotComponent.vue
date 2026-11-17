<template>
    <div>
        <h1>slot组件</h1>
        <div>head</div>
        <!-- 定义匿名插槽 -->
        <!--        <slot></slot>-->
        <div>body</div>
        <!-- 具名插槽 -->
        <slot name="niceName"></slot>
        <div>foot</div>
        <slot name="footer"></slot>
        <h2>作用域插槽</h2>
        <!-- 匿名作用域插槽 -->
        <slot :s="sex" :a="age"></slot>
        <slot name="namedScope" :s="sex" :a="age"></slot>
    </div>
</template>

<script>
export default {
    name: "SlotComponent",
    data() {
        return {
            sex: 'male',
            age: 17
        }
    },
    mounted() {
        // 所有的插槽的数据被存放到 $slots
        console.log(this.$slots)
    }
}
</script>

<style scoped>

</style>