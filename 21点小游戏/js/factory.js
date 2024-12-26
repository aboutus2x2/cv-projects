class PockerFactory {
    #faces = ['♦', '♣', '♥', '♠']
    #map = {
        11: 'J',
        12: 'Q',
        13: 'K',
        14: 'A',
    }
    create() {
        let cards = []
        this.#faces.forEach((face, y) => {
            for (let x = 0; x < 13; x++) {
                // 创建元素
                let div = document.createElement('div')
                div.className = 'card'
                let position = { x, y }
                cards.push(new Card((x + 2) in this.#map ? this.#map[x + 2] : x + 2, face, div, position))
            }
        })
        return cards
    }
}