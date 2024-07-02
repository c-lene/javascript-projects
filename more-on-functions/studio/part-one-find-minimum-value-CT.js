//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.


function sortForMinimumNum (numArray) {
    
    let minNum = numArray[0];
    
    
    
    
    for (let i = 0; i < numArray.length; i++) {
        
        /*
        if (numArray[i] < minNum) {                                             //This code works - Code that the book uses
            minNum = numArray[i];
        }*/
        
        
        for (let j = i + 1; j < numArray.length; j++) {
                      
            if (numArray[j] < numArray[i] && numArray[j] < minNum) {
                minNum = numArray[j];
            } 
        }
    }
    return minNum
}


//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.
console.log(sortForMinimumNum(nums1));
console.log(sortForMinimumNum(nums2));
console.log(sortForMinimumNum(nums3));


