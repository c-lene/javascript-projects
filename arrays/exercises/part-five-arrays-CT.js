let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log("Result of using str.split()");                   // Using ".split()" method produces no difference with the Original string
console.log(str.split());
console.log("");

console.log("Result of using str.split('e')");                // Using ".split('e') method prints out separated Strings where the letter "e" was REMOVED
console.log(str.split('e'));
console.log("");

console.log("Result of using str.split(' ')");                // Using ".split(' ')" method prints out separated Strings where empty spaces was REMOVED
console.log(str.split(' '));
console.log("");

console.log("Result of using str.split('')");                // Using ".split('')" method prints out Each individual letter of Original string as a separate string
console.log(str.split(''));
console.log("");


//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log("Result of using arr.join()");                  // Using ".join()" method produces no difference with the Original string
console.log(arr.join());
console.log("");

console.log("Result of using arr.join('a')");               // Using ".join('a') method prints out a JOINED string where the letter "a" is added between the original individual strings
console.log(arr.join('a'));
console.log("");

console.log("Result of using arr.join(' ')");               // Using ".join(' ') method prints out a JOINED string where empty spaces " " is added between the original individual strings
console.log(arr.join('a'));
console.log(arr.join(' '));
console.log("");

console.log("Result of using arr.join('')");                // Using ".join('') method prints out a JOINED string of the original individual strings.
console.log(arr.join(''));
console.log("");


//3) Do split or join change the original string/array?         NO, split or join does NOT change original string/array
console.log(str);
console.log(arr);
console.log("");


//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
let cargoHoldSplitSort = cargoHold.split(',').sort().join(', ');              
console.log(cargoHoldSplitSort);
