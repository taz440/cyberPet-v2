const inquirer = require("inquirer")

const { initQs } = require("./questions")

const { Pet } = require("./classes")

let pet

const init =() => {
    inquirer
        .prompt(initQs)
        .then((answers) => {
            pet = new Pet(answers.petType, answers.petName)
        })
        .then(() => gameLoop())
}

const gameLoop = () => {
    if (pet.age == 10) {
        console.log(`${pet.name} the ${pet.type} died in their sleep of old age`)
        return
    }
    else if (pet.hunger == -5 && pet.thirst == -5) {
        console.log(`${pet.name} the ${pet.type} died of hunger and thirst. You are a bad ${pet.type} parent!`)
        return
    }
    else if (pet.hunger == -5 && pet.play == -5) {
        console.log(`${pet.name} the ${pet.type} died of hunger and boredom. You are a bad ${pet.type} parent!`)
        return
    }
    else if (pet.thirst == -5 && pet.play == -5) {
        console.log(`${pet.name} the ${pet.type} died of thirst and boredom. You are a bad ${pet.type} parent!`)
        return
    }
    else if (pet.hunger == -5) {
        console.log(`${pet.name} the ${pet.type} died of hunger`)
        return
    }
    else if (pet.thirst == -5) {
        console.log(`${pet.name} the ${pet.type} died of thirst`)
        return
    }
    else if (pet.play == -5) {
        console.log(`${pet.name} the ${pet.type} died of boredom`)
        return
    }
    else if (pet.hunger == -4 && pet.thirst == -4 ) {
        console.log(`${pet.name} the ${pet.type} says "I'm sooooooooooo hungry and thirsty :("`);
    }
    else if (pet.hunger == -4 && pet.play == -4 ) {
        console.log(`${pet.name} the ${pet.type} says "I'm sooooooooooo hungry and bored :("`);
    }else if (pet.thirst == -4 && pet.play == -4 ) {
        console.log(`${pet.name} the ${pet.type} says "I'm sooooooooooo thirsty and bored :("`);
    }
    else if (pet.hunger == -1 || pet.hunger == -2) {
        console.log(`${pet.name} the ${pet.type} says "I'm hungry"`);
    }
    else if (pet.hunger == -3 || pet.hunger == -4) {
        console.log(`${pet.name} the ${pet.type} says "I'm really hungry"`);
    }
    else if (pet.thirst == -1 || pet.thirst == -2) {
        console.log(`${pet.name} the ${pet.type} says "I'm thirsty"`);
    }
    else if (pet.thirst == -3 || pet.thirst == -4) {
        console.log(`${pet.name} the ${pet.type} says "I'm really thirsty"`);
    }
    else if (pet.play == -1 || pet.play == -2) {
        console.log(`${pet.name} the ${pet.type} says "I'm bored"`);
    }
    else if (pet.play == -3 || pet.play == -4) {
        console.log(`${pet.name} the ${pet.type} says "I'm really bored"`);
    }
    else if (pet.hunger == 1 || pet.hunger == 2) {
        console.log(`${pet.name} the ${pet.type} says "I'm not hungry"`);
    }
    else if (pet.hunger == 3 || pet.hunger == 4) {
        console.log(`${pet.name} the ${pet.type} says "I'm really not hungry"`);
    }
    else if (pet.thirst == 1 || pet.thirst == 2) {
        console.log(`${pet.name} the ${pet.type} says "I'm not thirsty"`);
    }
    else if (pet.thirst == 3 || pet.thirst == 4) {
        console.log(`${pet.name} the ${pet.type} says "I'm really not thirsty"`);
    }
    else if (pet.play == 1 || pet.play == 2) {
        console.log(`${pet.name} the ${pet.type} says "I'm tired"`);
    }
    else if (pet.play == 3 || pet.play == 4) {
        console.log(`${pet.name} the ${pet.type} says "I'm really tired"`);
    }
    else if (pet.hunger == 5) {
        console.log(`${pet.name} the ${pet.type} died from over eating. Bad ${pet.type} parent!`);
    }
    else if (pet.thirst == 5) {
        console.log(`${pet.name} the ${pet.type} died from over drinking. Bad ${pet.type} parent!`);
    }
    else if (pet.play == 5) {
        console.log(`${pet.name} the ${pet.type} died of exhaustion, you played the poor thing to death!`);
    }
    else {
        //console.log(`What would you like to do next?`);
    }

    inquirer
        .prompt([
            {
                type: "rawlist",
                name: "action",
                message: "What would you like to do?",
                choices: ["Feed", "Give Water", "Play"],
            },
        ])
        .then((answers) => {
            if (answers.action === "Feed") {
                pet.feed()
            }
            else if (answers.action === "Give Water") {
                pet.drink()
            }
            else if (answers.action === "Play") {
                pet.game()
            }

        console.table(pet)
    })
    .then(() => gameLoop())
}

init ()