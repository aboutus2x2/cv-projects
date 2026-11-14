<template>
    <div>
        <div class="box">{{ count }}</div>
        <input type="text" :value="modelValue" @input="onInput">
        <div>
            firstName: <input type="text" :value="firstName" @input="onFirstNameInput">
            lastName: <input type="text" :value="lastName" @input="onLastNameInput">
        </div>
    </div>
</template>

<script>
// v-model 双向绑定包含属性绑定和事件绑定
// 所以要给自定义组件添加v-model，则自定义组件需要一个属性和一个事件
export default {
    name: "EventChild",
    // 使用 emits 定义事件
    // 自定义 v-model 的事件名，默认为 update:modelValue
    // 自定义 v-model 也可以添加自定义事件名 例如 update:firstName
    emits: [ 'click', 'perFive', 'update:modelValue', 'update:firstName', 'update:lastName'],
    // 自定义 v-model 的属性名，默认为 modelValue
    // 自定义 v-model 可以使用自定义名称 例如此处的 firstName
    props: ['modelValue', 'firstName', 'lastName'],
    data() {
        return {
            count: 0
        }
    },
    mounted() {
        this.start()
    },
    methods: {
        start() {
            setInterval(() => {
                this.count++
                if (this.count % 5 === 0) {
                    // 发出事件
                    // 第一个参数: 事件名称
                    // 第二个参数: 事件传递的参数
                    this.$emit('perFive', this.count)
                }
            }, 1000)
        },
        onInput(ev) {
            this.$emit('update:modelValue', ev.target.value)
        },
        onFirstNameInput(ev) {
            this.$emit('update:firstName', ev.target.value)
        },
        onLastNameInput(ev) {
            this.$emit('update:lastName', ev.target.value)
        }
    }
}
</script>

<style scoped>
.box {
    width: 100px;
    line-height: 100px;
    color: #fff;
    font-size: 64px;
    font-weight: bolder;
    background-color: #f00;
    text-align: center;
}
</style>