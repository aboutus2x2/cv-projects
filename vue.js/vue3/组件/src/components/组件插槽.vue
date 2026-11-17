<template>
    <div>
        <slot-component>

            <!-- 匿名插槽 -->
            <!-- 直接再标签体中写的内容会被插入到匿名插槽中 -->
            <!--            <div>
                            hello <span style="color: #f00">world</span>
                        </div>-->

            <!-- 具名插槽 -->
            <!-- v-slot 指令只能用在组件或template标签上 -->
            <template v-slot:niceName>
                <div style="width: 100px; height: 100px; background-color: #00f"></div>
            </template>

            <!-- v-slot 缩写为 # -->
            <template #footer>
                <div>这是脚</div>
            </template>


            <!-- 有一个特殊名字，叫做default的具名插槽 它代表向匿名插槽中 插入内容 -->
            <!--            <template #default>
                            <div>
                                hello <span style="color: #f00">world</span>
                            </div>
                        </template>-->


            <!-- 作用域插槽 -->
            <!-- 什么是作用域插槽? 子组件中希望暴露部分属性给父组件的插槽处使用，则需要使用作用域插槽
                在作用域插槽内可以访问被子组件暴露出来的属性
             -->
            <!-- 匿名作用域插槽
                slotScope 是作用域插槽暴露出来的属性对象
            -->
            <template v-slot="slotScope">
                <div>
                    <ul>
                        <li>性别: {{ slotScope.s }}</li>
                        <li>年龄: {{ slotScope.a }}</li>
                    </ul>
                </div>
            </template>



            <!-- 具名作用域插槽 -->
<!--            <template v-slot:namedScope="slotScope">
                <h3>具名作用域插槽</h3>
                <ul>
                    <li>性别: {{ slotScope.s }}</li>
                    <li>年龄: {{ slotScope.a }}</li>
                </ul>
            </template>-->

        </slot-component>
    </div>
</template>

<script>
// 知识点:
// 什么是插槽？
// 匿名插槽
// 插槽的默认值
// 具名插槽
// 作用域插槽
// this.$slots


// 什么是插槽？
// 插槽用来给组件的标签体定义内容

import SlotComponent from "@/components/SlotComponent";

export default {
    components: {
        SlotComponent
    },
    data() {
        return {};
    }
};
</script>

<style scoped>

</style>