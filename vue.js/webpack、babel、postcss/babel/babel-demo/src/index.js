class Car {
    name
    category

    constructor(name, category) {
        this.name = name
        this.category = category
    }

    shout() {
        console.log('baba')
    }

    message(msg) {
        console.log(`this is message: ${msg}`)
    }
}

let car = new Car('xiao che', 'TOYOTA')

car.shout()
car.message('xiao xi')

export default Car
