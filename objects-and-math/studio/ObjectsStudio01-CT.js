// Code your selectRandomEntry function here:
function selectRandomEntry(idNumArray) {
    let randomIDNum = Math.floor(Math.random()*idNumArray.length);
    return randomIDNum;
}


// Code your buildCrewArray function here:
function buildCrewArray(randIDArray, animalArray) {
    let crewArray = [];

    // Using For Loop to search each element in 'randIDArray'
    for (let i = 0; i < randIDArray.length; i++) {
        
        // Using Nested For Loop to search through each element in 'animalArray'
        for (let j = 0; j < animalArray.length; j++) {
            
            if (animalArray[j].astronautID === randIDArray[i]) {
                crewArray.push(animalArray[j]);
                
            }
                
        }
        
    }
    return crewArray;   
}



let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements: ----------------------------------------------

// PART 1 - Randomly Select ID Numbers
let randomIDNumArray = [];
let selectNumID = 3;

while (randomIDNumArray.length < selectNumID) {
    let newRandomIDNum = selectRandomEntry(idNumbers);

    // Checks to avoid Repeated Numbers ---- If NO Repreated Numbers then result will be pushed to new Array
    let checkRepeatedNum = randomIDNumArray.includes(idNumbers[newRandomIDNum]);
    if (checkRepeatedNum === false) {
        randomIDNumArray.push(idNumbers[newRandomIDNum]);
    }
}

console.log(randomIDNumArray);


// PART 2 - Build a crew Array
let newCrewArray = buildCrewArray(randomIDNumArray,animals);

console.log(newCrewArray);

console.log(`${newCrewArray[0].name}, ${newCrewArray[1].name}, and ${newCrewArray[2].name} are going to space!`);

