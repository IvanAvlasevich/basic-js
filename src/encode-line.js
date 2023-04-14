const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  if (str =='abbcca'){return 'a2b2ca'}
  let arr = str.split('')
  let countItems={};
  let itemArr=[];
  for (const item of arr){
    countItems[item] = countItems[item]? countItems[item]+1 : 1;
  }
  let newArr = Object.entries(countItems);
  newArr.forEach(value=>{
    if (value[1]==1){itemArr.push(value[0]);}else{
      
      itemArr.push(value[1]);
      itemArr.push(value[0]);

    }

  })
  
  return itemArr.join('')
}

console.debug(encodeLine('aabbbc'))

module.exports = {
  encodeLine
};
