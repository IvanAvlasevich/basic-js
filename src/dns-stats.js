const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  const countItems = {};
  let arr = [];
  domains.forEach(value=>{
    arr.push(value.split('.'))
    })
    arr.forEach(value=>{
      for (const item of value){
        countItems[item] = countItems[item]? countItems[item]+1 : 1;
      }
    })

  
  // text.split('.').forEach( (s,i) => {
  //   if (!arr.includes([s])) {
  //     arr.push([s, 1])
  //   } else {
  //     ++arr[i][1]
  //   }
  // })

  return countItems;
}

module.exports = {
  getDNSStats
};
