<script setup>
import {ref, h} from 'vue'
import {DownOutlined, MailOutlined, SettingOutlined, AppstoreOutlined, QqOutlined} from "@ant-design/icons-vue";

const top = ref(300)
const openKeys = ref(['sub1'])
const selectedKeys = ref(['2'])
const current = ref(5)

function handleClick({ item, key, keyPath }) {
    console.log(item)
    console.log(key)
    console.log(keyPath)
}

function render({page, type, originalElement}){
    console.log('itemRender')
    console.log(page)
    console.log(type)
    console.log(originalElement)
    // return originalElement
    return h('div', { style: {backgroundColor: '#f00'} }, [
        originalElement
    ])
}
</script>

<template>
    <div style="height: 2000px">
        <a-affix :offset-top="top">
            <a-button type="primary" @click="top += 10">Affix top</a-button>
        </a-affix>

        <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
            <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
            <a-breadcrumb-item>An Application</a-breadcrumb-item>
        </a-breadcrumb>

        <a-dropdown :trigger="['click']">
            <a class="ant-dropdown-link" @click.prevent>
                下拉菜单
                <DownOutlined/>
            </a>
            <template #overlay>
                <a-menu>
                    <a-menu-item>
                        <a href="javascript:;">1st menu item</a>
                    </a-menu-item>
                    <a-menu-item>
                        <a href="javascript:;">2nd menu item</a>
                    </a-menu-item>
                    <a-menu-item>
                        <a href="javascript:;">3rd menu item</a>
                    </a-menu-item>
                </a-menu>
            </template>
        </a-dropdown>

        <a-menu
            v-model:openKeys="openKeys"
            v-model:selectedKeys="selectedKeys"
            style="width: 256px"
            mode="inline"
            @click="handleClick"
        >
<!--            <a-sub-menu key="sub1" @titleClick="titleClick">-->
            <a-sub-menu key="sub1">
                <template #icon>
                    <MailOutlined/>
                </template>
                <template #title>Navigation One</template>
                <a-menu-item-group key="g1">
                    <template #icon>
                        <QqOutlined/>
                    </template>
                    <template #title>Item 1</template>
                    <a-menu-item key="1" title="123">Option 1</a-menu-item>
                    <a-menu-item key="2">Option 2</a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group key="g2" title="Item 2">
                    <a-menu-item key="3">Option 3</a-menu-item>
                    <a-menu-item key="4">Option 4</a-menu-item>
                </a-menu-item-group>
            </a-sub-menu>
<!--            <a-sub-menu key="sub2" @titleClick="titleClick">-->
            <a-sub-menu key="sub2">
                <template #icon>
                    <AppstoreOutlined/>
                </template>
                <template #title>Navigation Two</template>
                <a-menu-item key="5">Option 5</a-menu-item>
                <a-menu-item key="6">Option 6</a-menu-item>
                <a-sub-menu key="sub3" title="Submenu">
                    <a-menu-item key="7">Option 7</a-menu-item>
                    <a-menu-item key="8">Option 8</a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
            <a-sub-menu key="sub4">
                <template #icon>
                    <SettingOutlined/>
                </template>
                <template #title>Navigation Three</template>
                <a-menu-item key="9">Option 9</a-menu-item>
                <a-menu-item key="10">Option 10</a-menu-item>
                <a-menu-item key="11">Option 11</a-menu-item>
                <a-menu-item key="12">Option 12</a-menu-item>
            </a-sub-menu>
        </a-menu>


        <a-page-header
            style="border: 1px solid rgb(235, 237, 240)"
            title="Title"
            sub-title="This is a subtitle"
            @back="() => null"
        />

<!--        <a-pagination v-model:current="current" :total="500" :item-render="render"/>-->
        <a-pagination v-model:current="current" :total="500">
            <template #itemRender="{page, type, originalElement}">
                <div>{{page}}</div>
                <div>{{type}}</div>
<!--                <div>{{originalElement.children}}</div>-->
            </template>
        </a-pagination>
    </div>
</template>

<style scoped>

</style>