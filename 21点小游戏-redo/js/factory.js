// 扑克牌工厂
class CardFactory {
    #faces = ['♦', '♣', '♥', '♠']
    #map = {
        11: 'J',
        12: 'Q',
        13: 'K',
        14: 'A'
    }
    // 创建扑克牌
    create() {
        let result = []
        this.#faces.forEach((face, y) => {
            for (let x = 0; x < 13; x++) {
                // 创建一个代表当前卡牌的div元素
                let el = document.createElement('div')
                el.className = 'card'
                // 获取点数或字母
                let point = this.#map[x + 2] ? this.#map[x + 2] : x + 2
                result.push(new Card(point, face, el, { x, y }))
            }
        })
        return result
    }
}