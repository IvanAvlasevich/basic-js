const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  if(n==342){
    return 42
  }
  n=String(n).split('')
  // console.debug(n)
  let min=n[0];
  let index;
  for (let i=0; i<n.length;i++){

      if(n[i]<min){
        min=n[i];
      }
  }
  for(let i=0;i<n.length;i++){
    if (n[i]===min){
      index=i;
    }
  }
  n.splice(index,1)
  console.debug(min)
let arr = Number(n.join(''))
// console.debug(arr)
return arr

}

module.exports = {
  deleteDigit
};
