<script setup>
// 知识点
// 基础表格的创建
//    1. 绑定 dataSource 和 columns 属性
//    2. 修改自定义 rowKey
// 自定义单元格
// checkbox 多行选择
// 分页表格

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

// 所选的内容
const selection = ref([])

// 多选按钮的配置项
// https://antdv.com/components/table-cn#rowSelection
const rowSelection = {
    // checkStrictly: false,

    // 当选择项发生变化时触发的事件
    onChange: (selectedRowKeys, selectedRows) => {
        console.log('onChange');
        console.log(selectedRowKeys); // 被选中的 key 列表
        console.log(selectedRows); // 被选中的行数据

        selection.value = selectedRowKeys
    },
    // 选择事件
    // onSelect: (record, selected, selectedRows) => {
    //   console.log('onSelect');
    //   // record 所选行的数据
    //   // selected 是否被选中
    //   // selectedRows 被选中的行
    //   console.log(record, selected, selectedRows);
    // },
    // 全选事件
    // onSelectAll: (selected, selectedRows, changeRows) => {
    //     console.log('onSelectAll');
    //     // selected 是否全选
    //     // selectedRows 全选的所有行数据
    //     // changeRows 选择变化的行数
    //     console.log(selected, selectedRows, changeRows);
    // },
}

function removeAll() {
    console.log(selection.value)
}

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

// 分页变化事件
function paginationChange(_pagination) {
    // _pagination 的数据结构和 pagination 一摸一样
    // _pagination: 变化后的分页数据
    // 需要将变化后的分页数据保存到当前分页数据中，这样页面才会更新
    pagination.value.current = _pagination.current
    pagination.value.pageSize = _pagination.pageSize
}
</script>

<template>
    <div>
        <h1>基本表格</h1>
        <!--
            data-source: 数据源
            columns: 列的配置
            row-key: 数据的唯一索引
        -->
        <a-table :data-source="tableData" :columns="columns" row-key="id"></a-table>

        <h1>自定义单元格</h1>
        <a-table :data-source="tableData" :columns="columns" row-key="id">
            <!-- headerCell 表头的具名作用域插槽 -->
            <template #headerCell="{title, column}">
                <!--
                    title: 表头的提示文本
                    column: 列的配置
                -->
                <template v-if="column.key === 'sex'">
                    <span style="color: #f00; font-weight: bolder;">{{ title }}</span>
                </template>
            </template>

            <!-- headerCell 表格体的具名作用域插槽 -->
            <template #bodyCell="{record, column}">
                <!--
                    record: 当前行的数据
                    column: 列的配置
                -->
                <template v-if="column.key === 'sex'">
                    <a-tag v-if="record.sex === 'female'" color="pink">女</a-tag>
                    <a-tag v-else-if="record.sex === 'male'" color="blue">男</a-tag>
                    <a-tag v-else color="purple">其他</a-tag>
                </template>

                <template v-if="column.key === 'op'">
                    <a-space>
                        <a-button size="small">编辑</a-button>
                        <a-button size="small" type="primary" danger>删除</a-button>
                    </a-space>
                </template>
            </template>
        </a-table>

        <h1>多行选择</h1>
        <a-button type="primary" danger @click="removeAll">批量删除</a-button>
        <!-- row-selection: 多行选择的配置对象 -->
        <a-table :row-selection="rowSelection" :data-source="tableData" :columns="columns" row-key="id"></a-table>

        <h1>分页表格</h1>
        <!-- pagination: 分页配置
            change事件: 分页发生变化事件
        -->
        <a-table :data-source="tableData" :columns="columns" row-key="id" :pagination="pagination"
                 @change="paginationChange"></a-table>
    </div>
</template>

<style scoped>

</style>