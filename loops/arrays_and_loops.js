

// create an array in a for loop
 

 for (let i = 1; i < 11; i++) {
     return i;
 } // bad way of using an array in a for loop 



 ///    THE GOOD WAY ///
const array_of_numbers = [];


 for(let value=1; value <= 40; value++){
    array_of_numbers.push(value);
 }

 console.log


 // Another way to iterate through a loop //

 const array_of_names = ['pablito', 'pedrito', 'juanito'];

const name_filter = names => {
    const filtered_names = [];
    for (let i = 0; i < names.length; i++) {
        if (names[i][0] === 'p') {
            filtered_names.push(names[i]);
        }
    }
    return filtered_names;
};

console.log(name_filter(array_of_names));
