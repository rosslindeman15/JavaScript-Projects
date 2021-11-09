const getSleepHours = (day) => {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 8;
    } else if (day === 'wednesday') {
      return 8;
    } else if (day === 'thursday') {
      return 8;
    } else if (day === 'friday') {
      return 9;
    } else if (day === 'saturday') {
      return 8;
    } else if (day === 'sunday') {
      return 9;
    } else {
      return 'Invalid selection.';
    }
  } 
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('Great! You got a perfect amount of sleep.');
     } else if (actualSleepHours > idealSleepHours) {
       console.log('You have gotten ' + (actualSleepHours - idealSleepHours) +' more hours than the needed amount of sleep.');
     } else if (actualSleepHours < idealSleepHours) {
       console.log('You need to get more rest. You need to get ' + (idealSleepHours - actualSleepHours) + ' more hours of sleep.');
     } else {
       console.log('Invalid selection.')
     }
  }
  
  calculateSleepDebt();
  
  
  
  