class Card {
    // 点数
    point
    // 花色
    face
    el
    front
    // 背景图坐标
    #backgroundPosition

    constructor(point, face, el, backgroundPosition, front = true) {
        this.point = point
        this.face = face
        this.el = el
        this.#backgroundPosition = backgroundPosition
        this.front = front
        this.render()
    }

    // 牌翻面
    turnBack() {
        this.front = !this.front
        this.render()
    }

    render() {
        this.el.style.backgroundPositionX = `calc(-1 * (${this.front ? this.#backgroundPosition.x : Card.backPosition.x} * (317px + 26px) * var(--rate)))`
        this.el.style.backgroundPositionY = `calc(-1 * (${this.front ? this.#backgroundPosition.y : Card.backPosition.y} * (450px + 31px) * var(--rate)))`
    }
}

// 背面图坐标
Card.backPosition = { x: 13, y: 2 }