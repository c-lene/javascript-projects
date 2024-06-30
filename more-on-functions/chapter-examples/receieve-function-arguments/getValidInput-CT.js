const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

let isValidPassword = function (password) {
    // TODO 1: write a validator that ensures input starts with "a"
    if (!password.startsWith("a",0)) {
        return false;
    } 
    
    // TODO 2: write a validator that ensures input is a vowel
    if (!password.includes("a") || !password.includes("e") || !password.includes("i") || !password.includes("o") || !password.includes("u")) {
        return false;
    }
    return true;
}

console.log(getValidInput('Create a password: ', isValidPassword));



// Be sure to test your code!
