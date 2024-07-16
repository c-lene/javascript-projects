const whoWon = require('../RPS.js');

describe("whoWon", function() {

    test("checks when BOTH Players TIE (both choose the same option)", function() {
        let choices = whoWon('rock','rock');
        expect(choices).toBe('TIE!');
    });

    test("checks when Players 2 wins ('paper' vs 'scissors')", function() {
        let choices = whoWon('paper', 'scissors');
        expect(choices).toBe('Player 2 wins!');
    });

    test("checks when Players 2 wins ('scissors' vs 'rock')", function() {
        let choices = whoWon('scissors', 'rock');
        expect(choices).toBe('Player 2 wins!');
    });

    test("checks when Players 2 wins ('rock' vs 'paper')", function() {
        let choices = whoWon('rock', 'paper');
        expect(choices).toBe('Player 2 wins!');
    });

    test("checks when Players 1 wins", function() {
        let choices = whoWon('rock', 'scissors');
        expect(choices).toBe('Player 1 wins!');
    });

    test("checks when EITHER Players selects something others than 'rock', 'paper', or 'scissors'", function() {
        let choices = whoWon('rock', 'candy');
        expect(choices).toBe('INVALID play, select only rock, paper, scissors!');
    });

});