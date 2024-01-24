const numbers = [10,20,40,50,30,20]

//for in loop
for(const index in numbers){
    console.log('this is the index numbers of the loop: ',index)
    console.log('this is the value of the loop: ',numbers[index])
}

for(const value of numbers){
    console.log('this is the value of the loop: ',value)
}
//index of a value//
 console.log('this is the index numbers of the loop: ',numbers.indexOf(20))

// Iterating through an array
 const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++ ){
  console.log('I would love to visit ' + vacationSpots[i]);
}


// Compare two arrays 


const bobsFollowers = ['carlitos','john','pedro','juan']
const tinasFollowers = ['carlitos','john','jorge']
const mutualFollowers = []

for (bobs = 0; bobsFollowers.length <= 4; bobs++){
  for(tinas = 0; tinasFollowers.length <= 3; tinas++){
    if(bobsFollowers[bobs] === tinasFollowers[tinas]) {
    mutualFollowers.push(bobsFollowers[bobs]) //this just push wichever name is left
    console.log('Both arrays have the name: ' + bobsFollowers[tinas]);
    }
  }
}

