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

        <h1>grid 栅格系统</h1>
        <!-- 一行被分为 24 份 -->
        <!-- 基础用法 使用 a-row 和 a-col 代表 行 列
            align: 用于规定一行内的单元格在垂直方向上的排列方式
            justify: 是flex的 justify-content 属性
         -->
        <a-row align="middle">
            <!-- span 代表单元格占多少份 -->
            <a-col class="cell" style="height: 50px" :span="8">1-1</a-col>
            <a-col class="cell" style="height: 20px" :span="8">1-2</a-col>
            <a-col class="cell" style="height: 80px" :span="8">1-3</a-col>
        </a-row>
        <!--justify: 是flex的 justify-content 属性-->
        <a-row justify="space-between">
            <a-col class="cell" style="width: 100px;">2-1</a-col>
            <a-col class="cell" style="width: 100px;">2-2</a-col>
            <a-col class="cell" style="width: 100px;">2-3</a-col>
        </a-row>
        <!-- flex 相当于 flex-grow -->
        <a-row>
            <a-col :span="8">3-1</a-col>
            <a-col :flex="1">3-2</a-col>
        </a-row>
        <!-- gutter 代表单元格占多少份 -->
        <a-row align="middle" :gutter="[20, { xs: 8, sm: 16, md: 24, lg: 32 }]">
            <a-col :span="8">
                <div class="cell">4-1</div>
            </a-col>
            <a-col :span="8">
                <div class="cell">4-2</div>
            </a-col>
            <a-col :span="8">
                <div class="cell">4-3</div>
            </a-col>

            <a-col :span="8">
                <div class="cell">5-1</div>
            </a-col>
            <a-col :span="8">
                <div class="cell">5-2</div>
            </a-col>
            <a-col :span="8">
                <div class="cell">5-3</div>
            </a-col>
        </a-row>
        <!-- offset 代表偏移 -->
        <a-row>
            <a-col :span="6">6-1</a-col>
            <a-col :span="6" :offset="6">6-2</a-col>
        </a-row>

        <!-- 单元格的响应式布局 -->
        <a-row>
            <a-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 8}">7-1</a-col>
            <a-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 8, offset: 8}">7-2</a-col>
        </a-row>

        <!-- push: 向右移动
            pull: 向左移动 -->
        <a-row>
            <a-col :span="12" :push="6" class="cell">8-1</a-col>
            <a-col :span="4" :pull="0" class="cell" style="background-color:#d53737;">8-2</a-col>
        </a-row>

        <!-- 栅格系统本质是使用的 flex -->


        <h1>space间距</h1>
        <!-- direction: 方向 -->
        <!-- size: 间距 -->
        <!-- align: 排列方式 -->
        <a-space style="height: 100px; border: 4px solid #000;" direction="horizontal" :size="50" align="center">
            <a-button type="primary">btn1</a-button>
            <a-button danger>btn2</a-button>
            <a-button>btn3</a-button>
        </a-space>
    </div>
</template>

<style scoped>
/*.ant-divider:before {
    border-top-style: dashed;
}*/

.cell {
    background-color: #8282fb
}
</style>