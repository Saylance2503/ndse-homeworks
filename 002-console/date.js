const { argv } = require("yargs");
const { _: commands, d, date, m, month, y, year } = argv;
const newDate = new Date();
const command = commands.toString();

let params, period;

if (year || y) {
    period = "year";
    params = year || y;
} else if (month || m) {
    period = "month";
    params = month || m;
} else if (date || d) {
    period = "date";
    params = date || d;
}

const getResultCurrentCommand = () => {
    const modelObj = {
        year: () => newDate.getFullYear(),
        month: () => newDate.getMonth(),
        date: () => newDate.getDate(),
    };
    return modelObj[period]() || newDate;
};

const getCommandAdd = (add) => {
    const modelObj = {
        year: () => newDate.getFullYear() + add,
        month: () => newDate.getMonth() + add,
        date: () => newDate.getDate() + add,
    };
    return modelObj[period]() || newDate;
};

const getCommandSub = (sub) => {
    const modelObj = {
        year: () => newDate.getFullYear() - sub,
        month: () => newDate.getMonth() - sub,
        date: () => newDate.getDate() - sub,
    };
    return modelObj[period]() || newDate;
};