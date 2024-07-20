// Code your orbitCircumference function here:
function orbitCircumference(radius) {
    let circumference = Math.round(2 * Math.PI * radius);
    return circumference;
}


// Code your missionDuration function here:
function missionDuration(orbitsCompleted, orbitRadius, orbitalSpeed) {
    // Calculates how long it will take the Animals to complete a certain number of Orbits. 
    let missionTimeDuration = orbitsCompleted * (orbitCircumference(orbitRadius)/orbitalSpeed);
    
    // Rounds to 2 decimal places.
    let roundedMissionDuration = Math.round(missionTimeDuration * 100)/100;

    // Return & Print the result.
    return roundedMissionDuration;
}


// Copy/paste your selectRandomEntry function (from ObjectsStudio01-CT.js) here:
function selectRandomEntry(idNumArray) {
    let randomIDNum = Math.floor(Math.random()*idNumArray.length);
    return randomIDNum;
}



// Code your oxygenExpended function here:
function oxygenExpended(candidateObject,orbitsCompleted,orbitRadius,orbitalSpeed) {
    // Using candinateObject parameter which is a number to randomly select animal
    
  
    // Calculates How many hours the spacewalk will take.
    let hours = missionDuration(orbitsCompleted,orbitRadius,orbitalSpeed);
    
    // Uses Candidate's o2Used method to calculate how much oxygen consumed during spacewalk.
    let o2Consumed = crewList[candidateObject].o2Used(hours);
    
    // Rounds answer to 3 decimal places.
    let roundedO2Consumed = Math.round(o2Consumed * 1000)/1000;

    // Returns the String with the results.
    return `${crewList[candidateObject].name} will perform the spacewalk, which will last ${hours} hours and require ${roundedO2Consumed} kg of oxygen.`;
}


// Candidate data & crew array.
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
 
 let crew = [candidateA,candidateC,candidateE];
 let crewList = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];


 let radiusKm = 2000;
 let orbitalSpeedKmPerHr = 28000;
 let orbitsCompleted = 3





 // Testing 'orbitCircumference' function to see if it works correctly
 //console.log(orbitCircumference(radiusKm));


 // Testing 'missionDuration' function to see if it works correctly
 //console.log(missionDuration(orbitsCompleted, radiusKm, orbitalSpeedKmPerHr));
 
 
 // Using Temperate Literals to Print Message Result from 'missionDuration' function 
 console.log(`\nThe mission will travel ${orbitCircumference(radiusKm)} km around the planet, and it will take ${missionDuration(orbitsCompleted, radiusKm, orbitalSpeedKmPerHr)} hours to complete.\n`);

 // Testing 'oxygenExpended' function to see if it works correctly - Using 'selectRandomEntry' function to randomize selection
 console.log(oxygenExpended(selectRandomEntry(crewList),orbitsCompleted,radiusKm,orbitalSpeedKmPerHr)+"\n");