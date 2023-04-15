const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason( date ) {
  if(!date){
    return 'Unable to determine the time of year!'
  }
  if(typeof date == 'number'){throw new Error(`Invalid date!`)}
  if( !(date instanceof Date) ){
    throw new Error(`Invalid date!`)
  }
  if(new Date(date)=='Invalid Date'){
    throw new Error(`Invalid date!`)
  }
  if(date.hasOwnProperty('toString')){
    throw new Error(`Invalid date!`)
  }
  
  let newDate = new Date(date.getTime())
  newDate=newDate.getMonth();
  if(newDate=='11' || newDate=='0' || newDate=='1'){return 'winter'}
  if(newDate=='2' || newDate=='3' || newDate=='4'){return 'spring'}
  if(newDate=='5' || newDate=='6' || newDate=='7'){return 'summer'}
  if(newDate=='8' || newDate=='9' || newDate=='10'){return 'autumn'}

}


// const springDate = () => new Date()
// console.debug(getSeason(springDate))


module.exports = {
  getSeason
};
