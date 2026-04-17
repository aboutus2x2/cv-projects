// 指针
class Pointer {
    // 代表指针时间的数字
    time
    // 进制
    #jz
    // 进位后的回调
    #forwardCallback

    constructor(jz, time = 0) {
        this.#jz = jz
        this.time = time
    }

    setTime(t) {
        this.time = t
    }

    // 运行
    run() {
        this.time++
        if (this.time >= this.#jz) {
            // 进位
            this.time = 0
            // 进位成功之后 调用回调函数
            typeof this.#forwardCallback === 'function' && this.#forwardCallback()
        }
    }

    setCallback(callback) {
        this.#forwardCallback = callback
    }
}

export default Pointer