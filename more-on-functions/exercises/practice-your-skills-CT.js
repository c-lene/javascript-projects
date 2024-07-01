//Create an anonymous function and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

/* Add to your code! Use your funtion and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/



let arr = ['Elocution', 21, 'Clean teeth', 100];


// Part 1 - Creating Anonymous functions  - COMPLETED
let newArray = [];

let valueOrStr = function(arrElement) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arrElement[i] === "number") {
            let tripleValue = arrElement[i] * 3;
            newArray.push(tripleValue);

        } else if (typeof arrElement[i] === "string") {
            newArray.push("ARRR!");

        } else {
            newArray.push(arrElement[i]);
        }
    }
    return newArray;
};



// Part 2 - Using Mapping Method - CONTINUE HERE... STILL NEED TO FIGURE OUT MAPPING
let mapArray = function(arrElement) {
    
        if (typeof arrElement === "number") {
            return arrElement * 3;

        } else if (typeof arrElement === "string") {
            return arrElement.replace(arrElement, "ARRR!");

        } else {
            return arrElement;
        }
};

let newMapArray = arr.map(mapArray);

console.log(valueOrStr(arr));
console.log(newMapArray);

