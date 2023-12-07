const { playGame } = require('./game');

const logFileName = process.argv[2];

if (!logFileName) {
    console.error('Укажите имя файла для логирования результатов.');
    process.exit(1);
}

playGame(logFileName);
