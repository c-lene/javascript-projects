const { getRawInput } = require("readline-sync");

let tortoiseOne = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"]
};

// Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.

console.log(tortoiseOne["name"]);                  // Using Bracket Syntax, to print out tortoiseOne "name".
console.log(tortoiseOne.name);                     // Using Dot Notation, to print out tortoiseOne "name".





//for...in Loops - Example for tortoiseOne 
for (item in tortoiseOne) {
   console.log(item + ", " + tortoiseOne[item]);
}



/*
// Using Bracket Syntax to update Pete's weight as he has gained 10 lbs.
console.log(`${tortoiseOne["species"]} "${tortoiseOne["name"]}" was originally ${tortoiseOne["weight"]} lbs.`);

newWeight = tortoiseOne["weight"] + 10;
tortoiseOne["weight"] = newWeight;
console.log(`NOW, ${tortoiseOne["name"]} weighs ${tortoiseOne['weight']} lbs!`);
*/


// Using Dot Notation to update Pete's weight as he has gained 10 lbs.
console.log(`${tortoiseOne.name}, the ${tortoiseOne.species}, weighs ${tortoiseOne.weight} lbs.`)

newWeight = tortoiseOne.weight + 10;
tortoiseOne.weight = newWeight;
console.log(`NOW, ${tortoiseOne.name} weighs ${tortoiseOne.weight} lbs!`);


// tortoiseTwoMale - Pete
let tortoiseTwoMale = {
   species: "Galapagos Tortoise",
   name: "Patricia",
   weight: 919
};

console.log(tortoiseTwoMale);


// Using Bracket Syntax to Add New Properties
tortoiseTwoMale["age"] = 120;
tortoiseTwoMale["speed"] = 'Faster than the Hare.';

console.log(tortoiseTwoMale);



// tortoiseTwoFemale - Patricia
let tortoiseTwoFemale = {
   species: "Galapagos Tortoise",
   name: "Patricia",
   weight: 800,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"],
   sign: function() {
      return this.name + " is a " + this.species;
   }
};


// tortoiseThree & tortoiseFour - Comparing properties via Boolean
let tortoiseThree = {
   species: "Galapagos Tortoise",
   diet: ["pumpkin", "lettuce", "cabbage"]
};

let tortoiseFour = {
   species: "Galapagos Tortoise",
   diet: ["pumpkins", "lettuce", "cabbage"]
};

console.log(tortoiseThree === tortoiseFour);                               //Output is FALSE because they are stored in separate locations in memory


//for...in Loops - Example for giraffe
let giraffe = {
   species: "Reticulated Giraffe",
   name: "Cynthia",
   weight: 1500,
   age: 15,
   diet: "leaves"
};

for (item in giraffe) {
   console.log(item + ", " + giraffe[item]);
}


// Any change to the object within the function will change the object itself

function birthday(animal) {
   animal.age = animal.age + 1;
   return animal;
}

console.log(giraffe.age);
birthday(giraffe);
console.log(giraffe.age);