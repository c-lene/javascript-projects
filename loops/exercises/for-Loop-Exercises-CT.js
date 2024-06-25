/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */



// 1a. Print the numbers 0 - 20, one number per line.
for (let i = 0; i < 21; i++) {
    console.log(i);
  }




// 1b. Print only the ODD values from 3 - 29, one number per line.
for (let i = 2; i < 30; i++) {
    i = i + 1; 
    console.log(i);
}




// 1c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
for (let i = 15; i > -13 && i < 16; i++) {
    i = i - 3;
    console.log(i);
}





// 1d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers).
for (let i = 52; i > 19; i--) {
    i = i - 2;
    console.log(i);
}






/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].

Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

 
let str = "LaunchCode";
let arrayStr = [1, 5, 'LC101', 'blue', 42];


// 2a. Print each element of the array to a new line.
for (let i = 0; i < arrayStr.length; i++) {
    console.log(arrayStr[i]);
}


// 2b. Print each character of the string - in reverse order - to a new line.
for (let i = 0; i < str.length; i++) {
    let reversed = str.split("").reverse().join("");
    console.log(reversed[i]);
}





/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

let array = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let arrayEvens = [];
let arrayOdds = [];

console.log("Evens");
for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        arrayEvens = array[i];
        console.log(arrayEvens);
    }
}


console.log("");
console.log("Odds");

for (i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
        arrayOdds = array[i];
        console.log(arrayOdds);
    }
}