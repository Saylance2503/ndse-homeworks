const readline = require("readline");
const rLine = readline.createInterface(process.stdin, process.stdout);

function randomNumber(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const num = randomNumber(1, 100);

function checkGuess(input) {
    if (Number(input) === num) {
        console.log(`Отгадано число ${num}`);
        rLine.close();
    } else if (Number(input) > num) {
        console.log("меньше");
    } else {
        console.log("больше");
    }
    rLine.prompt();
}

rLine.on("line", checkGuess);

rLine.setPrompt("Загадано число в диапазоне от 1 до 100 ");
rLine.prompt();
