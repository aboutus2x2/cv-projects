<script setup>
// 知识点
// 国际化: https://antdv.com/docs/vue/i18n-cn
//      1. 在 App.vue 中，使用 a-config-provider 包裹我们的页面
//      2. 引入 zhCN: import zhCN from 'ant-design-vue/lib/locale/zh_CN'
//      3. 赋值 a-config-provider 的 locale 属性
// 日期相关组件 国际化问题
// 由于ant-design-vue的日期相关组件使用了 day.js 框架，所以国际化时需要单独处理
//      1. 安装 day.js: npm i dayjs
//      2. 在 main.js 引入国际化文件: import 'dayjs/locale/zh-cn'
//      3. 设置 dayjs 的全局语言: dayjs.locale('zh-cn')

import {ref} from 'vue'


// 声明表格数据
const tableData = ref([
    {
        id: 1,
        name: '张三',
        sex: 'male',
        clazz: '一班',
        info: {
            balance: 10
        }
    },
    {
        id: 2,
        name: '李四',
        sex: 'female',
        clazz: '二班',
        info: {
            balance: 20
        }
    },
    {
        id: 3,
        name: '老王',
        sex: 'other',
        clazz: '三班',
        info: {
            balance: 30
        }
    },
])

// 表格列的配置
// https://antdv.com/components/table-cn#Column
const columns = [
    // 每个数组成员代表一列的配置
    {
        // 这一列表头的名称
        title: '序号',
        // 每一列的key, columns 数组成员的唯一id
        key: 'id',
        // 数据索引，通过dataIndex查找tableData中对应的数据
        dataIndex: 'id'
    },
    {
        title: '姓名',
        key: 'name',
        dataIndex: 'name'
    },
    {
        title: '性别',
        key: 'sex',
        dataIndex: 'sex'
    },
    {
        title: '班级',
        key: 'clazz',
        dataIndex: 'clazz'
    },
    {
        title: '余额',
        key: 'balance',
        // dataIndex 使用数组来规定访问数据的路径
        dataIndex: ['info', 'balance']
    },
    {
        title: '操作',
        key: 'op',
    },
]

// https://www.antdv.com/components/table-cn#pagination
// 分页配置
const pagination = ref({
    position: ['bottomRight'], // 位置
    // 其余配置参考 pagination
    // https://www.antdv.com/components/pagination-cn/#API
    current: 1, // 当前页
    defaultPageSize: 2, // 默认每页显示多少条数据
    pageSize: 2, // 当前每页显示多少条数据
    pageSizeOptions: ['1', '2'], // 每页显示数据量的选项
    showQuickJumper: true, // 是否显示快捷跳转框
    showSizeChanger: true, // 是否显示每页显示数量的选项框
    total: tableData.value.length, // 总数据量
    showTotal: (total, range) => {
        // 显示总数据量
        console.log(total); // 总数据量
        console.log(range);
        return `共-- ${total} --条` // 返回的内容将显示到分页上
    }
});
</script>

<template>
    <div>
        <a-table :data-source="tableData" :columns="columns" row-key="id" :pagination="pagination"></a-table>
        <div>
            <a-date-picker></a-date-picker>
        </div>
    </div>
</template>

<style scoped>

</style>