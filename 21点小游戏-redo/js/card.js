// 扑克牌
class Card {
    // 点数
    point
    // 花色
    face
    // 扑克牌的dom页面元素
    el
    // 扑克牌是否正面朝上
    front
    // 背景图坐标
    // 一个对象，结构为 {x: 0, y: 0}
    #backgroundPosition

    constructor(point, face, el, backgroundPosition, front = true) {
        this.point = point
        this.face = face
        this.el = el
        this.#backgroundPosition = backgroundPosition
        this.front = front
        // 构造函数中立即设置其背景图坐标
        this.render()
    }

    // 翻面
    turnBack() {
        this.front = !this.front
        // 重渲染
        this.render()
    }

    // 渲染对应的牌面
    render() {
        // 赋值背景图的坐标
        // 其中要考虑当前图片是正面朝上还是背面朝上 来显示不同的图片
        this.el.style.backgroundPositionX = `calc(-1 * ${this.front ? this.#backgroundPosition.x : Card.backPosition.x} * (317px + 26px) * var(--rate))`
        this.el.style.backgroundPositionY = `calc(-1 * ${this.front ? this.#backgroundPosition.y : Card.backPosition.y} * (450px + 31px) * var(--rate))`
    }
}

// 使用静态属性设置一个卡背的坐标
Card.backPosition = { x: 13, y: 2 }