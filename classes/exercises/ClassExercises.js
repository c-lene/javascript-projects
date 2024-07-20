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
    constructor() {
        super();
        if (this.copyrightDate < (2024 - 5)) {
            this.discardBook = "should be discarded"
            return `"${this.title}" is over 5 years old, ${this.discardBook}!`;
        }
    }
}


class Novel extends Book {
    constructor() {
        super();
        if (this.numCheckedOut > 100) {
            this.discardBook = "should be Thrown OUT!";
            return `"${this.title}" has been checked out over 100 times, ${this.discardBook}!`;
        }
    }
}


// Declare the objects for exercises 2 and 3 here:
let pridePredjudice = new Novel("Pride and Predjudice", "Jane Austen", 1813, "1111111111111", 432, 32, "No");
let shuttleBuilding = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, "No");

console.log(pridePredjudice);

// Code exercises 4 & 5 here: