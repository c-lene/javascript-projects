let engineIndicatorLight = ('NOT red blinking');
let fuelLevel = 18000;
let engineTemperature = 2600;

/* 5) Implement the following checks using if/else if/else statements:

a) If fuelLevel is above 20000 AND engineTemperature is at or below 2500, print "Full tank. Engines good."

b) If fuelLevel is above 10000 AND engineTemperature is at or below 2500, print "Fuel level above 50%.  Engines good."

c) If fuelLevel is above 5000 AND engineTemperature is at or below 2500, print "Fuel level above 25%. Engines good."

d) If fuelLevel is at or below 5000 OR engineTemperature is above 2500, print "Check fuel level. Engines running hot."

e) If fuelLevel is below 1000 OR engineTemperature is above 3500 OR engineIndicatorLight is red blinking print "ENGINE FAILURE IMMINENT!" 

f) Otherwise, print "Fuel and engine status pending..." */

/*
console.log("");
console.log("~~ 01 Sequence Trial ~~");                                                                 // 01 Sequence FAILED 
console.log("");

if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === 'red blinking') {
    console.log("ENGINE FAILURE IMMINENT!");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
    console.log("Fuel level above 25%. Engines good.");                                                 // Code gets stuck here when running TRY IT - Line #2, #6
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log("Fuel level above 50%. Engines good.");
} else if (fuelLevel > 20000 && engineTemperature <= 2500) {
    console.log("Full tank. Engines good.");
} else {
    console.log("Fuel and Engine status pending...")
}

console.log("");
console.log("");
console.log("");
console.log("--------------------------------------------------");
*/


//console.log("~~ 02 Sequence Trial ~~");                                                               // 02 Sequence WORKS! 
console.log("");

if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === 'red blinking') {
    console.log("ENGINE FAILURE IMMINENT!");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.");
} else if (fuelLevel > 20000 && engineTemperature <= 2500) {
    console.log("Full tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
    console.log("Fuel level above 50%. Engines good.");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
    console.log("Fuel level above 25%. Engines good.");
} else {
    console.log("Fuel and Engine status pending...")
}

console.log("");








// Code 5a - 5f here:

// 6) a) Create the variable commandOverride, and set it to be true or false. If commandOverride is false, then the shuttle should only launch if the fuel and engine check are OK. If commandOverride is true, then the shuttle will launch regardless of the fuel and engine status.
let commandOverride = false;


if (commandOverride === true) {
    console.log("Command Override ENABLED")
    console.log("Shuttle will launch");
} else if (commandOverride === false && fuelLevel > 5000 && engineTemperature <= 2500) {                // commandOveride is FALSE. Shuttle will only launch IF fuelLevel & engineTemperature are OK.
    console.log("Command Override DISABLED");
    console.log("Shuttle fuel & engine check are OK. Shuttle will launch.");          
} else {                                                                                                // Will execute when commandOveride is FALSE and fuelLevel & engineTemperature are NOT OK.
    console.log("Command Override DISABLED")                                                
    console.log("Check Fuel and Engine status!");                                                                      
}

console.log("");







/* 6) b) Code the following if/else check:
If fuelLevel is above 20000 AND engineIndicatorLight is NOT red blinking OR commandOverride is true print "Cleared to launch!" Else print "Launch scrubbed!" */

if (fuelLevel > 20000 && engineIndicatorLight === 'NOT red blinking' || commandOverride) {
    console.log("Cleared to launch!");
} else {
    console.log("Launch scrubbed!");
}

console.log("");