<template>
    <div>
        <h2>孙子</h2>
        <div>注入的参数: {{ message }}</div>
        <div>读取应用层Provide: {{ theme }}</div>
    </div>
</template>

<script>
export default {
    name: "GrandSon",
    inject: ['message', 'theme']
}
</script>

<style scoped>

</style>