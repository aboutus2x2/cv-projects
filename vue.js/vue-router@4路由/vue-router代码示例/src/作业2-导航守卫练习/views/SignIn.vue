<script setup>
import {ref} from 'vue'
import {useRouter} from "vue-router";

const router = useRouter();

const account = ref('')
const pwd = ref('')

function submit() {
    // 验证账号是否存在
    if (account.value !== localStorage['account']) {
        alert('账号不存在')
        return
    }
    // 密码验证
    if (pwd.value !== localStorage['pwd']) {
        alert('密码错误')
        return
    }

    // 登录
    // 保存登录状态
    // 发放登录凭证
    localStorage['token'] = true

    // 跳转页面到首页
    router.push('/home').then(() => {
        alert('登录成功')
    })
}
</script>

<template>
    <div>
        <h1>登录</h1>
        <div>
            <div><label>账号: <input type="text" v-model.trim="account"></label></div>
            <div><label>密码: <input type="password" v-model.trim="pwd"></label></div>
            <div>
                <button @click="submit">登录</button>
                <button @click="router.push('/signUp')">注册</button>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>