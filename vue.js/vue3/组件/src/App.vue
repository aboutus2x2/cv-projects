<template>
    <div>
        <!--    <global-component></global-component>-->
        <!--    <BasicComponent></BasicComponent>-->
        <!--    <PropsComponent></PropsComponent>-->
        <!--        <WorkClock></WorkClock>-->
        <!--        <EventComponent></EventComponent>-->
        <!--        <Work2></Work2>-->
        <!--        <AttrExtendComponent></AttrExtendComponent>-->
        <!--        <SlotComponent></SlotComponent>-->
        <!--        <Work3></Work3>-->
        <DepInjectComponent></DepInjectComponent>
    </div>
</template>

<script>
// 引入组件
// @ 代表 src 文件夹
import BasicComponent from '@/components/组件基础.vue'
import PropsComponent from '@/components/组件props.vue'
import WorkClock from '@/components/作业-组件时钟/作业-组件时钟'
import EventComponent from '@/components/组件事件'
import Work2 from '@/components/作业-组件设计练习/Index'
import AttrExtendComponent from '@/components/组件的html属性继承'
import SlotComponent from '@/components/组件插槽'
import Work3 from '@/components/作业-组件综合练习/Father'
import DepInjectComponent from '@/components/依赖注入'

export default {
    name: 'App',
    components: {
        BasicComponent,
        PropsComponent,
        WorkClock,
        EventComponent,
        Work2,
        AttrExtendComponent,
        SlotComponent,
        Work3,
        DepInjectComponent
    },
}
</script>

<style>
</style>
