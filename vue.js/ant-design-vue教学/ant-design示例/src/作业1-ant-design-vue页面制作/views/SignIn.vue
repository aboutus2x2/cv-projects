<script setup>
import {reactive, ref} from 'vue'
import {useRouter} from "vue-router";
import {message} from "ant-design-vue";
import {useStore} from "vuex";

const router = useRouter();
const store = useStore();

const model = reactive({
    account: '',
    pwd: ''
})

function submit(data) {
    // 账号长度为6~10位
    if (data.account.length > 10 || data.account.length < 6) {
        message.error('请输入长度为6~10的账号')
        return
    }

    // 账号需要是字母或数字构成
    if (!(/[a-zA-Z]+/.test(data.account) && /[0-9]+/.test(data.account))) {
        message.error('账号需要包含字母和数字')
        return
    }

    // 通过 vuex 判断账号密码是否正确
    if (store.state.account !== data.account) {
        message.error('账号不存在')
        return
    }

    // 密码长度为6~10位
    if (data.pwd.length > 10 || data.pwd.length < 6) {
        message.error('请输入长度为6~10的密码')
        return
    }

    // 密码需要是下划线字母数字构成
    if (!(/[a-zA-Z]+/.test(data.pwd) && /[0-9]+/.test(data.pwd) && /_/.test(data.pwd))) {
        message.error('密码需要包含字母数字和下划线')
        return
    }

    if (store.state.pwd !== data.pwd) {
        message.error('密码错误')
        return
    }

    message.success('登录成功')
}
</script>

<template>
    <div>

        <a-page-header
            style="border: 1px solid rgb(235, 237, 240)"
            title="登录"
            sub-title="欢迎登录"
        />
        <a-row justify="center">
            <a-col>
                <a-card class="form">
                    <a-form @finish="submit" :model="model">
                        <a-form-item label="账号" name="account">
                            <a-input v-model:value.trim="model.account"></a-input>
                        </a-form-item>
                        <a-form-item label="密码" name="pwd">
                            <a-input type="password" v-model:value.trim="model.pwd"></a-input>
                        </a-form-item>
                        <a-form-item>
                            <a-button html-type="submit" type="primary" block>登录</a-button>
                        </a-form-item>
                        <a-form-item>
                            <a-button block @click="router.push('/signUp')">注册</a-button>
                        </a-form-item>
                    </a-form>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<style scoped>
.form {
    width: 400px;
    margin-top: 32px;
}

.ant-row.ant-form-item:last-child {
    margin-bottom: 0;
}
</style>