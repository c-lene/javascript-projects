// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:


function divide(numerator, denominator) {
    let result = 0;

    if (denominator === 0) {
        throw Error("Attempted to divide by zero.");

    } else {
        result = (numerator/denominator);

    }
    return result;
}


// Testing divde function:
console.log(divide(6,3));
console.log(divide(-6,3));
console.log(divide(6,0));