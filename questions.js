const initQs = [
    {
        type: "list",
        name: "petType",
        message: "What type of Pet would you like to choose?",
        choices: [
            "Dog",
            "Cat",
            "Rabbit",
            "Budgie",
            "Guinea Pig",
        ]
    },
    {
        type: "input",
        name: "petName",
        message: "What is your pets name?"
    }
]

module.exports = {
    initQs
}