<template>
    <div class="clock" :style="`border-color: ${borderColor};`">
        <span>
            <span class="hour">{{ hour < 10 ? '0' + hour : hour }}</span>:
            <span class="minute">{{ minute < 10 ? '0' + minute : minute }}</span>:
            <span class="second">{{ second < 10 ? '0' + second : second }}</span>
        </span>
        <button v-if="timer" class="btn" @click="pause">暂停</button>
        <button v-else class="btn" @click="resume">继续</button>
    </div>
</template>

<script>

// 页面中不显示的内容可以不用记录到响应式属性中
// let timer

export default {
    name: "Clock",
    props: {
        borderColor: {
            type: String,
            default() {
                return '#000'
            }
        },
        h: {
            type: Number,
            default() {
                return 0
            }
        },
        m: {
            type: Number,
            default() {
                return 0
            }
        },
        s: {
            type: Number,
            default() {
                return 0
            }
        },
    },
    data() {
        return {
            // 计时器id
            timer: undefined,
            // 用props初始化响应式属性
            hour: this.h,
            minute: this.m,
            second: this.s
        }
    },
    mounted() {
        // 测试时间是否被初始化成功
        console.log(this.hour)
        console.log(this.minute)
        console.log(this.second)
        // 挂载完后
        // 开始计时
        this.start()
    },
    methods: {
        // 开始计时
        start() {
            this.timer = setInterval(() => {
                // 进位逻辑
                this.second++
                if (this.second >= 60) {
                    this.second = 0
                    this.minute++
                    if (this.minute >= 60) {
                        this.minute = 0
                        this.hour++
                        if (this.hour >= 24) {
                            this.hour = 0
                        }
                    }
                }
            }, 1000)
        },
        // 暂停
        pause() {
            clearInterval(this.timer)
            this.timer = undefined
        },
        // 恢复
        resume() {
            this.start()
        }
    }
}
</script>

<style scoped>
.clock {
    display: inline-block;
    border: 5px solid #000;
    padding: 10px;
    border-radius: 10px;
}

.hour {
    color: #f00;
}

.minute {
    color: #0ff;
}

.second {
    color: #0f0;
}

.btn {
    margin-left: 8px;
}
</style>