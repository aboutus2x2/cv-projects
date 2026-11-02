<template>
    <div>
        <!--    <global-component></global-component>-->
        <!--    <BasicComponent></BasicComponent>-->
        <!--    <PropsComponent></PropsComponent>-->
<!--        <WorkClock></WorkClock>-->
        <EventComponent></EventComponent>
    </div>
</template>

<script>
// 引入组件
// @ 代表 src 文件夹
import BasicComponent from '@/components/组件基础.vue'
import PropsComponent from '@/components/组件props.vue'
import WorkClock from '@/components/作业-组件时钟/作业-组件时钟'
import EventComponent from '@/components/组件事件'

export default {
    name: 'App',
    components: {
        BasicComponent,
        PropsComponent,
        WorkClock,
        EventComponent
    },
}
</script>

<style>
</style>
