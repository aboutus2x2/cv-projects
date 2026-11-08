<template>
    <div class="box">{{ count }}</div>
</template>

<script>
export default {
    name: "EventChild",
    // 使用 emits 定义事件
    emits: ['perFive'],
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