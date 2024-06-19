//Create an array called practiceFile with the following entry: 273.15
let practiceFile = [273.15];


//Use the bracket notation method to add "42" and "hello" to the array. Add these new items one at a time.  Print the array after each step to confirm the changes.
practiceFile.push(42);                                          // ADDS 42 to the END of the Array
console.log(practiceFile);

practiceFile.push("hello");                                     // ADDS "hellow" to the END of the Array
console.log(practiceFile);


//Use a single .push() to add the following items: false, -4.6, and "87".  Print the array to confirm the changes.
practiceFile.push(false, -4.6, "87");                           // ADDS false, -4.6, "87" to the END of the Array
console.log(practiceFile);