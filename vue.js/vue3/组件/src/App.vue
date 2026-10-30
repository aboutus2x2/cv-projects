<template>
  <div>
    <!--    <global-component></global-component>-->
    <!--    <BasicComponent></BasicComponent>-->
<!--    <PropsComponent></PropsComponent>-->
    <WorkClock></WorkClock>
  </div>
</template>

<script>
// 引入组件
// @ 代表 src 文件夹
import BasicComponent from '@/components/组件基础.vue'
import PropsComponent from '@/components/组件props.vue'
import WorkClock from '@/components/作业-组件时钟'

export default {
  name: 'App',
  components: {
    BasicComponent,
    PropsComponent,
    WorkClock
  },
}
</script>

<style>
</style>
