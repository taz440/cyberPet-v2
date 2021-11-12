// INQUIRER
const inquirer = require("inquirer")

const { initQs } = require("./questions")

const { Pet } = require("./classes")

let pet

const init = () => {
    inquirer
        .prompt(initQs)
        .then((answers) => {
            pet = new Pet(answers.petType, answers.petName)
            // if (answers.petType === "Platypus") {
            //     console.log("A platypus??")
            // }

            // if (answers.petName === "Perry") {
            //     console.log("Ahhhhhhh Perry the Platypus")
            // }
        })
        .then(() => gameLoop())
}

const gameLoop = () => {
    if (pet.health < 0) {
        console.log("Your pet died")
        return
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
            } else if (answers.action === "Play") {
                console.log("Playing...")
            } else {
                console.log("Drinking...")
            }

            console.table(pet)
        })
        .then(() => gameLoop())

}

init()

