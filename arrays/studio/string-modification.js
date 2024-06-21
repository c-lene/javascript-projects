const input = require('readline-sync');
let str = "LaunchCode";



//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let strFirstThree = str.slice(0, 3);
let strLastChar = str.slice(3);

console.log(strFirstThree);
console.log(strLastChar);

let strModified = strLastChar + strFirstThree;
console.log(strModified);


//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`'${strModified}' is the modified string of '${str}' by removing the first three letters of '${strFirstThree}' and adding it to the end of the Modified string of ${strLastChar}.`);


//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput = input.question("Input the number of letters to be relocated: ");
let numLetterRelocate = Number(userInput);


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (numLetterRelocate > 10 || numLetterRelocate < 0) {
    console.log (`Invalid Input. The maximum characters that can be selected is 10. 
        Your selection was ${numLetterRelocate}. 
        The default was set to 3.`);
    numLetterRelocate = 3;
}
