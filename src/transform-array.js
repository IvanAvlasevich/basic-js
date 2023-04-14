const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  if(!Array.isArray(arr)){
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  }
  let newArr = []
  arr.forEach(value=>newArr.push(value))
  arr.forEach((value,index,array)=>{
    if(value=='--discard-prev'){
      if(index-1 == true){
        newArr.splice(index-1,2);
      }
      else{
        newArr.splice(index,1);
      }

    }else if(value=='--discard-next'){
      if(index+1 == true){
        newArr.splice(index,2);
      }else{      
        newArr.splice(index,1);
      }

    }else if(value=='--double-next'){
      if(index+1 == true){
        newArr.splice(index,1)
        newArr.splice(index,0,newArr[index])
      }else{
        newArr.splice(index,1)
      }
      
    }else if(value=='--double-prev'){
      if(index-1 == true){
        newArr.splice(index,1)
        newArr.splice(index-1,0,newArr[index-1])
      }else{
        newArr.splice(index,1)
      }

    }
  })

  return newArr
}


console.debug(transform(['--discard-prev', 1, 2, 3]))

module.exports = {
  transform
};
