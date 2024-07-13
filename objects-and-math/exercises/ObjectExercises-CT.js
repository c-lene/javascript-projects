let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
};


let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
};


let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
};


let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
};



// After you have created the other object literals, add the astronautID property to each one.

let randomNumArray = [];
let minNum = 1
let maxNum = 10
 

while (randomNumArray.length < maxNum) {
   let randomNum;
   randomNum = Math.floor(Math.random() * maxNum) + minNum;
   
   // Checks if the randomized number 'randomNum' is already in the 'randomNumArray'
   let checkDuplicates = randomNumArray.includes(randomNum);

   // Using If statement to check for duplicates - No Duplicates = "FALSE" - then will add 'randomNum' to the 'randomNumArray'
   if (checkDuplicates === false){                                            
      randomNumArray.push(randomNum);
   } 
}

console.log(randomNumArray);

// Assigning Randomized Numbers as "astronautID" for each species - NO Crew members should have the same ID.
superChimpOne.astronautID = randomNumArray[0];
// For Checking purposes 
//console.log(superChimpOne);                                        

salamander.astronautID = randomNumArray[1];
// For Checking purposes 
//console.log(salamander);

superChimpTwo.astronautID = randomNumArray[2];
// For Checking purposes 
//console.log(superChimpTwo);

beagle.astronautID = randomNumArray[3];
// For Checking purposes 
//console.log(beagle);

tardigrade.astronautID = randomNumArray[4];
// For Checking purposes 
//console.log(tardigrade);



// Add a move method to each animal object --------------------------------------
//Functions that assigns a Random Number of steps from 0 - 10
function moveSteps () {
   let steps = Math.floor(Math.random()*11);
   return steps;
};

// Creating & Adding the 'move' method to each animal object 
superChimpOne.move = moveSteps;
console.log(superChimpOne);
console.log(`${superChimpOne.name} will take ${superChimpOne.move()} steps.`);


salamander.move = moveSteps;
console.log(salamander);
console.log(`${salamander.name} will take ${salamander.move()} steps.`);


superChimpTwo.move = moveSteps;
console.log(superChimpTwo);
console.log(`${superChimpTwo.name} will take ${superChimpTwo.move()} steps.`);


beagle.move = moveSteps;
console.log(beagle);
console.log(`${beagle.name} will take ${beagle.move()} steps.`);


tardigrade.move = moveSteps;
console.log(tardigrade);
console.log(`${tardigrade.name} will take ${tardigrade.move()} steps.`);



// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, superChimpTwo, beagle, tardigrade];
console.log(crew);


// Print out the relevant information about each animal. --------------------------------------

// Function that prints out Relevant Information
function crewReports(animal) {
   console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`);
}

// Using Mapping to print out each animal relevant information
let mappedArrayCrew = crew.map(crewReports);
console.log(mappedArrayCrew);



// Start an animal race!
function fitnessTest(animal) {
   let results = [];
   let numSteps;
   let numTurns;
   
   for (let i = 0; i < crew.length; i++) {
      numSteps = 0;
      numTurns = 0;

      while (numSteps < 20) {
         numSteps += animal[i].move();
         numTurns++;
      }
      //results.push(`${animal[i].name} took ${numTurns} turns to take 20 steps. With ${animal[i].move()} step for EACH turn & a TOTAL of ${numSteps} steps.`);
      results.push(`${animal[i].name} took ${numTurns} turns to take 20 steps.`);
   }
   return results;
}

console.log(fitnessTest(crew));