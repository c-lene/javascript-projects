// Declare and assign the variables below

let nameSpaceShuttle = "Determination";     // Shuttle Name 
let shuttleSpeedMph = 17500;                // Shuttle Speed (mph)
let distanceToMarsKm = 225000000;           // Distance to Mars (km)
let distanceToMoonKm = 384400;              // Distance to the Moon (km)
let milesPerKm = 0.621;                     // Miles per km




// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log("~~ Verifying Variable data type ~~");          

console.log("");

console.log("'nameSpaceShutle' variable is a", typeof(nameSpaceShuttle));
console.log("'shuttleSpeedMph' variable is a", typeof(shuttleSpeedMph));
console.log("'distanceToMarsKm' variable is a", typeof(distanceToMarsKm));
console.log("'distanceToMoonKm' variable is a", typeof(distanceToMoonKm));
console.log("'milesPerKm variable' is a", typeof(milesPerKm));

console.log("");
console.log("");




// Calculate a space mission below
console.log("~~ Calculating the Space Mission ~~");
console.log("");

let milesToMars = distanceToMarsKm * milesPerKm;
console.log("Number of Miles to reach Mars =", milesToMars, "miles");

let hoursToMars = milesToMars / shuttleSpeedMph;
console.log("Number of Hours to reach Mars =", hoursToMars, "hrs");

let daysToMars = hoursToMars / 24;
console.log("Number of Days to reach Mars =", daysToMars, "days");

console.log("");




// Print the results of the space mission calculations below

console.log(nameSpaceShuttle, "will take", daysToMars, "days to reach Mars.");

console.log("");
console.log("");




// Calculate a trip to the moon below
console.log("~~ Calculating the Trip to the Moon ~~");
console.log("");

let milesToMoon = distanceToMoonKm * milesPerKm;
console.log("Number of Miles to reach the Moon =", milesToMoon, "miles");

let hoursToMoon = milesToMoon / shuttleSpeedMph;
console.log("Number of Hours to reach the Moon =", hoursToMoon, "hrs");

let daysToMoon = hoursToMoon / 24;
console.log("Number of Days to reach the Moon =", daysToMoon, "days");

console.log("");





// Print the results of the trip to the moon below

console.log(nameSpaceShuttle, "will take", daysToMoon, "days to reach the Moon.");