<script setup>
// 知识点
// 表单验证
//      1. a-form 设置 rules
//      2. rules 中添加要验证的验证规则 rules 对象中属性请参考 https://www.antdv.com/components/form-cn#%E6%A0%A1%E9%AA%8C%E8%A7%84%E5%88%99
//      3. validator 自定义验证器的使用
//      4. form.validate 函数进行手动验证

import {reactive, ref} from 'vue'

const form = ref(null)

const model = reactive({
    name: '',
    age: 0
})

// 表单验证的规则
const rules = {
    // key: 要验证的字段名
    // value: 验证器数组(验证器其实就是函数，官方自带的验证器不需要我们写函数代码)

    name: [
        {
            // 必填
            required: true,
            // 必填时，是否允许空白，false 代表允许留空白
            whitespace: false,

            // 触发验证器验证的事件
            trigger: 'blur',
            // 验证失败的提示文本
            message: '请输入姓名'
        },
        // {
        //     len: 6,
        //     trigger: 'blur',
        //     message: '请输入长度为6的姓名'
        // },
        // {
        //     max: 10,
        //     min: 2,
        //     trigger: 'blur',
        //     message: '请输入长度为2~10的姓名'
        // },
        // {
        //     // 正则表达式
        //     pattern: /[A-Z]+/,
        //     trigger: 'blur',
        //     message: '姓名必须包含大写字母',
        //     // 转换器
        //     // 用于在验证前转换参数
        //     transform(value) {
        //         // value: 输入的验证参数
        //         console.log(value)
        //         // 需要返回转换后的值
        //         return value.toUpperCase()
        //     }
        // },
        // {
        //     // 验证输入框的类型
        //     type: 'email',
        //     trigger: 'blur',
        //     message: '姓名必须是邮件',
        // }
    ],
    age: [
        {
            // 自定义校验器
            validator: checkAge,
            trigger: 'blur'
        }
    ]
}

// 自定义校验器
// 用于验证年龄范围在 小于 10 或 大于 20 之间的范围
function checkAge(rule, value, callback) {
    // rule: 当前验证规则
    console.log(rule)
    // value: 要验证的参数值
    console.log(value)
    // callback(已弃用): 验证完后的回调，必须调用
    // if (value < 10 || value > 20) {
    //     // 不带参数代表验证通过
    //     callback()
    // } else {
    //     // 带参数时，请填入Error 对象 代表错误提示
    //     callback(new Error('年龄需要小于10或大于20'))
    // }

    // 返回一个promise对象来代表验证结果

    if (value < 10 || value > 20) {
        // 代表验证通过
        return Promise.resolve()
    } else {
        // 代表错误提示
        return Promise.reject(new Error('年龄需要小于10或大于20'))
    }
}

function onFinish(data) {
    console.log('finish')
    console.log(data)
}

function onSubmit(e) {
    console.log('submit')
    console.log(e)
}

function onFinishFailed({values, errorFields, outOfDate}) {
    console.log('failed')
    console.log(values)
    console.log(errorFields)
    console.log(outOfDate)
}

function submitHandler() {
    // 手动触发表单的校验
    form.value.validate().then((data) => {
        console.log('手动验证成功')
        console.log(data)
    }).catch(reason => {
        console.log('手动验证失败')
        console.log(reason)
    })
}
</script>

<template>
    <div>
        <a-card style="width: 400px">
            <!-- submit 事件是提交事件 和 finish 相比，参数不同且验证无论通过还是失败都会触发
             finishFailed: 表单验证失败的回调
             -->
            <a-form ref="form" @finish="onFinish" @submit="onSubmit" @finishFailed="onFinishFailed" :model="model"
                    :label-col="{span: 5}" :rules="rules">
                <a-form-item label="姓名" name="name">
                    <a-input v-model:value="model.name"></a-input>
                </a-form-item>
                <a-form-item label="年龄" name="age">
                    <a-input-number v-model:value.number="model.age"></a-input-number>
                </a-form-item>
                <a-form-item>
                    <a-button html-type="submit" block type="primary">提交</a-button>
                    <a-button block type="primary" @click="submitHandler">手动提交</a-button>
                </a-form-item>
            </a-form>
        </a-card>
    </div>
</template>

<style scoped>

</style>