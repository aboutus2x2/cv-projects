<script setup>
// 定义事件
// 返回值是一个发出事件的函数



// 自定义v-model需要完成两步


const {
  firstName,
  lastName,
  modelValue
} = defineProps({
  firstName: {
    type: String,
    default() {
      return '';
    }
  },
  lastName: {
    type: String,
    default() {
      return '';
    }
  },
  modelValue: {
    type: String,
    default() {
      return '';
    }
  }
});

</script>

<template>
  <div>
    <input type="text" @input="onInput"><br>
    firstName <input type="text" :value="firstName" @input="ev=>{ emit('update:firstName', ev.target.value) }">
    lastName <input type="text" :value="lastName" @input="ev=>{emit('update:lastName', ev.target.value)}"><br>
    message: <input type="text" :value="modelValue" @input="ev=>{emit('update:modelValue', ev.target.value)}">
  </div>
</template>

<style scoped>

</style>