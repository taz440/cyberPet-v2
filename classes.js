
class Pet {
    constructor(type, name) {
        this.type = type
        this.name = name
    }

    hunger = 0
    thirst = 0
    play = 0
    age = 0

    feed () {
        this.hunger++
        this.thirst--
        this.play--
        this.age++
    }

    drink () {
        this.hunger--
        this.thirst++
        this.play--
        this.age++
    }

    game () {
        this.hunger--
        this.thirst--
        this.play++
        this.age++
    }
}

module.exports = {
    Pet
}