<template>
    <div>
        <!-- 添加路由视口
            路由视口决定了页面显示的位置，最终页面显示的组件将替换掉路由视口
         -->
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'App',
    components: {}
}
</script>

<style>
</style>
