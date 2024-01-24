let greet_user = () => {
    return console.log('hi pablo')
}

greet_user()


let square_calc = number => {
    return console.log(number ** 2);
}

square_calc(3);

let even_odd = (odd) => {
        return even = (odd % 2 === 0)? console.log('its event'):
    console.log('its odd');
}

even_odd(33)


let stringMixer = (stringA,stringB) => {
    return console.log(stringA.toString() + stringB.toString());
}
stringMixer('esto es un string','esto es otro string')

let areaRectangle = (side1,side2) => {
    return console.log(side1 * side2);
}

areaRectangle(34,50)


//find the middle of a random list 
function num_quantity(number) {
    return Math.floor(Math.random() * number);
}
let number_result = num_quantity

 function number_generator(number_result) {
    let the_numbers = [];
    for (let i = 0; i < number_result; i++) {
        return the_numbers.push(number_result); 
    }
}

console.log(number_generator())


