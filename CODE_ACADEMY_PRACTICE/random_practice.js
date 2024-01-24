// Classes and promises
/* class Car {
    constructor(color, motor, name) {
        this._name = name;
        this._motor = motor;
        this._color = color;
    }
}

let type_of_car = () => {
    return new Promise((resolve) => {
        console.log('Selecting your car...');
        setTimeout(() => {
            let carPrice = Math.floor(Math.random() * 10000);

            if (carPrice < 5000) {
                resolve(new Car('red', 'v4', 'Cadillac'));
            } else if (carPrice >= 5000 && carPrice <= 8000) {
                resolve(new Car('blue', 'v6', 'Subaru'));
            } else {
                resolve('Your budget is too high');
            }
        }, 5000);
    });
}

type_of_car().then(result => console.log(result)); */



// Inheritance 

class weapon{
    constructor (type,damage,tier){
        this._type = type;
        this.damage = damage;
        this.tier = tier;
    }
}

const katana = new weapon('sword',1500,'B')

console.log(katana)