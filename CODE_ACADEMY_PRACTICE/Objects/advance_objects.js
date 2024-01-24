// Using .this
const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet() {
      console.log(this.dietType);
    }
  };
  goat.diet(); 

  const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() { // take note. SOMETIMES!!!! Inside the object, you dont neew arrow to create a function
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    } // another way to create this object function  provideInfo: ()=> {}  but 'this' doesnt work with arrow funct;
  };
  
  console.log(robot.provideInfo());


  // The get method 
const robi = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
      if (typeof this._energyLevel === 'number'){
        return `My current energy level is ${this._energyLevel}`
      } else {
        return 'System malfunction: cannot retrieve energy level'
      }
    }
  };
  console.log(robot.energyLevel)
  
  
   // the set method 
  const robottin = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num) {
      if (typeof num === 'number' && num >= 0){
        this._numOfSensors = num;
      } else {
        console.log('Pass in a number that is greater than or equal to 0')
      }   
    } 
  };
  
  robottin.numOfSensors = 100;
  console.log(robottin.numOfSensors);
  
  
  const monsterFactory = (name, age, energySource, catchPhrase) => {
    return { 
      name: name,
      age: age, 
      energySource: energySource,
      scare() {
        console.log(catchPhrase);
      } 
    }
  };
  console.log(monsterFactory('pablo',34,'water','i like this'))
  
  // Factory functions 
  
  const robotFactory = (model, mobile) => {
    return {
      model : model,
          mobile: mobile,
          beep () { 
        console.log('Beep Boop'); 
      }
      };
  };
  
  const tinCan = robotFactory('P-500', true);
  tinCan.beep();
  
  
  // check how to apply this to this object
  let weapons = {
    swords: 
    {
    
        excalibur : {properties : ['hard hit', 'sweep', 'wall break'],
                    damage: 1500,
                    durability: 30000,
                    multi: 3},
        rapier : {  properties : ['fast hit', 'swirl','fast dash'],
                    damage: 350,
                    durability : 12500,
                    multi: 2},
        common_sword : {properties: ['sword block', 'pierce', 'knight dash'],
                        damage : 750,
                        durability: 2200,
                        mulit: 3}
    },
    guns : { 
        rifle : {properties : ['hard hit', 'sweep', 'wall break'],
                    damage: 1500,
                    durability: 30000,
                    multi: 3},
        doble_barrel : {  properties : ['fast hit', 'swirl','fast dash'],
                    damage: 350,
                    durability : 12500,
                    multi: 2},
        short_cannon : {properties: ['sword block', 'pierce', 'knight dash'],
                    damage : 750,
                    durability: 2200,
                    multi: 3}
    }
    }
    
    console.log(weapons.swords.excalibur.damage * weapons.swords.excalibur.multi);
    

    



    let player = {
      name: 'Alex',
      score: 100,
      updateScore: function() {
        this.score += 10;
        console.log(this.score);
      }
    };
    // Call player.updateScore() and observe what `this` does.
    player.updateScore(this.score)

    function Car(make, model) {
      this.make = make;
      this.model = model;
      this.display = function() {
        console.log(this.make + ' ' + this.model);
      };
    }
    
    // Create a new Car object and call the display method.


// Step 1: Create a new Car object
let myCar = new Car("Toyota", "Camry");

// Step 2: Call the display method on the new object

myCar.display();

const newDev = {
  name : 'dom',
  job: ['python','Ruby',],
  sallary: 100000,
  get allinfo(){
    return `Name: ${this.name}, job: ${this.job}, Sallary: ${this.sallary}`
  },
  /**
   * @param {any} jobs
   */
  set secondaryJob(jobs) {
    console.log('all jobs')
    this.job.unshift(jobs);
  }

};
newDev.secondaryJob = 'Java'
console.log(newDev.allinfo)



const roblock = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } = roblock; // destructor assigment

functionality.beep();



const robotblick = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robotblick);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robotblick)
console.log(robotEntries);

// Declare newRobot below this line:
console.log('---------------------------------')
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robotblick);

console.log(newRobot);

