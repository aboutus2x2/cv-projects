<template>
  <div>
    <!--    <global-component></global-component>-->
    <!--    <BasicComponent></BasicComponent>-->
    <PropsComponent></PropsComponent>
  </div>
</template>

<script>
// 引入组件
// @ 代表 src 文件夹
import BasicComponent from '@/components/组件基础.vue'
import PropsComponent from '@/components/组件props.vue'

export default {
  name: 'App',
  components: {
    BasicComponent,
    PropsComponent
  },
}
</script>

<style>
</style>
