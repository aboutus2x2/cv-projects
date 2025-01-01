// 庄家
class Host extends Party {
    // 扑克牌牌堆
    #desk

    // 玩家
    player

    constructor(handsEl, scoreEl) {
        super(handsEl, scoreEl)
    }

    // 开始游戏
    start(desk) {
        // 清空玩家和庄家的手牌
        this.reset()
        this.player.reset()

        this.#desk = desk
        // 洗牌
        this.#shuffle()
        this.#shuffle()
        this.#shuffle()
        this.#shuffle()
        this.#shuffle()

        console.log(this.#desk);

        // 发牌
        this.#drawToPlayer()
        this.#drawToHost()
        this.#drawToPlayer()
        this.#drawToHost(true)
    }

    // 抽牌
    #draw() {
        return this.#desk.shift()
    }

    // 抽牌给玩家
    #drawToPlayer() {
        this.player.getCard(this.#draw())
    }

    // 抽牌给庄家
    // turnBack: 表示是否背面朝上进行发牌
    #drawToHost(turnBack) {
        // 抽牌
        let card = this.#draw()
        // 判断是否背面朝上
        turnBack && card.turnBack()
        this.getCard(card)
    }

    // 洗牌
    #shuffle() {
        let temp = []
        while (this.#desk.length > 0) {
            // 随机索引
            let i = Math.floor(Math.random() * this.#desk.length)
            let r = this.#desk.splice(i, 1)
            temp.push(r[0])
        }
        // 重新赋值牌堆
        this.#desk = temp
    }
}