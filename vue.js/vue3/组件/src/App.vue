<template>
  <div>
    <global-component></global-component>
    <BasicComponent></BasicComponent>
  </div>
</template>

<script>
// 引入组件
// @ 代表 src 文件夹
import BasicComponent from '@/components/组件基础.vue'

export default {
  name: 'App',
  components: {
    BasicComponent
  },
}
</script>

<style>
</style>
