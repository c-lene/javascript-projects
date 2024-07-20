// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, ISBN, numPages, numCheckedOut, discardBook) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.ISBN = ISBN;
        this.numPages = numPages;
        this.numCheckedOut = numCheckedOut;
        this.discardBook = discardBook;
    }
}


// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, ISBN, numPages, numCheckedOut, discardBook) {
        super(title, author, copyrightDate, ISBN, numPages, numCheckedOut, discardBook);
    }
    
    // Adding Method to Discard Manual if > 5 years
    manualDiscard(currentYear) {
        if ((currentYear - this.copyrightDate) > 5) {
            this.discardBook = "Yes"
            return `${this.discardBook}, "${this.title}" is MOVER THAN 5 years old and should be discarded!\n`;
        } else {
            this.discardBook = "No";
            return `${this.discardBook}, "${this.title}" is LESS THAN 5 years old should NOT be discard!\n`;
        }
    }
}


class Novel extends Book {
    constructor(title, author, copyrightDate, ISBN, numPages, numCheckedOut, discardBook) {
        super(title, author, copyrightDate, ISBN, numPages, numCheckedOut, discardBook);
        
    }

    // Adding Method to Discard Novel if checked out > 100 times
    novelDiscard() {
        if (this.numCheckedOut > 100) {
            this.discardBook = "Yes";
            return `${this.discardBook}, "${this.title}" should be discard. The novel has been checked out MORE THAN 100 times!\n`;
        } else {
            this.discardBook = "No";
            return `${this.discardBook}, "${this.title}" should NOT be discard. The novel has been checked out LESS THAN 100 times!\n`;
        }
    }

    novelUpdateCheckOut(updateNumCheckOut) {
        this.numCheckedOut = this.numCheckedOut + updateNumCheckOut;
        return `"${this.title}" has been checked out ${updateNumCheckOut} more times since last time!`;
    }
}


// Declare the objects for exercises 2 and 3 here:
let pridePredjudice = new Novel("Pride and Predjudice", "Jane Austen", 1813, "1111111111111", 432, 32, "No");
let shuttleBuilding = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, "No");

console.log(pridePredjudice);
console.log(shuttleBuilding);

// Code exercises 4 & 5 here:
// Exercises 4 - Discard manual due to older than 5 years
console.log(shuttleBuilding.manualDiscard(2024));
console.log(shuttleBuilding);


// Exercise 5 - Update book has been checked out 5 times since created Object
pridePredjudice.novelUpdateCheckOut(5);
pridePredjudice.novelDiscard();
console.log(pridePredjudice);
