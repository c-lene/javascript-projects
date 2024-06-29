// RECTANGLES - makeLine(size) function
function makeLine(size) {
    let line = "";
    for (let i = 0; i <= size; i++) {
        let hash = "#"
        line = hash.repeat(i);
    } 
    return line;
}
console.log(makeLine(5));
console.log("");



// RECTANGLES - makeSquare(size) function
function makeSquare(size) {
    let squareArray = [];
    let lineSquare = "";
    
    for (let i = 0; i < size; i++) {
        lineSquare = makeLine(size);
        squareArray.push(lineSquare);
    }
    return squareArray.join("\n");
}
console.log(makeSquare(5));
console.log("");



// RECTANGLES - makeRectangle(width, height) function
function makeRectangle(width, height) {
    let rectangleArray = [];
    let lineRectangle = "";

    for (let i = 0; i < height; i++) {
        lineRectangle = makeLine(width);
        rectangleArray.push(lineRectangle);
    }
    return rectangleArray.join("\n");
}
console.log(makeRectangle(5,3));
console.log("");




// TRIANGLES - makeDownwardStairs(height) function
function makeDownwardStairs(height) {
    let downwardStairs = "";

    for (let i = 0; i < height; i++) {
        downwardStairs += (makeLine(i+1) + "\n");
    }
    return downwardStairs;
}
console.log(makeDownwardStairs(5));





// TRIANGLES - makeSpaceLine(numSpaces, numChars) function
function makeSpaceLine(numSpaces, numChars) {
    let lineChar = "";
    let lineSpace = "";
    let spaces = "";

    for (let i = 0; i <= numChars; i++) {
        lineChar = makeLine(i);
    }

    for (let i = 0; i < numSpaces; i++) {
        spaces += " "; 
    }

    lineSpace = lineChar.padStart((numSpaces+numChars)," ").concat(spaces);
    return lineSpace;
}
console.log(makeSpaceLine(3, 5));
console.log("");





// TRIANGLES - makeIsoscelesTriangle(height) function
function makeIsoscelesTriangle(height) {
    let lineTriangle = "";
        
    for (let i = 0; i < height; i++) {
        lineTriangle += makeSpaceLine((height - i - 1), (2 * i + 1)) + "\n";
    }
    return lineTriangle;
}
//console.log(makeIsoscelesTriangle(5));




// DIAMONDS - makeDiamond(height) function
function makeDiamond(height) {
    let lineDiamond = "";

    for (let i = 0; i < height; i++) {
        lineDiamond = makeIsoscelesTriangle(height);
    }
    diamond = lineDiamond + lineDiamond.split("").reverse().join("");
    return diamond;
}
console.log(makeDiamond(5));