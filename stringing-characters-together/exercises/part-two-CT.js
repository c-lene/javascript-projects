//Part Two Section One

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";

// First, print out the dna strand in it's current state.

//1) Use the .trim() method to remove the leading and trailing whitespace, then print the result.

console.log(dna.trim());                                                  // Uses ".trim()" to remove whitespaces in the print out 'dna' WITHOUT creating a new variable


//2) Change all of the letters in the dna string to UPPERCASE, then print the result.

console.log(dna.toUpperCase());                                          // Uses ".toUpperCase()" to convert string to UPPERCASE in Print out 'dna' without creating a new variable


//3) Note that after applying the methods above, the original, flawed string is still stored in dna. To fix this, we need to reassign the changes to back to dna.
//Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.

dna = dna.trim().toUpperCase();                                         // Uses Method Chaining to combine ".trim()" & ".toUpperCase()" methods                         
console.log(dna);                                                       // Prints out 'dna' string with whitespaces removed & all UPPERCASE




//Part Two Section Two

let dnaTwo = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//1) Replace the gene "GCT" with "AGG", and then print the altered strand.
let dnaTwoAltered = dnaTwo.replace('GCT', 'AGG');                       // Using ".replace()" method to replace "GCT" with "AGG"
console.log(dnaTwoAltered);


//2) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".

if (dnaTwo.indexOf('CAT') > 0) {                                        // Using ".indexOf('CAT')" results in 40 - meaning "CAT" starts at 40 position
    console.log("CAT gene found");
} else {
    console.log("CAT gene NOT found");
}


//3) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.
console.log(dnaTwo.slice(16, 19));                                      // The 5th gene in 'dnaTwo' is "CGT"


//4) Use a template literal to print, "The DNA strand is ___ characters long."
console.log(`The DNA is ${dnaTwo.length} characters long.`);            // 'dnaTwo' has a length of 51 characters (including "-")


//5) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
console.log(`${dna.slice(4, 7).toLowerCase()}o ${dna.slice(40, 43).toLowerCase()}`);