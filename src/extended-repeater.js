const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  if(options.hasOwnProperty('separator')==false){
    options.separator = '+';
  }
  if(options.hasOwnProperty('additionSeparator')==false){
    options.additionSeparator = '|';
  }
  if(options.hasOwnProperty('additionRepeatTimes')== false && options.hasOwnProperty('addition')==false){options.additionRepeatTimes=0}else 
  if(options.hasOwnProperty('addition')==true && options.hasOwnProperty('additionRepeatTimes')== false){options.additionRepeatTimes=1}
  if(options.hasOwnProperty('repeatTimes')== false){options.repeatTimes=1}
  if(typeof str!='string'){str = String(str)}
  console.debug(str)
  if(typeof options.addition!='string'){options.addition = String(options.addition)}
  if(typeof options.separator!='string'){options.separator = String(options.separator)}
  if(typeof options.additionSeparator!='string'){options.additionSeparator = String(options.additionSeparator)}
  if(typeof options.repeatTimes!='number'){repeatTimes = Number(repeatTimes)}
  if(typeof options.additionRepeatTimes!='number'){additionRepeatTimes = Number(additionRepeatTimes)}


  let newStr=[];
  for(let i=0; i<options.repeatTimes;i++){
    newStr.push(str)
    for (let j=0;j<options.additionRepeatTimes;j++){
      newStr.push(options.addition)
      newStr.push(options.additionSeparator)
    }
    if (options.additionRepeatTimes!=0){newStr.pop();}
    newStr.push(options.separator)
  }
  if(options.repeatTimes!=0){newStr.pop();}
  return newStr.join('')
}

console.debug(repeater(9.234, { repeatTimes: 4, separator: '||', addition: { a: 5 }, additionRepeatTimes: 3, additionSeparator: '&&' }))

module.exports = {
  repeater
};
