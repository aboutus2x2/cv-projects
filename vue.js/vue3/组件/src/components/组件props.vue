<template>
  <div>
    <!-- 组件被当作标签使用
      那么标签就有 html 属性可以定义
     -->
    <PropsChild
        :name="userInfo.name"
        :sex="userInfo.sex"
        :age="'16'"
        :checked="userInfo.checked"
    ></PropsChild>
  </div>
</template>

<script>

// 知识点：
// 什么是props？
// 应用场景
// 声明和访问props
// props 校验
// props 是只读的
// $props


// 什么是props？(properties 属性)
// props 指的是组件的 html 属性

// 应用场景
// 需要给组件传递参数的时候使用 props

import PropsChild from "@/components/PropsChild";

export default {
  components: {
    PropsChild
  },
  data() {
    return {
      userInfo: {
        name: '李四',
        sex: 'female',
        age: 24,
        checked: true,
        date: new Date()
      }
    };
  }
};
</script>

<style scoped>

</style>