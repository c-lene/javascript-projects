//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];


//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
let arrayTable = []

arrayTable.push(element1);
arrayTable.push(element2);
arrayTable.push(element26);

console.log(arrayTable);


//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(arrayTable[1]);                             // Printing "table[1]" results in printing the second line (Index 1) of the array.
console.log(arrayTable[1][1]);                          // Printing "table[1][1]" results in printing the string located at row 1, column 1 that results in "He"


//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log(`The Mass of 'element1' is ${arrayTable[0][2]}.`);
console.log(`The Name of 'element2' is ${arrayTable[1][0]}.`);
console.log(`The Symbol of 'element26' is ${arrayTable[2][1]}.`);


//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
let arrayTable3D = [];
arrayTable3D.push(arrayTable);

console.log("This is the printout of a 3D Array");
console.log(arrayTable3D);

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

//console.log(arrayTable3D[0]);                                                         // This prints out the 3D Array as a whole                         
console.log(`The Name of 'element1' is ${arrayTable3D[0][0][0]}.`);                     // This prints out "hydrogen"
console.log(`The Symbol of 'element2' is ${arrayTable3D[0][1][1]}.`);                     // This prints out "He"
console.log(`The Mass of 'element26' is ${arrayTable3D[0][2][2]}.`);                     // This prints out "55.85"