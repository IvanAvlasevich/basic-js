const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample( sampleActivity ) {
  if(typeof sampleActivity != 'string'){return false}
  if(sampleActivity>15 || sampleActivity<=0){return false}
    let activity;
  if(Number(sampleActivity)){    
    activity = Number(sampleActivity);
    // console.debug(activity)
  }else {return false}

  if(activity === NaN){return false}

  
    let Q = Math.log(MODERN_ACTIVITY/activity);
    let K = 0.693/HALF_LIFE_PERIOD;
    let dateOfDeath = Math.ceil(Q/K);
    return dateOfDeath
}

module.exports = {
  dateSample
};
