function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

//Your function here...

let sortedArray = [];

function sortMinValue(value) {
       
        while (value.length > 0) {
        sortedArray.push(findMinValue(value));
        value.splice(value.indexOf(findMinValue(value)), 1);
    }
    
    //sortedArray.push(findMinValue(value));
    console.log(value)
    return sortedArray
}



/* BONUS MISSION: Refactor your sorting function to use recursion below: */


function sortMinValueRecursion(value) {
  if (value.length <= 1) {
    //solve last small step
    value.splice(0,1);
    return sortedArray.push(findMinValue(value[0]));
    //end Recursion

  } else {
    sortedArray.push(findMinValue(value));
    value.splice(value.indexOf(findMinValue(value)), 1);

    //call function again
    return sortMinValueRecursion(value);
  }
}




//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];



//console.log(nums1);
//console.log(sortMinValue(nums1));

//console.log(nums2);
//console.log(sortMinValue(nums2));

console.log(nums3);
console.log(sortMinValue(nums3));

console.log(sortMinValueRecursion(nums2));
