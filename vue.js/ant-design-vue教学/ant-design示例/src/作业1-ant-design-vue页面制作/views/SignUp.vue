<script setup>
import {reactive, ref} from 'vue'
import {useRouter} from "vue-router";
import {message} from "ant-design-vue";
import {useStore} from "vuex";

const router = useRouter();
const store = useStore();

const model = reactive({
    account: 'abc123',
    pwd: '_123abc',
    twice: '_123abc'
})

function submit(data) {
    console.log(data)
    // 验证参数

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

    // 密码需要二次验证
    if (data.pwd !== data.twice) {
        message.error('第二次输入的密码于第一次不等')
        return
    }

    // 保存到vuex
    // store.commit('mAccount', data.account)
    delete data.twice
    store.dispatch('addAccount', data)
    router.push('/').then(() => {
        message.success('注册成功')
    })
}
</script>

<template>
    <div>

        <a-page-header
            style="border: 1px solid rgb(235, 237, 240)"
            title="注册"
            sub-title="欢迎注册"
            @back="() => {router.back()}"
        />
        <a-row justify="center">
            <a-col>
                <a-card class="form">
                    <a-form @finish="submit" :model="model" :label-col="{span: 5}">
                        <a-form-item label="账号" name="account">
                            <a-input v-model:value.trim="model.account"></a-input>
                        </a-form-item>
                        <a-form-item label="密码" name="pwd">
                            <a-input type="password" v-model:value.trim="model.pwd"></a-input>
                        </a-form-item>
                        <a-form-item label="确认密码" name="twice">
                            <a-input type="password" v-model:value.trim="model.twice"></a-input>
                        </a-form-item>
                        <a-form-item>
                            <a-button html-type="submit" type="primary" block>注册</a-button>
                        </a-form-item>
                        <a-form-item>
                            <a-button block @click="router.push('/')">登录</a-button>
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