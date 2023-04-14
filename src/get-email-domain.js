const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain( email ) {
  let index = 0;
  for(let i=0;i<email.length;i++){
    if (email[i]=='@'){
      index=i;
    }
  }
  let domain = email.substring((index+1),(email.length))
  return domain
}


console.debug(getEmailDomain('very.unusual.@.unusual.com@usual.com'))

module.exports = {
  getEmailDomain
};
