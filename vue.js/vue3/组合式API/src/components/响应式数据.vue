<script setup>
// 知识点：
// ref 将数据转换成响应式数据
//      解包: ref 通过 .value 来访问，此过程叫解包
//      自动解包: ref属性不需要通过 .value 来访问值，这种情况就是自动解包
//      若 ref 内的数据是对象类型 ref 内会自动通过 reactive 进行响应式转换
//      若 ref 中嵌套 ref 那么嵌套的 ref 将自动解包
//      shallowRef 不会自动解包的 ref
// reactive 将对象类型中所有属性深层次的转换成响应式属性
//      reactive 中嵌套的 ref 会自动解包
//      注意 reactive 数组成员若是一个 ref 对象，则访问它时不会自动解包
//      shallowReactive 不会自动解包的 reactive
// 只读属性
// toRefs


// 总结
// ref: 几乎所有的响应式属性都能通过 ref 来声明，对象和数组也可以用ref声明，那么对象内的属性和数组成员都是响应式的
// reactive: 数组或对象数据 需要其所有的 对象属性 或 数组成员都是 响应式的 则可以考虑使用 reactive


// ref

// reactive

</script>

<template>
    <div>
    </div>
</template>

<style scoped>

</style>
