<script setup>
import {ref} from 'vue'
import {message} from "ant-design-vue";

const visible = ref(true);
const loading = ref(false)

function showMessage() {
    message.success('成功')
    message.error('错误')
    message.warn('警告')
    message.info('信息')
    message.success({
        content: () => '使用工厂函数填入的消息文本',
        class: 'custom-class',
        style: {
            marginTop: '20vh',
        },
    });
}

function loadSkeleton() {
    loading.value = true
    setTimeout(() => {
        loading.value = false
    }, 3000)
}
</script>

<template>
    <div>
        <!--        <a-drawer
                    v-model:visible="visible"
                    style="color: red"
                    title="基本抽屉"
                    placement="bottom"
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </a-drawer>-->
        <a-button @click="showMessage">显示message</a-button>

        <a-progress :percent="30"/>
        <a-progress :percent="50" status="active"/>
        <a-progress :percent="70" status="exception"/>
        <a-progress :percent="100"/>
        <a-progress :percent="50" :show-info="false"/>


        <!--        <a-skeleton :loading="loading" :active="loading">
                    <div>hello 内容</div>
                </a-skeleton>-->
        <a-card v-if="!loading">
            <template #title>
                <a-avatar></a-avatar>
            </template>
            <template #extra>
                <a-space>
                    <a-button size="small">编辑</a-button>
                    <a-button size="small" danger>删除</a-button>
                </a-space>
            </template>

            这是卡片
        </a-card>
        <a-card v-else>
            <template #title>
                <a-skeleton-avatar :active="true"/>
            </template>
            <template #extra>
                <a-space>
                    <a-skeleton-button :active="true" size="small"/>
                    <a-skeleton-button :active="true" size="small"/>
                </a-space>
            </template>

            <a-skeleton-input :active="true"/>
        </a-card>
        <a-button @click="loadSkeleton">load</a-button>


        <div class="box">
            <a-spin tip="Loading...">
                <div style="height: 300px">hello spin</div>
            </a-spin>
        </div>
    </div>
</template>

<style scoped>
.custom-class {
    font-weight: bolder;
}
.box {
    width: 300px;
    height: 300px;
    border: 5px solid #000;
}
</style>