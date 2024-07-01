//The following concept check assumes that only positive integers are passed to the function.

function factorial(integer){
  
  // "integer === 1" Base Case - Results in Factorial of n! 
  if (integer === 1){
    return integer;
  } else {
    return integer*(factorial(integer-1));
  }
}



//Skill boost! Add validation to return an error message if the function is passed a string, negative number or a decimal value.

let isValidInteger = function(integer) {

    if (typeof integer === "string" || integer <= 0 || integer % 1 === 0 ) {
        console.log(`Invalid Input. ${integer} is NOT a valid Factorial Integer! `);
        return false;
    }
    return true;
};

console.log(factorial(isValidInteger(4)));
