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
    return roundedMissionDuration, `The mission will travel ${orbitCircumference(orbitRadius)} km around the planet, and it will take ${roundedMissionDuration} hours to complete.`;
    
}


// Copy/paste your selectRandomEntry function here:


// Code your oxygenExpended function here:


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
 
 let radiusKm = 2000;
 let orbitalSpeedKmPerHr = 28000;
 let orbitsCompleted = 5





 // Testing 'orbitCircumference' function to see if it works correctly
 console.log(orbitCircumference(radiusKm));


 // Testing 'missionDuration' function to see if it works correctly
 console.log(missionDuration(orbitsCompleted, radiusKm, orbitalSpeedKmPerHr));