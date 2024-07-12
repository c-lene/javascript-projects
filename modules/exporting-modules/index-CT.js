// Import the modules exported from practiceExports.js below:

/*
// Importing a Single function from 'practiceExports-CT.js' - EXAMPLE
const palindromeCheck = require('./practiceExports-CT.js');

console.log(typeof palindromeCheck);
console.log(palindromeCheck('that'));
console.log(palindromeCheck('radar'));
*/


// Importing MULTIPLE functions from 'practiceExports-CT.js' - EXAMPLE
const practice = require('./practiceExports-CT.js');

console.log(typeof practice);                                               // Indicates that 'practice' is an Object
console.log(practice);                                                      // Provides a list of its keys/value pairs

let arr = ['Hello', 'World', 123, 987, 'LC101'];

console.log(practice.isPalindrome('mom'));
console.log(practice.evenOrOdd(9));
console.log("");

for (i = 0; i < 3; i++) {
    console.log(practice.randomArrayElement(arr));
}