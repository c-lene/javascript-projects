function whoWon(player1,player2){

  // When BOTH players choose the SAME 
  if (player1 === player2){
     return 'TIE!';
   }
   
   // Choices that allows Player 2 WINS
   if (player1 === 'rock' && player2 === 'paper'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'paper' && player2 === 'scissors'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'scissors' && player2 === 'rock'){
     return 'Player 2 wins!';
   }

   // Choices that allows Player 1 wins
   if (player2 === 'rock' && player1 === 'paper'){
    return 'Player 1 wins!';
  }

  if (player2 === 'paper' && player1 === 'scissors'){
    return 'Player 1 wins!';
  }

  if (player2 === 'scissors' && player1 === 'rock'){
    return 'Player 1 wins!';
  }

   return 'INVALID play, select only rock, paper, scissors!';
 }


 
 module.exports = whoWon;