const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(flag){
    this.flag = flag;
  }

  //A-Z,uppercase
  encrypt(message,key) {
    if(!message && !key){
      throw new Error('Incorrect arguments!')
    }
    if(message==undefined || key==undefined){
      throw new Error('Incorrect arguments!')
    }
    //создание таблицы шифрования
    //----------------------------------
    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let vigenereSqure = [];//!таблица шифрования
    for(let i=0;i<alphabet.length;i++){
      vigenereSqure.push([])
    }
    for(let i=0;i<alphabet.length;i++){
      for(let j=0;j<alphabet.length;j++){
        vigenereSqure[i][j]=alphabet[j];
      }
    }
    for(let i=1; i<alphabet.length;i++){
      let item = vigenereSqure[i].splice(0,i);
      vigenereSqure[i] = vigenereSqure[i].concat(item)
    }
    //-----------------------------------
    let newMsg=[]
    let spaceIndex=[];//храним пробелы
    message = message.toUpperCase().split('');//делаем массив с заглавными буквами
    message.forEach((element,index) => {
      if (element== ' '){
        spaceIndex.push(index)
      }
    });
    for(let i=0;i<message.length;i++){
      if(message[i]==' '){
        message.splice(i,1);
        i--;
      }
    }
    

    //делаем ключ равный длине строки
    while(key.length < message.length){
      for(let i=0;i<key.length;i++){
        if(key.length < message.length){
          key=key+key[i];
        }else{
          break;
        }
      }
    }
    key = key.toUpperCase().split('')    //из ключа в массив с заглавными

    //шифруем
    for(let i=0;i<message.length;i++){
      if(/[a-z]/i.test(message[i])){
        let indexI =  alphabet.indexOf(message[i]);
        let indexJ = alphabet.indexOf(key[i]);
        newMsg.push(vigenereSqure[indexI][indexJ])
      }else {
        newMsg.push(message[i])
      }
    }
    //вставляем пробелы
    for(let i=0;i<spaceIndex.length;i++){
      newMsg.splice(spaceIndex[i],0,' ')
    }

    if(this.flag == false){
      return newMsg.reverse().join('')
    }

    return newMsg.join('')
  }

//!--------------------------------------------------------------------

  decrypt(encryptedMessage,key) {
    if(!encryptedMessage && !key){
      throw new Error('Incorrect arguments!')
    }
    if(encryptedMessage==undefined || key==undefined){
      throw new Error('Incorrect arguments!')
    }

    //создание таблицы шифрования
    //----------------------------------
    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let vigenereSqure = [];//!таблица шифрования
    for(let i=0;i<alphabet.length;i++){
      vigenereSqure.push([])
    }
    for(let i=0;i<alphabet.length;i++){
      for(let j=0;j<alphabet.length;j++){
        vigenereSqure[i][j]=alphabet[j];
      }
    }
    for(let i=1; i<alphabet.length;i++){
      let item = vigenereSqure[i].splice(0,i);
      vigenereSqure[i] = vigenereSqure[i].concat(item)
    }
    //-----------------------------------
    let newMsg=[]
    let spaceIndex=[];//храним пробелы
    encryptedMessage = encryptedMessage.toUpperCase().split('');//делаем массив с заглавными буквами
    encryptedMessage.forEach((element,index) => {
      if (element== ' '){
        spaceIndex.push(index)
      }
    });
    for(let i=0;i<encryptedMessage.length;i++){
      if(encryptedMessage[i]==' '){
        encryptedMessage.splice(i,1);
        i--;
      }
    }
    

    //делаем ключ равный длине строки
    while(key.length < encryptedMessage.length){
      for(let i=0;i<key.length;i++){
        if(key.length < encryptedMessage.length){
          key=key+key[i];
        }else{
          break;
        }
      }
    }
    key = key.toUpperCase().split('')    //из строки в массив с заглавными

    //дешифруем
    for(let i=0;i<encryptedMessage.length;i++){
      if(/[a-z]/i.test(encryptedMessage[i])){
        let indexI = alphabet.indexOf(key[i]);
        let indexJ =  vigenereSqure[indexI].indexOf(encryptedMessage[i]);
        newMsg.push(alphabet[indexJ])
      }else {
        newMsg.push(encryptedMessage[i])
      }
    }
    //вставляем пробелы
    for(let i=0;i<spaceIndex.length;i++){
      newMsg.splice(spaceIndex[i],0,' ')
    }

    if(this.flag == false){
      return newMsg.reverse().join('')
    }

    return newMsg.join('')
  }

}



module.exports = {
  VigenereCipheringMachine
};
