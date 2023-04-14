const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {

  let newArr =[];
  arr.forEach((value)=>{
    if(value>0){newArr.push(value)}
  })
  newArr=newArr.sort((a, b) => a - b)
  console.debug(newArr)
  for(let i=0;i<arr.length;i++){
    if(arr[i]==-1){newArr.splice(i,0,-1)}
  }

  // let stepsCount = arr.length - 1;
  // let swapped;
  // do {
  //   swapped = false;
  //   for (let i = 0; i < stepsCount; i += 1) {
  //     if(arr[i]=='-1'){i+=1}
  //     if (arr[i] > arr[i + 1]) {
  //       const temp = arr[i];
  //       arr[i] = arr[i + 1];
  //       arr[i + 1] = temp;
  //       swapped = true;
  //     }
  //   }
  //   stepsCount -= 1;
  // } while (swapped); 

  return newArr;
}

console.debug(sortByHeight([4, 2, 9, 11, 2, 16]))

module.exports = {
  sortByHeight
};
