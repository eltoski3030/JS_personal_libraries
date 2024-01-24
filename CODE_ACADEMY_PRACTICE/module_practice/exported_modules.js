
// Module to give an array of random numbers


function give_numbers(count) {
    const numbersArray = [];

    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * 100);
        numbersArray.push(randomNumber);
    }

    return numbersArray;
}

// Call the function with the desired count

class NumberAssigner {
    constructor(name, count) {
        this._name = name;
        this.average = function () {
            let numbersForAverage = give_numbers(count);
            return numbersForAverage.reduce((a, b) => a + b, 0) / numbersForAverage.length;
        };
    }
}

const num1 = new NumberAssigner('pablo', 5);
console.log(num1.average());

module.exports = {
    give_numbers,
    NumberAssigner
};