const add = (num1, num2) => {
    return num1 + num2
}

const multiply = (num1, num2) => {
    return num1 * num2
}

module.exports = {
    name: "bensFunctions.js",
    desc: "These functions are cool",
    version: 1,
    multiply: multiply,
    add: add
}