<template>
    <!-- 默认继承html属性是有前提条件的
      条件: 该组件只能有一个根节点
     -->
    <div class="box">1</div>
    <!-- 若有多个根节点 使用 v-bind="$attrs" 进行属性继承 -->
    <div v-bind="$attrs">2</div>
    <div>3</div>
</template>

<script>
export default {
    name: "AttrComponent",
    mounted() {
        // $attrs 是被继承的属性
        console.log(this.$attrs)
    }
}
</script>

<style scoped>
.box {
    width: 100px;
    height: 100px;
    background-color: #f00;
}
</style>