<script setup>
import {computed, reactive, ref} from 'vue'
import {useStore} from "vuex";
import {message} from "ant-design-vue";

const store = useStore()

const addTitle = '添加数据'
const editTitle = '编辑数据'

const form = ref(null)
const visible = ref(false)
const formData = reactive({
    id: 0,
    name: '',
    sex: 'other',
    score: 0,
    clazz: ''
});
// 多选项
const selection = ref([])
// 标题
const title = ref(addTitle)

// 列配置
const columns = [
    {
        title: 'id',
        key: 'id',
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
        title: '分数',
        key: 'score',
        dataIndex: 'score'
    },
    {
        title: '班级',
        key: 'clazz',
        dataIndex: 'clazz'
    },
    {
        title: '操作',
        key: 'op'
    }
]

// 表单验证
const rules = {
    name: [
        {
            required: true,
            trigger: 'blur',
            message: '请输入姓名'
        },
        {
            min: 2,
            max: 10,
            trigger: 'blur',
            message: '请输入2~10个字的姓名'
        },
    ],
    score: [
        {
            validator: (_, value) => {
                if (value < 0) {
                    return Promise.reject(new Error('请输入不小于0的数'))
                }
                return Promise.resolve()
            },
            trigger: 'blur',
        }
    ],
    clazz: [
        {
            required: true,
            trigger: 'blur',
            message: '请选择班级'
        },
    ]
}

// 分页配置
const pagination = ref({
    position: ['bottomCenter'], // 位置
    current: 1, // 当前页
    defaultPageSize: 2, // 默认每页显示多少条数据
    pageSize: 2, // 当前每页显示多少条数据
    pageSizeOptions: ['1', '2', '3'], // 每页显示数据量的选项
    showQuickJumper: true, // 是否显示快捷跳转框
    showSizeChanger: true, // 是否显示每页显示数量的选项框
    total: computed(() => store.getters['students/total']), // 总数据量
    showTotal: (total) => {
        return `共 ${total} 条`
    }
})

// 多选checkbox
const rowSelection = {
    onChange(selectedKeys) {
        selection.value = selectedKeys
    }
}

// 对话框的确定事件
function handleOk() {

    // 判断是编辑还是新增
    if (formData.id === 0) {
        // 新增
        // 通过js来验证表单
        form.value.validate().then(data => {
            console.log('success')
            console.log(data)
            store.dispatch('students/add', data)
            message.success('添加成功')
            closeForm()
        }).catch(reason => {
            console.log('error')
            console.log(reason)
        })
    } else {
        // 编辑数据
        form.value.validate().then(data => {
            console.log('success')
            console.log(data)
            store.dispatch('students/update', data)
            message.success('编辑成功')
            closeForm()
        }).catch(reason => {
            console.log('error')
            console.log(reason)
        })
    }
}

// 开启编辑表单
async function openEditForm(id) {
    title.value = editTitle
    // 回显数据
    const data = await store.dispatch('students/getById', id)
    console.log(data)
    Object.assign(formData, data)
    visible.value = true
}

// 打开添加数据的表单
function openAddForm() {
    title.value = addTitle
    visible.value = true
}

// 关闭表单
function closeForm() {
    form.value.resetFields()
    visible.value = false
}

// 删除一条数据
function removeOne(id) {
    console.log(id)
    store.dispatch('students/remove', [id])
    message.success('删除成功')
}

// 批量删除
function removeAll() {
    store.dispatch('students/remove', selection.value)
    selection.value = []
    message.success('删除成功')
}

// 当分页发生变化事件
function onTableChange(_pagination) {
    pagination.value.current = _pagination.current
    pagination.value.pageSize = _pagination.pageSize
}
</script>

<template>
    <div>
        <a-layout>
            <!-- 工具栏 -->
            <a-layout-header>
                <a-space>
                    <a-button type="primary" @click="openAddForm">+</a-button>
                    <a-popconfirm
                        title="确认删除吗?"
                        @confirm="removeAll"
                    >
                        <a-button type="primary" danger>批量删除</a-button>
                    </a-popconfirm>
                </a-space>
            </a-layout-header>
            <a-layout-content>
                <a-row>
                    <a-col :span="24">
                        <a-table :data-source="store.state.students.data" :columns="columns" row-key="id"
                                 :row-selection="rowSelection" :pagination="pagination" @change="onTableChange">
                            <template #headerCell="{column}">
                                <b>{{ column.title }}</b>
                            </template>

                            <template #bodyCell="{record, column}">
                                <template v-if="column.key === 'sex'">
                                    {{
                                        record.sex === 'male' ? '男' :
                                            record.sex === 'female' ? '女' : '其他'
                                    }}
                                </template>

                                <template v-if="column.key === 'op'">
                                    <a-space>
                                        <a-button size="small" @click="openEditForm(record.id)">编辑</a-button>
                                        <a-popconfirm
                                            title="确认删除吗?"
                                            @confirm="removeOne(record.id)"
                                        >
                                            <a-button size="small" type="primary" danger>删除</a-button>
                                        </a-popconfirm>

                                    </a-space>
                                </template>
                            </template>
                        </a-table>
                    </a-col>
                </a-row>
            </a-layout-content>
        </a-layout>

        <!-- 表单对话框 -->
        <!--
            visible: 代表是否可见
         -->
        <a-modal v-model:visible="visible" :title="title" @ok="handleOk" @cancel="closeForm">
            <a-form ref="form" :model="formData" :label-col="{span: 3}" :rules="rules">
                <a-form-item v-if="formData.id !== 0" label="id" name="id">
                    <a-input readonly v-model:value="formData.id"></a-input>
                </a-form-item>
                <a-form-item label="姓名" name="name">
                    <a-input v-model:value="formData.name"></a-input>
                </a-form-item>
                <a-form-item label="性别" name="sex">
                    <a-radio-group v-model:value="formData.sex">
                        <a-radio value="male">男</a-radio>
                        <a-radio value="female">女</a-radio>
                        <a-radio value="other">其他</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item label="分数" name="score">
                    <a-input-number v-model:value="formData.score"></a-input-number>
                </a-form-item>
                <a-form-item label="班级" name="clazz">
                    <a-select v-model:value="formData.clazz">
                        <a-select-option value="" disabled="">请选择</a-select-option>
                        <a-select-option value="1">一班</a-select-option>
                        <a-select-option value="2">二班</a-select-option>
                        <a-select-option value="3">三班</a-select-option>
                    </a-select>
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>

<style scoped>
.ant-modal-body .ant-form .ant-row:last-child {
    margin-bottom: 0;
}
</style>