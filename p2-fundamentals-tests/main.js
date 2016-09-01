function howOld(dob){
  /*
    HINT
    How do you find your age in JavaScript?
    lets take a look at the Date object 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    
    How is the Date object being used in the spec runner?
  */
  
  /* SOLUTION 
   var then = new Date(dob);
   var now = new Date();
   var diff = now - then;
   return ( diff / (60 * 1000));
  */
}

function brownHair(brownHairNum, classSize){
    /*
      How do we round numbers in JavaScript?
      lets take a look at the Math.round function & its closely related sibling Math.floor. 
      
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
      
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
  
    */
    /*SOLUTION
     return Math.round((brownHairNum / classSize) * 100) + "%";
    */
    
  return "";
}

function usingModulus(x,y){
  /*
    The modulus/remainder operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend, not the divisor. It uses a built-in modulo function to produce the result, which is the integer remainder of dividing x by y
  */
  
  /*SOLUTION
    return x % y;
  */
}

function usingModulusWithTwo(num){
  /*SOLUTION
    return num % 2;
  */
}

function yourName(str){
  /*
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
  
  */
    /*SOLUTION
    return "Jacob";
  */

}

function favFood(str){
     /*SOLUTION
    return "Bagels";
  */
  
}

function letsConcat(firstStr, secondStr){
  
 /*
  BONUS CAN WE DO THIS WITH ES6 STRING LITERALS
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */ 
}

