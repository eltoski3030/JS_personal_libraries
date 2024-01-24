/// Async Await 
    ///Async = make a function return a promise
    /// Await = makes an async function wait for the promise 
    const tiempo = 3;

    function pasearPerro() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (tiempo < 4) {
                    resolve(console.log('paseando al perro'));
                } else {
                    reject(console.log('no pasear al perro'));
                }
            }, 1000);
        });
    }
    
    function limpiar() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (tiempo >= 3) {
                    resolve(console.log('es hora de limpiar'));
                } else {
                    reject('es demasiado temprano para limpiar');
                }
            }, 2000);
        });
    }
    
    function irASleep() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (tiempo >= 3) {
                    resolve(console.log('ir a dormir'));
                } else {
                    reject(console.log('ver una película'));
                }
            }, 4000);
        });
    }
    
    /*pasearPerro()
        .then(() => limpiar())
        .then(() => irASleep())
        .then(() => console.log('listo por hoy'))
        .catch((error) => console.error(error)); */
    
let pass = 'PASS'
let reject = 'REJECT'
set_True = true
        function AsyncT1() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (set_True = true) {
                        resolve(console.log(pass));
                    } else {
                        reject(console.log(reject));
                    }
                }, 1000);
            });
        }
        
        function AsyncT2() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (set_True = true) {
                        resolve(console.log(pass));
                    } else {
                        reject(reject);
                    }
                }, 2000);
            });
        }
        
        function AsyncT3() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (set_True = true) {
                        resolve(console.log(pass));
                    } else {
                        reject(console.log(reject));
                    }
                }, 4000);
            });
        }

    async function AsyncT(){
        try {
        const AsyncT11 = await AsyncT1();
        
        const AsyncT22 = await AsyncT2();
        
        const AsyncT33 = await AsyncT3();

     } catch(error) {
        console.log('Something missing')
     }
    }
AsyncT()


