<template>
    <div>
<!--        <Basic></Basic>-->
<!--        <ReactiveDataComponent></ReactiveDataComponent>-->
        <ComputedAttr></ComputedAttr>
    </div>
</template>

<script>
import Basic from '@/components/组合式API的基础使用'
import ReactiveDataComponent from '@/components/响应式数据'
import ComputedAttr from '@/components/计算属性'

export default {
    name: 'App',
    components: {
        Basic,
        ReactiveDataComponent,
        ComputedAttr
    }
}
</script>

<style>
</style>
