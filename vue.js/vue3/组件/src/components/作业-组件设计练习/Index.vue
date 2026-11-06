<template>
    <div class="container">
        <VideoItem title="一个视屏教会你格洛克的正确使用方式" author="不会沙鹰的钰宝"></VideoItem>
        <VideoItem title="2" author="2"></VideoItem>
        <VideoItem title="3" author="3"></VideoItem>
        <VideoItem title="4" author="4"></VideoItem>
        <VideoItem title="5" author="5"></VideoItem>
        <VideoItem title="6" author="6"></VideoItem>
    </div>
</template>

<script>
import VideoItem from "@/components/作业-组件设计练习/VideoItem";

export default {
    components: {
        VideoItem
    }
}
</script>

<style scoped>
/* 2 x 3 */
.container {
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-template-columns: repeat(3, auto);
    row-gap: 24px;
}
</style>