// 参与者
class Party {
    // 手牌
    hands = []
    // 手牌的容器元素
    #handsEl
    // 显示分数的元素
    #scoreEl

    // 计算分数所需的变量
    // 除了A外所有牌的分数和
    #score = 0
    // A的个数
    #ACount = 0

    constructor(handsEl, scoreEl) {
        this.#handsEl = handsEl
        this.#scoreEl = scoreEl
    }

    // 重置清空手牌
    reset() {
        // 清空手牌数据
        this.hands.splice(0, this.hands.length)
        // 清空手牌容器元素
        this.#handsEl.innerHTML = ''
        // 清空分数
        this.#scoreEl.innerHTML = 0
        this.#score = 0
        this.#ACount = 0
    }

    // 获取卡牌
    getCard(card) {
        // 加入手牌
        this.hands.push(card)
        // 插入页面进行显示
        this.#handsEl.appendChild(card.el)
        // 计分
        // 背面朝上的牌不需要计分
        if (!card.front) return

        if (card.point === 'A') {
            this.#ACount++
        } else {
            // 只要牌面点数是字符串，则一定是 JQK
            if (typeof card.point === 'string') this.#score += 10
            // 其余情况直接叠加分数
            else this.#score += card.point
        }

        this.setScore()
    }

    // 计算手牌分数
    setScore() {
        let r
        // 黑杰克
        if (this.#ACount === 1 && this.#score === 10) r = 'BlackJack'
        // 没有A
        else if (this.#ACount === 0) {
            r = this.#score <= 21 ? this.#score : `${this.#score} Bust`
        } else {
            let s
            for (let i = this.#ACount; i >= 0; i--) {
                // 尽可能多的让A充当11
                s = this.#score + i * 11 + (this.#ACount - i) * 1
                if (s <= 21) break;
            }
            // 判断是否超过21
            r = s <= 21 ? s : `${s} Bust`
        }

        // 显示结果到计分板上
        this.#scoreEl.textContent = r

        // 播放获得牌的音效
        new Audio('./audio/draw.wav').play()
    }

    // 获取玩家计分板
    getScore() {
        return this.#scoreEl.textContent
    }

    // 翻牌
    turnCardBack() {
        let card = this.hands[1]
        card.turnBack()
        if (card.point === 'A') {
            this.#ACount++
        } else {
            // 只要牌面点数是字符串，则一定是 JQK
            if (typeof card.point === 'string') this.#score += 10
            // 其余情况直接叠加分数
            else this.#score += card.point
        }
        this.setScore()
    }
}
