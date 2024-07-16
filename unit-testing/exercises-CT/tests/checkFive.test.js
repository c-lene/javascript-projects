const checkFive = require('../checkFive.js');

describe("checkFive", function(){

    test("checks if produces correct output when passed a number LESS than 5", function() {
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    });

    test("checks if produces correct output when passed a number GREATER than 5.", function(){
        output = checkFive(6);
        expect(output).toEqual("6 is greater than 5.");
    });

    test("checks if produces correct output when passed a number EQUAL to 5.", function(){
        output = checkFive(5);
        expect(output).toEqual(`5 is equal to 5.`);
        
    });
});