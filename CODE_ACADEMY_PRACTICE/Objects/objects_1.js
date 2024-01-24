

const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: ['Blue', 'white', 'red']
  };

    for(let model in car){
    console.log(`select model: ${car.model} and now select color: ${car.color[2]}`)
}

const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
  };
let sum = 0
for(let value in numbers) {
     sum += numbers[value]

}
console.log(sum)


  const mixedData = {
    name: 'John',
    age: 25,
    city: 'New York',
    salary: 50000,
    isStudent: true
  };

  for (let value in mixedData){
    if (typeof mixedData[value] === 'number') {
        console.log(mixedData[value])
    }
  }

  const originalObject = {
    a: 5,
    b: 10,
    c: 'hello',
    d: 20
  };

  for (let value in originalObject){
    if (typeof originalObject[value] === 'number'){
       console.log(originalObject[value] * 2);
    }
  }

  const person = {
    name: 'Alice',
    age: 30,
    occupation: 'Engineer'
  };

  for (value in person) {

    console.log(person[value])

  }

  // merged objects
  const guy = {
  name: 'John',
  age: 25
};

const address = {
  city: 'New York',
  zip: '10001'
};

const mergedObject = { ...person, ...address };
console.log(mergedObject);


let counter = 0

while(counter < 5){
  console.log("this is the counter going up")
  counter ++;
}


  

// some object functions does not apply directly to objects, but theres workarrounds (.filter is for arryas)
const GPA_BENCHMARK = 3.5;
let students = {
  1: {
    name: 'Egill Vignission',
    gpa: 3.4
  },
  2: {
    name: 'Bianca Pargas',
    gpa: 3.8
  },
  3: {
    name: 'Aisling O\'Sullivan',
    gpa: 3.4
  },
  4: {
    name: 'Sameer Fares',
    gpa: 3.9
  }
}
let honorRoll = Object.values(students).filter(student => {
  return student.gpa >= GPA_BENCHMARK;
});
console.log(honorRoll);
