<script setup>
import {ref} from 'vue'

// 侧边栏是否关着
const isClose = ref(true)
</script>

<template>
    <div>
        <h1>分割线</h1>
        <a-divider>With Text</a-divider>
        <a-divider orientation="left">With Text</a-divider>
        <a-divider orientation="right">With Text</a-divider>
        <div>a
            <a-divider type="vertical"></a-divider>
            b
            <a-divider type="vertical"></a-divider>
            c
        </div>
        <!-- 自定义边框样式 -->
        <a-divider style="border-color: #f00;" dashed>style</a-divider>
        <a-divider style="border-color: #f00;" orientation="left" :orientationMargin="100" plain>style</a-divider>


        <h1>layout 布局组件</h1>

        <!-- a-layout 充当父节点 -->
        <a-layout>
            <a-layout-header>
                header
                <a-button @click="isClose = !isClose">展开/折叠</a-button>
            </a-layout-header>
            <a-layout-content>
                <!-- 可以嵌套 -->
                <a-layout>
                    <!-- collapsible: 可折叠
                        :trigger="null" 关闭自带的收折按钮
                     -->
                    <a-layout-sider :trigger="null" collapsible v-model:collapsed="isClose">
                        sider
                    </a-layout-sider>
                    <a-layout-content>
                        content
                    </a-layout-content>
                </a-layout>
            </a-layout-content>
            <a-layout-footer>
                footer
            </a-layout-footer>
        </a-layout>
    </div>
</template>

<style scoped>
/*.ant-divider:before {
    border-top-style: dashed;
}*/
</style>