<script setup>
import {ref} from 'vue'
import {useRouter} from "vue-router";

const router = useRouter();

const account = ref('')
const pwd = ref('')

function submit() {
    // 保存账号密码到localstorage
    localStorage['account'] = account.value
    localStorage['pwd'] = pwd.value
    // 跳转登录页
    router.push('/signIn')
}
</script>

<template>
    <div>
        <h1>注册</h1>
        <div>
            <div><label>账号: <input type="text" v-model.trim="account"></label></div>
            <div><label>密码: <input type="password" v-model.trim="pwd"></label></div>
            <div>
                <button @click="submit">注册</button>
                <button @click="router.push('/signIn')">登录</button>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>