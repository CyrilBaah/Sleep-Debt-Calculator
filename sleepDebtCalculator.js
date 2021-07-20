getSleepHours = (day) => {
    switch(day){
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 6;
        break;
      case 'thursday':
        return 9;
        break;
      case 'friday':
        return 8;
        break;
      case 'saturday':
        return 8;
        break;
      case 'sunday':
        return 9;
        break;
    }
  }
  
  getActualSleepHours = () => {
    return getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday')+
    getSleepHours('thursday')+
    getSleepHours('friday')+
    getSleepHours('saturday')+
    getSleepHours('sunday');
  }
  
  getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours *= 7;
  }
  console.log(getIdealSleepHours())
  