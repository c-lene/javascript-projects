let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

//1) Use bracket notation to replace ‘slinky’ with ‘space tether’. Print the array to confirm the change.
cargoHold.splice(5,1,"space tether");                           // Using ".splice()" method to remove 1 item from Index 5 postion & replacing with new string
console.log(cargoHold);


//2) Remove the last item from the array with pop. Print the element removed and the updated array.
cargoHold.pop();                                                // Using ".pop()" method to remove the LAST item from the Array
console.log(cargoHold);                                         // Prints out with "security blanket" REMOVED


//3) Remove the first item from the array with shift. Print the element removed and the updated array.
cargoHold.shift();                                              // Using ".shift()" method to remove the FIRST item from the Array
console.log(cargoHold);                                         // Prints out with "oxygen tanks" REMOVED


//4) Unlike pop and shift, push and unshift require arguments inside the (). Add the items 1138 and ‘20 meters’ to the the array - the number at the start and the string at the end. Print the updated array to confirm the changes.
cargoHold.unshift(1138);                                        // Uses ".unshift()" method to ADD 1138 to the BEGINNING of Array
cargoHold.push('20 meters');                                    // Uses ".push()" method to ADD "20 meters" to the END of the Array
console.log(cargoHold);


//5) Use a template literal to print the final array and its length.
console.log(`The final Array is ${cargoHold} with a length of ${cargoHold.length}`);