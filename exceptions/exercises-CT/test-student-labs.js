function gradeLabs(labs) {
  for (let i=0; i < labs.length; i++) {
    let lab = labs[i];
    //let result = lab.runLab(3);
    

    // Added a Try/Catch block to catch an Exception if the 'runLab' property is not defined.
    try {
      let result = lab.runLab(3);
    } catch(error) {
      console.log("A TypeError has been caught. Due to 'runLab' property is not defined.")
      
      // Prints out the actual Error message
      //console.log(error);                                                                       
      
      // If the Exception is thrown, 'result' should be set to "Error thrown"
      let result = "Error thrown";
    }


    console.log(`${lab.student} code worked: ${result === 27}`);
  }
}

let studentLabs = [
  {
    student: 'Carly',
    runLab: function (num) {
        return Math.pow(num, num);
    }
  },
  {
    student: 'Erica',
    runLab: function (num) {
        return num * num;
    }
  }
];


// Created new array called 'studenLabs2'
let studentLabs2 = [
  {
    student: 'Blake',
    myCode: function(num) {
      return Math.pow(num, num);
    }
  },
  {
    student: 'Jessica',
    runLab: function(num) {
      return Math.pow(num, num);
    }
  },
  {
    student: 'Mya',
    runLab: function(num) {
      return num * num;
    }
  },
];




gradeLabs(studentLabs);

// Testing & Run 'gradeLabs' function using objects in 'studentLabs2'
gradeLabs(studentLabs2);
