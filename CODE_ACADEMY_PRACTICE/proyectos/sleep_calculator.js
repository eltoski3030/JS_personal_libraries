function getSleepHours(day) {
    switch(day) {
      case 'Monday':
      case 'Tuesday':
      case 'Thursday':
      case 'Wednesday':
        return Math.floor(Math.random() * 8);
      case 'Friday':
      case 'Saturday':
      case 'Sunday':
        return Math.floor(Math.random() * 8);
      default:
        return 0;
    }
  }
  
  function getActualSleepHours(getSleepHours) {
    return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  }
  
  function getIdealSleepHours(idealHours = 8){
  return idealHours * 7
  }
  //console.log(getActualSleepHours(getSleepHours))
  //console.log(getIdealSleepHours())
  
  if (getActualSleepHours >= getIdealSleepHours) {
    'got the perfect amount of sleep';
  } else if (getActualSleepHours < getIdealSleepHours){
    'user should get some rest';
  }
  
  let hoursNeeded = getIdealSleepHours() - getActualSleepHours(getSleepHours)
  console.log(hoursNeeded)
  let needTo_sleep = hoursNeeded => {
    return `You Slept ${getActualSleepHours(getSleepHours)} Hours.The recommended hours to sleep are ${getIdealSleepHours()}.` + 'You still need to sleep:' + hoursNeeded;
    
  }
  
  console.log(needTo_sleep(hoursNeeded))