//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        // assign properties with this.key = value
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    
    // PART 2 - Method adds new scores to 'scores' array
    addScore(newScore) {
        //function code
        if (typeof newScore === "object") {
            for (let i = 0; i < newScore.length; i++) {
                this.scores.push(newScore[i]);
            }
        }  else {
            this.scores.push(newScore);
        }
    }

    // PART 3 - Method that Calculates the Test Average from scores in 'scores' array
    average() {
        let totalScores = 0;
        let avgScore = 0;
        let roundedAvgScore = 0;

        // Using For Loop to add each element in array
        for (let i = 0; i < this.scores.length; i++) {
            totalScores += this.scores[i];
        }

        avgScore = (totalScores / this.scores.length);
        roundedAvgScore = Math.round(avgScore * 10) / 10;
        return roundedAvgScore;
    }

    // PART 3 - Method that determines Candidate Status
    status() {
        let status = "";
        if (this.average() >= 90 && this.average() <= 100) {
            status = "Accepted";
        } else if (this.average() >= 80 && this.average() < 90) {
            status = "Reserve";
        } else if (this.average() >= 70 && this.average() < 80) {
            status = "Probationary";
        } else if (this.average() < 70) {
            status = "Rejected"
        } else {
            status = "INVALID Score. Try again!";
        }
        console.log(`${this.name} earned an average test score of ${this.average()}% and has a status of "${status}"`);
        return status;
    }



}

// Creating Objects for the following candidates
let candidateBubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let candidateMerryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let candidateGladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

// Verifying Part 1 works
console.log(candidateBubbaBear);
console.log(candidateMerryMaltese);
console.log(candidateGladGator);




//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

//Verifying that Part 2 - addScore() method works
candidateBubbaBear.addScore(83);
console.log(candidateBubbaBear.scores);


//Verifying that Part 3 - average() method works
console.log(`${candidateMerryMaltese.name}'s scores: ${candidateMerryMaltese.scores}`);
console.log(`${candidateMerryMaltese.name}'s Average Test Score: ${candidateMerryMaltese.average()}\n`);


//Verifying that Part 3 - status() method works
console.log(candidateMerryMaltese.status());
console.log(candidateBubbaBear.status());
console.log(candidateGladGator.status());
console.log("");





//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

// Using while loop to boost Glad Gator's status to "Reserve" - How many test will it take to reach "Reserve" status?
let boostGladGatorReserve = function () {
    let numTimes = 0;
    
    while (candidateGladGator.status() !== "Reserve") {
        candidateGladGator.addScore(100)
        numTimes += 1;
    }
    console.log("");
    console.log(`${candidateGladGator.name}'s scores: ${candidateGladGator.scores}`);
    return `It took ${candidateGladGator.name} ${numTimes} tests of 100% score to reach ${candidateGladGator.status()}!\n`;
}

console.log(boostGladGatorReserve());



// Using while loop to boost Glad Gator's status to "Accepted" - How many test will it take to reach "Accepted" status?
let boostGladGatorAccepted = function() {
    let numTimes = 0;
    
    while (candidateGladGator.status() !== "Accepted") {
        candidateGladGator.addScore(100)
        numTimes += 1;
    }
    console.log("");
    console.log(`${candidateGladGator.name}'s scores: ${candidateGladGator.scores}`);
    return `It took ${candidateGladGator.name} ${numTimes} more tests of 100% score to reach ${candidateGladGator.status()}!\n`;
}

console.log(boostGladGatorAccepted());