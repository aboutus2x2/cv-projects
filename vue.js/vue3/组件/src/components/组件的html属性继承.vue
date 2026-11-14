<template>
    <div>
        <AttrComponent style="background-color: #000" id="666" class="ok"></AttrComponent>
    </div>
</template>

<script>
// 知识点：
// 什么是html属性继承？
// 应用场景
// 默认继承
// 指定节点继承
// this.$attrs
// $attrs 和 $props 的区别


// 什么是html属性继承？
// 组件继承html自带的属性，这个过程就是属性继承

// 应用场景
// 希望组件继承html属性的时候

// $attrs 和 $props 的区别
// $attrs 是html自带的属性被继承到了组件中
// $props 是组件的自定义属性

import AttrComponent from "@/components/AttrComponent";

export default {
    components: {
        AttrComponent
    },
    data() {
        return {};
    }
};
</script>

<style scoped>
</style>