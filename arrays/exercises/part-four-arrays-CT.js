let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.


//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
console.log(holdCabinet1.concat(holdCabinet2));                     // Using ".concat()" method does NOT alter the original arrays
console.log(holdCabinet2.concat(holdCabinet1));

console.log(holdCabinet1);                                          // verifys that Original Array is not altered                                 

// Does concat alter the original arrays?
// NO, concat method does NOT alter the originial arrays



//2) Print a slice of two elements from each array. Does slice alter the original arrays?
console.log(holdCabinet1.slice(0,1));                               // Using ".slice()" method to REMOVE index 0 & 1 items from 'holdCabinet1'
console.log(holdCabinet1);                                          

console.log(holdCabinet2.slice(0,1));                               // Using ".slice()" method to REMOVE index 0 & 1 items from 'holdCabinet2'
console.log(holdCabinet2);                                          // ".slice()" method does NOT alter the Original Arrays

// Does slice alter the original arrays?
// NO, slice method does NOT alter the originial arrays



//3) reverse the first array, and sort the second. 
console.log(holdCabinet1.reverse());
console.log(holdCabinet1);

console.log(holdCabinet2.sort());
console.log(holdCabinet2);


//What is the difference between these two methods? 
// ".reverse()" method REVERSES the order of the Array elements
// ".sort()" method sorts the Array elements in INCREASING order


//Do the methods alter the original arrays?
// YES, BOTH methods alters the Original Arrays
