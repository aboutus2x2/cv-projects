class Party {
    hands = []
    #handsEl

    // 算分相关属性
    // A 的数量
    #ACount = 0
    // 除了A以外的分数和
    #score = 0
    #regex = /^[JQK]$/

    constructor(handsEl) {
        this.#handsEl = handsEl
    }

    // 重置手牌
    reset() {
        this.hands.splice(0, this.hands.length)
        this.#handsEl.innerHTML = ''
        this.#ACount = 0
        this.#score = 0
    }

    // 获取牌
    getCard(card) {
        this.hands.push(card)
        this.#handsEl.appendChild(card.el)
        // 播放音效
        new Audio('./audio/draw.wav').play()

        if (!card.front) return
        // 统计分数
        this.computeACard(card)
    }

    computeACard(card) {
        if (card.point === 'A') {
            this.#ACount++
        } else if (this.#regex.test(card.point)) {
            this.#score += 10
        } else {
            this.#score += card.point
        }
    }

    // 分数
    get score() {
        // 判断黑杰克
        if (this.#score === 10 && this.#ACount === 1) return 'Black Jack'
        // 判断不算A的时候是否已经大于21
        if (this.#score > 21) return `${this.#score} Bust`

        // 有多少A就循环多少次
        // A先当11，每次i--，就让一个A作1
        // 循环直到不大于21点为止
        let s
        for (let i = this.#ACount; i >= 0; i--) {
            s = (i * 11) + (this.#ACount - i) + this.#score
            if (s <= 21) return s
        }
        return `${s} Bust`
    }
}
