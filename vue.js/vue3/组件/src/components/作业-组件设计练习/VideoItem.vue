<template>
    <div class="item">
        <!-- 视屏图片 -->
        <div class="cover" :style="`background-color: ${backgroundColor}`"></div>
        <!-- 标题 -->
        <div class="title">
            {{ title }}
        </div>
        <!-- 作者 -->
        <div class="author">
            {{ author }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        backgroundColor: {
            type: String,
            default() {
                return '#000'
            }
        },
        title: String,
        author: String,
    }
}
</script>

<style scoped>
.item {
    width: 300px;
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-template-columns: 1fr;
    row-gap: 10px;
}

.cover {
    background-color: #f00;
    border-radius: 10px;
}

.cover:before {
    content: '';
    display: block;
    padding-top: 61.8%;
}

.title {
    font-size: 20px;
    font-weight: bolder;
}

.author {
    color: #d4c7bb;
    font-weight: bolder;
    /*font-size: 12px;*/
}
</style>