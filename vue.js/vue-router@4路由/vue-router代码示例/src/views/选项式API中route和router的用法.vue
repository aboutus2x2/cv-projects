<template>
    <div>

    </div>
</template>

<script>
import router from '@/router/选项式API中的route和router'

export default {
    data() {
        return {}
    },
    methods: {},
    mounted() {
        // route 对象
        // 当前的路由对象
        console.log(this.$route)

        // router 对象
        // 全局路由器对象
        console.log(this.$router)

        // this.$router 就是我们导出的 router 对象
        console.log(this.$router === router) // => true
    }
}
</script>

<style scoped>

</style>