
const stringCreator = (str) => {
    return str.toString()
}
let arr1 = ['a','el3l',5,6,3,2]
console.log(stringCreator(arr1))



const arr2 = []
arr2.push([3, arr1, 2])
console.log(arr2.toString())

console.log(Array.prototype.toString.call({ join: () => 1 }));
// 1; a number
console.log(Array.prototype.toString.call({ join: () => undefined }));
// undefined
console.log(Array.prototype.toString.call({ join: "not function" }));
// "[object Object]"