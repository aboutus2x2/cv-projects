<template>
    <div>
        <!-- 使用 component 标签定义动态组件 -->
        <!-- 通过is属性赋值一个要显示的组件 -->
        <!--        <component :is="component"></component>-->


        <!-- 使用 keep-alive 包裹 component 用于保留动态组件的状态 -->
        <keep-alive>
            <component :is="component"></component>
        </keep-alive>

        <div>
            <button @click="toD1">d1</button>
            <button @click="toD2">d2</button>
        </div>
    </div>
</template>

<script>
// 知识点：
// 什么是动态组件？
// 应用场景
// 声明动态组件
// shallowRef
//    引入同步组件
//    引入异步组件
// KeepAlive


// 什么是动态组件？
// 通过变量赋值的方式可以动态修改某个组件，这个能被动态修改的组件就是动态组件

// 应用场景
// 动态组件多用于一个页面中的多个选项卡的切换

// 动态组件不会保留组件的状态，所以切换组件后，组件状态就消失了
// 若想要保留组件状态，那么可以使用 keep-alive 组件

import DComponent1 from "@/components/DComponent1";
import DComponent2 from "@/components/DComponent2";
import {shallowRef} from "vue";

// 动态组件需要切换的组件，应该使用 shallowRef 进行包裹
// 添加 shallowRef 是为了让浏览器的性能开销更小，否则会收到一个性能开销过大的警告
const D1 = shallowRef(DComponent1)
const D2 = shallowRef(DComponent2)

export default {
    components: {
        DComponent1: D1,
        DComponent2: D2
    },
    data() {
        return {
            // 声明一个便来来代表当前显示哪个动态组件
            // component: DComponent2
            component: D1
        };
    },
    methods: {
        toD1() {
            // 通过给响应式属性 component 赋值对应的组件来进行组件切换
            // this.component = DComponent1
            this.component = D1
        },
        toD2() {
            // this.component = DComponent2
            this.component = D2
        }
    }
};
</script>

<style scoped>

</style>