<script setup>
import {ref} from 'vue'
import {UserOutlined, ClockCircleOutlined} from "@ant-design/icons-vue";

const list = ref([
    {
        name: '张三',
        age: 17,
    },
    {
        name: '李四',
        age: 24,
    },
    {
        name: '老王',
        age: 30,
    },
])

const activeKey = ref('1')
const treeNodes = ref([
    {
        title: '1-1',
        key: '1-1'
    },
    {
        title: '1-2',
        key: '1-2',
        children: [
            {
                title: '2-1',
                key: '2-1',
                children: [
                    {
                        title: '3-1',
                        key: '3-1'
                    },
                    {
                        title: '3-2',
                        key: '3-2'
                    }
                ]
            },
            {
                title: '2-2',
                key: '2-2',
                disabled: true
            }
        ]
    }
])

const expandedKeys = ref(['1-2', '2-1'])
const selectedKeys = ref(['1-1', '3-1'])
const checkedKeys = ref(['1-1', '2-2', '3-1'])
</script>

<template>
    <div>
<!--        <a-avatar :size="100" shape="square">
            <template #icon>
                <UserOutlined/>
            </template>
        </a-avatar>-->

<!--        <a-badge>
            <template #count>
                &lt;!&ndash;                <clock-circle-outlined style="color: #f5222d" />&ndash;&gt;
                <div>123</div>
            </template>
            <a-avatar shape="square" size="large"/>
        </a-badge>-->

        <!--        <a-calendar>
                    <template #dateCellRender="{ current }">
                        <span style="color: #0f0">{{current}}</span>
                    </template>
                    <template #monthCellRender="{ current }">
                        <span style="color: #f00">{{current}}</span>
                    </template>
                </a-calendar>-->

<!--        <a-card style="width: 300px">
            <template #title>
                <span style="color: #f00;">Hello Title</span>
            </template>

            <template #extra>
                <a-button danger size="small">删除</a-button>
            </template>

            <template #actions>
                这是底部
            </template>

            hello content
        </a-card>-->

<!--        <a-descriptions title="个人信息" bordered>
            <a-descriptions-item label="姓名">张三</a-descriptions-item>
            <a-descriptions-item label="性别">女</a-descriptions-item>
        </a-descriptions>-->


        <!--a-image
            :width="200"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />-->

<!--        <a-list
            item-layout="horizontal"
            :data-source="list"
        >
            &lt;!&ndash;            <template #loadMore>
                            <a-button>加载更多</a-button>
                        </template>&ndash;&gt;
            <template #renderItem="{ item }">
                <a-list-item>
                    123

                    <template #actions>
                        <a-button>编辑</a-button>
                        <a-button danger>删除</a-button>
                    </template>

                    <a-list-item-meta
                        :description="`列表项的描述信息 name: ${item.name}`"
                    >
                        <template #title>
                            <a href="https://www.antdv.com/">{{ item.age }}</a>
                        </template>
                        <template #avatar>
                            <a-avatar/>
                        </template>
                    </a-list-item-meta>

                    &lt;!&ndash;                    <template #actions>
                                            <a key="list-loadmore-edit">edit</a>
                                            <a key="list-loadmore-more">more</a>
                                        </template>
                                        <a-skeleton avatar :title="false" :loading="!!item.loading" active>
                                            <a-list-item-meta
                                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                            >
                                                <template #title>
                                                    <a href="https://www.antdv.com/">{{ item.name.last }}</a>
                                                </template>
                                                <template #avatar>
                                                    <a-avatar :src="item.picture.large" />
                                                </template>
                                            </a-list-item-meta>
                                            <div>content</div>
                                        </a-skeleton>&ndash;&gt;
                </a-list-item>
            </template>
        </a-list>-->

<!--        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" tab="选项 1">111</a-tab-pane>
            <a-tab-pane key="2" tab="选项 2">222</a-tab-pane>
            <a-tab-pane key="3" tab="选项 3">333</a-tab-pane>
        </a-tabs>-->

        <!--        <a-tree
                    v-model:expandedKeys="expandedKeys"
                    v-model:selectedKeys="selectedKeys"
                    v-model:checkedKeys="checkedKeys"
                    checkable
                    :tree-data="treeData"
                >-->
        <a-tree
            v-model:expandedKeys="expandedKeys"
            v-model:selectedKeys="selectedKeys"
            v-model:checkedKeys="checkedKeys"
            checkable
            :tree-data="treeNodes"
        >
<!--            <template #title="{ title, key }">
                <span v-if="key === '0-0-1-0'" style="color: #1890ff">{{ title }}</span>
                <template v-else>{{ title }}</template>
            </template>-->
        </a-tree>
    </div>
</template>

<style scoped>

</style>