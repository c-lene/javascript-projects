//Run this code first and examine the error message.
//Fix the syntax error then run the code again to check your work.

let launchReady = false;
let fuelLevel = 17000;

if (fuelLevel >= 20000) {                                   // SyntaxError - Missing closing parentheses ")"
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}