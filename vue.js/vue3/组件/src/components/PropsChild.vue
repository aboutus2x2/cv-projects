<template>
  <div>
    <ul>
      <!-- props 属性被当作普通的响应式属性来进行访问 -->
      <li>姓名: {{ name }}</li>
      <li>性别: {{ sex }}</li>
      <li>年龄: {{ age }}</li>
      <li>checked: {{ checked }}</li>
      <li>date: {{ date.toLocaleString() }}</li>
    </ul>

    <button @click="changeName">修改姓名</button>
    <button @click="showProps">显示 $props</button>
  </div>
</template>

<script>
export default {
  name: "PropsChild",
  // 使用 props 声明属性

  // 使用数组定义props
  // props: ['name', 'sex'],

  // props 校验
  props: {
    // 校验类型
    name: String,
    sex: String,
    // 更详细的属性校验
    age: {
      // 校验类型
      // type: Number
      // 支持多个类型
      type: [Number, String]
    },
    checked: {
      // 必填
      required: true,
      type: Boolean
    },
    date: {
      type: Date,
      // 默认值
      // default: new Date(1997, 6, 1)
      // 使用工厂函数定义默认值
      default() {
        return new Date(1997, 6, 1)
      }
    }
  },
  methods: {
    changeName() {
      console.log(this.name)
      // 组件的props是只读属性 不能直接修改
      this.name = '老王'
    },
    showProps() {
      // $props 是组件 props 的真实数据 保存在这里，
      // this.name 等价于 this.$props.name
      console.log(this.$props)
    }
  }
}
</script>

<style scoped>

</style>