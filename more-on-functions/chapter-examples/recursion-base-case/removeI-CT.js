function removeI(arr) {
    
    /*
    // "!arr.includes('i')" Base Case function - Removes "i" entries from the array
    if (arr.indexOf('i') !== -1){
      return arr;
    } else {
      arr.splice(arr.indexOf('i'),1);
      return removeI(arr);
    } */

    // "arr.indexOf('i') === -1" Base Case function - Removes "i" entries from the array
    if (arr.indexOf('i') === -1){
        return arr;
      } else {
        arr.splice(arr.indexOf('i'),1);
        return removeI(arr);
      }
};

let arrayToChange = ['One', 'i', 'c', 'X', 'i', 'i', 54];

console.log(removeI(arrayToChange));
