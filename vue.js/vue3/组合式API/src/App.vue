<template>
    <div>
        <!--        <Basic></Basic>-->
        <!--        <ReactiveDataComponent></ReactiveDataComponent>-->
        <!--        <ComputedAttr></ComputedAttr>-->
        <!--        <Work1></Work1>-->
<!--        <LifeCircle></LifeCircle>-->
        <WatchComponent></WatchComponent>
    </div>
</template>

<script>
import Basic from '@/components/组合式API的基础使用'
import ReactiveDataComponent from '@/components/响应式数据'
import ComputedAttr from '@/components/计算属性'
import Work1 from '@/components/作业-计算属性练习/Index'
import LifeCircle from '@/components/生命周期'
import WatchComponent from '@/components/监听器'

export default {
    name: 'App',
    components: {
        Basic,
        ReactiveDataComponent,
        ComputedAttr,
        Work1,
        LifeCircle,
        WatchComponent
    }
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
}
</style>
