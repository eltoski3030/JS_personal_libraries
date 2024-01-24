function callBacktest() {
console.log ('this is a callback practice')
}

setTimeout(callBacktest,2000)
console.log ('first call') 



const callVar = (num1, num2) => {
    const array = [3, 4, 5, 6];
    const new_array = array.join(' ');
    const sum = new_array.split(' ').reduce((a, b) => parseInt(a) + parseInt(b), 0); 
    const result = sum + num1 + num2;
    setTimeout(() => {
        console.log(result);
    }, 4000);
}

callVar(4, 6);


const justLog = () => {
    setTimeout(()=>{
        console.log('JUST LOG')
    },2000)
}

justLog()


