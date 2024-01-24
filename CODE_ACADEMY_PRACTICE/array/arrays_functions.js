
const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

const totalMass = characters.reduce((acc, cur) => {
return acc + cur.height;
}, 0)

console.log(totalMass)
/*const sum_array = (array_1) => {
    const array_1 = [10,20,30,40,40]
    array_1.reduce((acc, curr) => acc + curr);

}

console.log(sum_array()) */


const array1 =  [12,15,40,32,45,60]

const sumArray =  array1.reduce((acc, cur) =>{
 return acc + cur; // When the array is a map or dictionary is when u use cur.object name
}, 0)

console.log(sumArray);


const Sacar_Media = (cantidad, divisor) => {
    return cantidad.reduce((acc, cur) => {
        return acc + cur;
    },0) / divisor.length;
}

console.log(Sacar_Media(array1, array1))

const array_de_randoms = [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100)
  ];
  
  console.log(array_de_randoms);

  const suma_de_randoms = array_de_randoms.reduce((acc, cur) =>{
    return acc + cur;
  }, 0)

  console.log(suma_de_randoms)

  // lets find the lowest number of and array 
// donde dice or cambiar para menor < o mayor >
  let  iterArray = array => { 
    return array.reduce((max, cur) => (cur >/* or > */ max ? cur : max), 0)

  }
  console.log(iterArray(array1))

/* array.reduce((acc,cur) => {
    return acc + cur
},0) */

//   Flattened Array //
function flattenArrays(arrays) {
    return arrays.reduce((flattened, currentArray) => flattened.concat(currentArray), []);
  }
  
  // Example usage:
  const nestedArrays = [[1, 2], [3, 4], [5, 6]];
  const flattenedArray = flattenArrays(nestedArrays);
  console.log("Flattened Array:", flattenedArray);
  
  // Return array in reverse: 
const reverseArray = (arr) => {
    return arr.reverse()
}


console.log(array1)
// para buscar los pares :
function filtered_list(array) {
    return array.filter(arr => arr % 2 === 0) // === 1, para ver los pares
}

console.log(filtered_list(array1));


//  .map crea un array mutado segun la ecuacion dentro de su propio parametro
let  square_array = arr => {
    return arr.map((value) => value ** 2)
}

console.log(square_array(array1))


let concatArray = (array,array2) => {

    return array.concat(array2)
}

console.log(concatArray(array1,array_de_randoms,array1));



let sum_two_arrays = (array,array2) => {
    return array.concat(array2).reduce((acc,cur) => acc + cur,0)

}

let arry1 = [1,2,3]
let arry2 = [4,5,6]

console.log(sum_two_arrays(arry1,arry2))


