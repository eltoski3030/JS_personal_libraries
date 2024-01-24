
// Caso que la promesa devuelve el valor que se le asigna 
const pracPro = () =>{
    return new Promise((resolve,reject)=> {
      let cond_number = 10
      setTimeout(()=>{
        if (cond_number < 20){
          resolve(cond_number)
        } else {
          reject('prac denied')
        }
      },2000)
    })
  }
  pracPro()
  .then((resultado) => {
    console.log('El número obtenido es:', resultado);
  })
  .catch((error) => {
    console.log('No funcionó. Razón:', error);
  });