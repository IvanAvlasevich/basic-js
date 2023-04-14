const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  length:'',

  getLength() {
    return this.length
  },
  addLink( value ) {
    this.length += `( ${value} )~~`
    return this
  },
  removeLink( position ) {
    
    let arr = this.length.split('~~');
    if(position<1 || position>arr.length-1 || typeof position!='number' ){
      this.length = false;
      throw new Error("You can\'t remove incorrect link!")
      
    }
    for(let i = 0;i<arr.length;i++){
      if(i+1==position){arr.splice(i,1)}
    }
      this.length=arr.join('~~');
    return this
  },
  reverseChain() {
    let arr = this.length.split('~~')
    arr.pop()
    this.length = arr.reverse().join('~~')
    return this
  },
  finishChain() {
    // let newArr =[];
    // let arr = this.length.split('~~');
    // for (let i=0;i<arr.length;i++){
    //   if(i+1==true){
    //     newArr.push(`${arr[i]}~~`);
    //   }else{
    //     newArr.push(`${arr[i]}`);
    //   }
    // }
    // this.length='';
    // return newArr.join('')
    return this.length
  }
};

  // console.debug(chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'))

module.exports = {
  chainMaker
};
