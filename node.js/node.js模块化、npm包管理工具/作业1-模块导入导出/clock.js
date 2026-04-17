import { Second } from "./second.js"
import { Minute } from "./minute.js"
import { Hour } from "./hour.js"

// 时钟
class Clock {
    #second
    #minute
    #hour
    #timer

    constructor() {
        this.#second = new Second();
        this.#minute = new Minute();
        this.#hour = new Hour();

        // 注册进位回调
        this.#second.setCallback(() => {
            this.#minute.run()
        })
        this.#minute.setCallback(() => {
            this.#hour.run()
        })
    }

    start() {
        this.#timer = setInterval(() => {
            this.#second.run()
            console.log(this.toString());
        }, 1000)
    }

    stop() {
        clearInterval(this.#timer)
    }

    setTime(h, m, s) {
        this.#hour.setTime(h)
        this.#minute.setTime(m)
        this.#second.setTime(s)
    }

    toString() {
        let h = this.#hour.time
        let m = this.#minute.time
        let s = this.#second.time
        return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`
    }
}

export default Clock