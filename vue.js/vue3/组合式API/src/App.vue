<template>
    <div>
        <!--        <Basic></Basic>-->
        <!--        <ReactiveDataComponent></ReactiveDataComponent>-->
        <!--        <ComputedAttr></ComputedAttr>-->
        <!--        <Work1></Work1>-->
        <!--        <LifeCircle></LifeCircle>-->
        <!--        <WatchComponent></WatchComponent>-->
        <!--        <RefComponent></RefComponent>-->
        <!--        <PropsComponent></PropsComponent>-->
        <!--        <Work2></Work2>-->
        <!--        <EventComponent></EventComponent>-->
        <!--        <InjectComponent></InjectComponent>-->
<!--        <NextTick></NextTick>-->
<!--        <Work3></Work3>-->
        <Work4></Work4>
    </div>
</template>

<script>
import Basic from '@/components/组合式API的基础使用'
import ReactiveDataComponent from '@/components/响应式数据'
import ComputedAttr from '@/components/计算属性'
import Work1 from '@/components/作业-计算属性练习/Index'
import LifeCircle from '@/components/生命周期'
import WatchComponent from '@/components/监听器'
import RefComponent from '@/components/ref'
import PropsComponent from '@/components/组件props'
import Work2 from '@/components/作业-多表单控制/Index'
import EventComponent from '@/components/组件事件'
import InjectComponent from '@/components/依赖注入'
import NextTick from '@/components/nextTick'
import Work3 from '@/components/作业5-监听器和计算属性/Index'
import Work4 from '@/components/作业7-页面切换与状态保留/Index'

export default {
    name: 'App',
    components: {
        Basic,
        ReactiveDataComponent,
        ComputedAttr,
        Work1,
        LifeCircle,
        WatchComponent,
        RefComponent,
        PropsComponent,
        Work2,
        EventComponent,
        InjectComponent,
        NextTick,
        Work3,
        Work4
    }
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
}
</style>
