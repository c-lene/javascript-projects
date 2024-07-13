let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};


let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};


let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};


let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001
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
superChimpOne["astronautID"] = randomNumArray[0];
console.log(superChimpOne);

salamander["astronautID"] = randomNumArray[1];
console.log(salamander);

superChimpTwo["astronautID"] = randomNumArray[2];
console.log(superChimpTwo);

beagle["astronautID"] = randomNumArray[3];
console.log(beagle);

tardigrade["astronautID"] = randomNumArray[4];
console.log(tardigrade);



// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
