<script setup>
// 知识点：
// 定义props
// props 校验

import PropsChild from '@/components/PropsChild'
import {ref} from "vue";

const n = ref('张三')
const s = ref('male')
const a = ref(17)
</script>

<template>
    <div>
        <PropsChild :name="n" :sex="s" :age="a"></PropsChild>
    </div>
</template>

<style scoped>

</style>