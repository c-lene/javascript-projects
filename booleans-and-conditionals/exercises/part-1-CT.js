// Declare and initialize the variables for exercise 1 here:

let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;        // 'crewStatus' is TRUE if BOTH 'spaceSuitsOn' & 'shuttleCabinReady' are TRUE
let computerStatusCode = 200;
let shuttleSpeed = 15000;





// BEFORE running the code, predict what will be printed to the console by the following statements:

if (engineIndicatorLight === "green") {                     // Currently 'engineIndicatorLight' = "red blinking" -- Result in Condition is FALSE
   console.log("engines have started");                     // This code block will be ignored due to Condition is False
} else if (engineIndicatorLight === "green blinking") {     // This code block will be ignored due to Condition is False
   console.log("engines are preparing to start");           // This code block will be ignored due to Condition is False
} else {
   console.log("engines are off");                          // This Code Block will be executed due to all previous Conditions are FALSE
}
