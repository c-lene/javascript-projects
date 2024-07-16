// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("check that the value of 'organization' is 'nonprofit'", function() {  
    expect(launchcode.organization).toBe("nonprofit"); 
  });   

  
  test("check that the value of 'executiveDirector' is 'Jeff'", function() {  
    expect(launchcode.executiveDirector).toBe("Jeff"); 
  });  

  test("check that the value of 'percentageCoolEmployees'", function() {  
    expect(launchcode.percentageCoolEmployees).toBe(100); 
  }); 

  test("check that the value of 'percentageCoolEmployees'", function() {  
    let programsOfferedArray = launchcode.programsOffered;
    
    expect(programsOfferedArray[0]).toBe("Web Development");
    expect(programsOfferedArray[1]).toBe("Data Analysis");
    expect(programsOfferedArray[2]).toBe("Liftoff");
    expect(programsOfferedArray.length).toBe(3); 
  }); 

  test("checking 'launchOutput' - when passed a number that is ONLY divisible by 2 and returns 'Launch!'", function() {   
    expect(launchcode.launchOutput(2)).toBe('Launch!'); 
  });

  test("checking 'launchOutput' - when passed a number that is ONLY divisible by 3 and returns 'Code!'", function() {   
    expect(launchcode.launchOutput(3)).toBe('Code!'); 
  });

  test("checking 'launchOutput' - when passed a number that is ONLY divisible by 5 and returns 'Rocks!'", function() {   
    expect(launchcode.launchOutput(25)).toBe('Rocks!'); 
  });

  test("checking 'launchOutput' - when passed a number that is ONLY divisible by 2 AND 3 and returns 'LaunchCode!'", function() {   
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!'); 
  });

  test("checking 'launchOutput' - when passed a number that is ONLY divisible by 3 AND 5 and returns 'Code Rocks!'", function() {   
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!'); 
  });

  test("checking 'launchOutput' - when passed a number that is ONLY divisible by 2 AND 5 and returns 'Launch Rocks!'", function() {   
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks!'); 
  });

  test("checking 'launchOutput' - when passed a number that is ONLY divisible by 2, 3, AND 5 and returns 'LaunchCode Rocks!'", function() {   
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!'); 
  });

  test("checking 'launchOutput' - when passed a number that is NOT divisible by 2, 3, AND 5 and returns 'Rutabagas! That doesn't work.'", function() {   
    expect(launchcode.launchOutput(11)).toBe("Rutabagas! That doesn't work."); 
  });




});