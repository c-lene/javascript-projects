let num = 1001;

//Returns 'undefined'.
console.log(num.length);



//Use type conversion to print the length (number of digits) of an integer.

//let numStr = num.toString();                                                      // Using ".toString()" method to convert Integer to a String 
let numStr = String(num);                                                         // Using "String()" function to convert Integer to a String
//let numStr = `${num}`;                                                            // Using Template Literals to convert Integer to a String
//let numStr = num + "";                                                            // Using String Concatenation to convert Integer to a String

console.log(num + " has a length of " + numStr.length + " digits");


//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let numStrLength = numStr.length;
let numDecimalValue = numStrLength.toFixed(2);                                      // Using ".toFixed()" method to convert to DECIMAL
console.log(num + " has " + numDecimalValue + " digits");


//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (String(num).includes('.')) {
    console.log("The Length of", num, "is", String(num).length-1);                  // If num is a DECIMAL, will convert to a String & displays length without including the Decimal due to ".length-1"

} else {
    console.log("The Length of " + num + " is " + String(num).length);              // Else, num is an Integer, will convert to a String & display length
}