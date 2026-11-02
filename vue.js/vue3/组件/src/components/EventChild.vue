<template>
    <div class="box">{{ count }}</div>
</template>

<script>
export default {
    name: "EventChild",
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