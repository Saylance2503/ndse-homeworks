const fs = require('fs');
const { flipCoin, logResult } = require('./coin');

function playGame(logFileName) {
    const userInput = require('readline-sync');
    const options = ['Орёл', 'Решка', 'Ребро'];

    while (true) {
        const userGuess = userInput.keyInSelect(options, 'Угадайте, что выпадет: орёл, решка или ребро ');

        if (userGuess === -1) {
            console.log('Игра завершена.');
            process.exit(0);
        }

        const result = flipCoin();
        console.log(`Выпало: ${result}`);

        if (userGuess === options.indexOf(result)) {
            console.log('Вы угадали!');
        } else {
            console.log('Вы не угадали.');
        }

        logResult(logFileName, result);

        const playAgain = userInput.keyInYNStrict('Хотите сыграть ещё раз?');
        if (!playAgain) {
            console.log('Игра завершена.');
            process.exit(0);
        }
    }
}

module.exports = { playGame };
