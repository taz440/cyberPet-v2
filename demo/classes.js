class Pet {
    constructor(type, name) {
        this.type = type
        this.name = name
    }

    hunger = 0
    thirst = 0
    health = 5

    feed () {
        this.hunger++
        this.health--
    }
}

module.exports = {
    Pet
}