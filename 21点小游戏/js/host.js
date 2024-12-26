class Host extends Party {
    player

    #desk

    constructor(handsEl) {
        super(handsEl)
    }

    // 开始新牌局
    start(desk) {
        // 获取新牌
        this.#desk = desk

        // 清理手牌
        this.reset()
        this.player.reset()

        // 洗牌
        for (let i = 0; i < 5; i++) {
            this.shuffle()
        }
        console.log(this.#desk)

        this.drawToPlayer()
        this.drawToHost()
        this.drawToPlayer()
        this.drawToHost(true)
    }

    shuffle() {
        let temp = []
        while (this.#desk.length > 0) {
            let i = Math.floor(Math.random() * this.#desk.length)
            temp.push(this.#desk.splice(i, 1)[0])
        }
        this.#desk = temp
    }

    // 抽牌
    #draw() {
        return this.#desk.shift()
    }

    // 发牌给庄家
    drawToHost(turnBack) {
        let card = this.#draw()
        if (turnBack) card.turnBack()
        this.getCard(card)
    }

    // 发牌给玩家
    drawToPlayer() {
        this.player.getCard(this.#draw())
    }

    // 玩家停牌
    // 庄家开始抽牌
    // startDraw(showScoreCallback) {
    //     this.hands[1].turnBack()
    //     showScoreCallback()
    //     do {
    //         this.drawToHost()
    //     } while (showScoreCallback())
    //     console.log('host 停牌')
    // }

    async startDraw(showScoreCallback) {
        await this.#animate(() => {
            this.hands[1].turnBack()
            this.computeACard(this.hands[1])
            showScoreCallback()
            new Audio('./audio/draw.wav').play()
        })

        do {
            await this.#animate(this.drawToHost.bind(this))
        } while (showScoreCallback())
        console.log('host 停牌')
    }

    #animate(callback) {
        return new Promise((resolve) => {
            setTimeout(() => {
                callback()
                resolve()
            }, 1000)
        })
    }
}
