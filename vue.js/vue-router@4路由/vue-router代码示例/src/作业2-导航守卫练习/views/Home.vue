<script setup>
import {ref} from 'vue'
import {useRouter} from "vue-router";

const router = useRouter();

function signOut() {
    // 删除登录凭证
    localStorage.removeItem('token')
    // 跳转回登录页
    router.push('/signIn')
}
</script>

<template>
    <div>
        <h1>Home</h1>
        <div>
            <button @click="signOut">退出</button>
        </div>
    </div>
</template>

<script>
export default {
    beforeRouteEnter(to, from, next) {
        if (localStorage['token']) next()
        else {
            alert('组件守卫生效了')
            next('/signIn')
        }
    }
}
</script>

<style scoped>

</style>