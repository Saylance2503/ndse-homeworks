const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
    .command('current', 'Получить текущую дату и время в формате ISO', {
        year: {
            alias: 'y',
            describe: 'Получить текущий год',
            type: 'boolean',
        },
        month: {
            alias: 'm',
            describe: 'Получить текущий месяц',
            type: 'boolean',
        },
        date: {
            alias: 'd',
            describe: 'Получить текущую дату',
            type: 'boolean',
        },
    })
    .command('add', 'Добавить время к текущей дате и времени', {
        date: {
            alias: 'd',
            describe: 'Количество дней для добавления',
            type: 'number',
        },
        month: {
            alias: 'm',
            describe: 'Количество месяцев для добавления',
            type: 'number',
        },
    })
    .command('sub', 'Вычесть время из текущей даты и времени', {
        date: {
            alias: 'd',
            describe: 'Количество дней для вычитания',
            type: 'number',
        },
        month: {
            alias: 'm',
            describe: 'Количество месяцев для вычитания',
            type: 'number',
        },
    })
    .demandCommand(1, 'Вы должны указать команду')
    .help().argv;

const currentDate = new Date();

const executeCommand = () => {
    switch (argv._[0]) {
        case 'current':
            if (argv.year) {
                console.log(currentDate.getFullYear());
            } else if (argv.month) {
                console.log(currentDate.getMonth() + 1);
            } else if (argv.date) {
                console.log(currentDate.toISOString().split('T')[0]);
            } else {
                console.log(currentDate.toISOString());
            }
            break;
        case 'add':
            if (argv.date) {
                currentDate.setDate(currentDate.getDate() + argv.date);
            } else if (argv.month) {
                currentDate.setMonth(currentDate.getMonth() + argv.month);
            }
            console.log(currentDate.toISOString());
            break;
        case 'sub':
            if (argv.date) {
                currentDate.setDate(currentDate.getDate() - argv.date);
            } else if (argv.month) {
                currentDate.setMonth(currentDate.getMonth() - argv.month);
            }
            console.log(currentDate.toISOString());
            break;
        default:
            console.log('Неверная команда');
    }
};

executeCommand();
