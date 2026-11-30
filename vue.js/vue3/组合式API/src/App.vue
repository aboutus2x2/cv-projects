<template>
    <div>
<!--        <Basic></Basic>-->
        <ReactiveDataComponent></ReactiveDataComponent>
    </div>
</template>

<script>
import Basic from '@/components/组合式API的基础使用'
import ReactiveDataComponent from '@/components/响应式数据'

export default {
    name: 'App',
    components: {
        Basic,
        ReactiveDataComponent
    }
}
</script>

<style>
</style>
