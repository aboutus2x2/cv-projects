<script setup>

import {ref} from "vue";

const count = ref(0)


// 定义事件
// 返回值是一个发出事件的函数
const emit = defineEmits(['perFive', 'update:modelValue', 'update:firstName', 'update:lastName'])

// 计时
// 每5秒发出一个事件
setInterval(() => {
    count.value++
    if (count.value % 5 === 0) {
        // 发出事件
        emit('perFive', count.value)
    }
}, 1000)


// 自定义v-model


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
        <div>count: {{ count }}</div>
        firstName <input type="text" :value="firstName" @input="emit('update:firstName', $event.target.value)"/>
        lastName <input type="text" :value="lastName" @input="emit('update:lastName', $event.target.value)"/><br>
        message: <input type="text" :value="modelValue" @input="emit('update:modelValue', $event.target.value)"/>
    </div>
</template>

<style scoped>

</style>