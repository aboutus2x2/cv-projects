<script setup>
// 知识点
// 使用a-form和a-form-item来创建表单
//      1. a-form 绑定 model 属性
//      2. a-form-item 设置 label 和 name
//      3. 使用 a-button 提交和重置表单

import {reactive, ref} from 'vue'

const userInfo = reactive({
    name: '张三',
    sex: 'other',
    age: 17,
    hobbies: ['dlq', 'tzq'],
    birthday: null,
    clazz: '',
    desc: '法外狂徒'
})

function onFinish(data) {
    // data: 表单提交的数据
    console.log(data)
    // a-date-picker 的值 是一个 moment 对象
    // moment.toDate() 转换成日期对象
    console.log(data.birthday?.toDate())
}
</script>

<template>
    <div>
        <!-- button input[radio checkbox datetime] textarea select -->

        <!-- a-form 表单
            model: 对应表单的数据对象，必填
        -->
        <a-card style="width: 500px; margin-top: 100px; margin-left: 100px;">
            <!-- finish事件: 表单提交且验证通过后的事件 -->
            <a-form @finish="onFinish" :model="userInfo" :label-col="{span: 4}">
                <!-- a-form-item 表单项
                 label: 提示文本
                 name: 对应model中的属性名
                 -->
                <a-form-item label="姓名" name="name">
                    <!-- ant design 中所有的表单元素都是用 v-model:value 来进行双向绑定 -->
                    <a-input v-model:value="userInfo.name"></a-input>
                </a-form-item>

                <a-form-item label="性别" name="sex">
                    <a-radio-group v-model:value="userInfo.sex">
                        <a-radio value="male">男</a-radio>
                        <a-radio value="female">女</a-radio>
                        <a-radio value="other">其他</a-radio>
                    </a-radio-group>
                </a-form-item>

                <a-form-item label="年龄" name="age">
                    <a-input-number v-model:value="userInfo.age"></a-input-number>
                </a-form-item>

                <a-form-item label="爱好" name="hobbies">
                    <a-checkbox-group v-model:value="userInfo.hobbies">
                        <a-checkbox value="dlq">打篮球</a-checkbox>
                        <a-checkbox value="tzq">踢足球</a-checkbox>
                        <a-checkbox value="ymq">羽毛球</a-checkbox>
                    </a-checkbox-group>
                </a-form-item>

                <a-form-item label="生日" name="birthday">
                    <!-- a-date-picker 的值 是一个 moment 对象
                        moment.toDate() 转换成日期对象
                     -->
                    <a-date-picker v-model:value="userInfo.birthday"></a-date-picker>
                </a-form-item>

                <a-form-item label="班级22233" name="clazz">
                    <a-select v-model:value="userInfo.clazz">
                        <a-select-option value="" disabled="">请选择</a-select-option>
                        <a-select-option value="1">一班</a-select-option>
                        <a-select-option value="2">二班</a-select-option>
                        <a-select-option value="3">三班</a-select-option>
                    </a-select>
                </a-form-item>

                <a-form-item label="简介" name="desc">
                    <a-textarea v-model:value="userInfo.desc" :maxlength="100" showCount :autoSize="{minRows: 2, maxRows: 5}"></a-textarea>
                </a-form-item>

                <!-- a-button 的 html-type: 按钮的表单中的职能，其中有两个值:
                    submit: 提交表单 submit 会触发 a-form 的 finish 事件
                    reset: 重置表单
                 -->
                <a-button html-type="submit" type="primary" block>提交</a-button>
            </a-form>
        </a-card>
    </div>
</template>

<style scoped>

</style>