const fs = require('fs');

function flipCoin() {
    const randomValue = Math.floor(Math.random() * 3) + 1;
    if (randomValue === 1) {
        return 'Орёл';
    } else if (randomValue === 2) {
        return 'Решка';
    } else {
        return 'Ребро';
    }
}

function logResult(fileName, result) {
    const logEntry = {
        timestamp: new Date(),
        result,
    };

    fs.appendFileSync(fileName, JSON.stringify(logEntry) + '\n');
}

module.exports = { flipCoin, logResult };
