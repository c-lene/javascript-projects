// Let’s break the code down into smaller chunks.
// Now consider the second if/else block. 
// Add another console.log(launchReady) after this block and run the program.

// Given the values for crewStatus and computerStatus, should launchReady be true or false after the check?  
// Given the values of 'crewStatus' and 'computerStatus', 'launchReady' should be TRUE.

// Is the program behaving as expected?                         
// Techincally based on tested IF/Else statement, then yes the program is behaving as expected.
// But due to the FIRST If/Else statement (that is blocked), 'launchReady' should remain FALSE due to Insufficient fuel!


let launchReady = false;
// let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

// if (fuelLevel >= 20000) {
//    console.log('Fuel level cleared.');
//    launchReady = true;
// } else {
//    console.log('WARNING: Insufficient fuel!');
//    launchReady = false;
// }

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

console.log(launchReady);                                       // 'launchReady' was changed to TRUE, when it should remain FALSE due to Insufficient fuel



// if (launchReady) {
//    console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
//    console.log('Liftoff!');
// } else {
//    console.log('Launch scrubbed.');
// }