// This function returns true 50% of the time.
let randomSuccess = () => {
    let num = Math.random();
    if (num < .5 ){
      return true;
    } else {
      return false;
    }
   };
   
   // This function returns a promise that resolves half of the time and rejects half of the time
   let cookBeanSouffle = () => {
    return new Promise((resolve, reject) => {
      console.log('Fingers crossed... Putting the Bean Souffle in the oven');
      setTimeout(()=>{
        let success = randomSuccess();
        if(success){
          resolve('Bean Souffle');
        } else {
          reject('Dinner is ruined!');
        }
      }, 1000);
    });
   };
   
   

// Write your code below:

async function hostDinnerParty(){
  try {
    console.log
    let dinner = await cookBeanSouffle();
     console.log(`${dinner} is served!`);
  }
  catch (error){
    console.log(error)
    console.log('Ordering a pizza!')
  }
}

async function alTogether () {
    try {
        let randomResult = await randomSuccess();
        let dinnerResult = await cookBeanSouffle(randomResult);
        let hostResult = await hostDinnerParty(dinnerResult);
        console.log(`These are random promises: ${randomResult}, ${dinnerResult}, ${hostResult}`);
      } catch (error) {
        console.error(error);
      }
}

alTogether()