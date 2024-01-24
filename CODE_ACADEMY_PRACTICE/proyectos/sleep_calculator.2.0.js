//
let dailySlept = Math.floor(Math.random() * 14);

let days = [];

for (let day = 0; day < 7; day++) {
    days.push(Math.floor(Math.random() * 14));
}

const average = (arr) => {
    weekly_hours = arr.reduce((a, b) => a + b, 0)
    daily_hours = arr.reduce((a, b) => a + b, 0) / arr.length;
    return `Hours slept from monday to sunday : ${days.join()}. This weak,you slept ${weekly_hours}`
};

console.log(days);
console.log(average(days,weekly_hours));
