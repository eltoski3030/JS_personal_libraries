const promiseBuilder = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("I am resolved")
        }, 3000)
    })

}
promiseBuilder


// another promise example for setting callouts
const examplePromise = () => {
    return new Promise((resolve, reject) => {
      if (true) {
        setTimeout( () => resolve('success'), 3000);
      } else {
        setTimeout( () => resolve('failed'), 5000);
      }
    });
  };

 // USING .catch
const examplePromise1 = new Promise((resolve, reject) => { reject('Uh-oh!') });
const examplePromise2 = new Promise((resolve, reject) => { reject('Uh-oh!') });

const onFulfill = value => {console.log(value)};
const onReject = reason => {console.log(reason)};

const promise1 = examplePromise1.then(onFulfill, onReject);





function createPromise(){
  return new Promise((resolve,reject) =>{
      setTimeout(()=>{
          resolve(console.log('this promise is resolved'))
      },2000)
      
  })
}
createPromise().then((resolve)=>{console.log('createPromise accomplished')})





async function chainPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random() * 1;

      if (random <= 0.5) {
        resolve(random);
      } else {
        reject(new Error("Random value exceeds 0.5"));
      }
    }, 2000);
  })
    .then(async (random) => {
      const sum = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(random + 4);
        }, 1000);
      });

      return sum;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}

async function executeChain() {
  try {
    const result = await chainPromise();
    console.log("Result:", result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

executeChain();


