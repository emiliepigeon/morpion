// STATEMENT
let singlePlayer ="x";
let endGame= false;
let winGame = [
  [1, 2, 3, 4, 5], [6, 7, 8, 9, 10], 
  [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], 
  [21, 22, 23, 24, 25], [1, 6, 11, 16, 21], 
  [2, 7, 12, 17, 22], [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24], [5, 10, 15, 20, 25],
  [1, 7, 13, 19, 25], [5, 9, 13, 17, 21]
];
// LOOP
  for (let i = 1; i <= 25; i++) {
    document.getElementById(i.toString()).addEventListener(
      "click", 
      function() {
        if (this.innerHTML === "" && !endGame) {
          this.innerHTML = singlePlayer;
          this.classList.add(singlePlayer.toLowerCase());
          checkWin();
          if (singlePlayer === "x")
          singlePlayer = "o"
          else
          singlePlayer = "x"
        }
      }
    );
  }
// FUNCTION TO CLICK on the BOX
  function checkWin() {
    for (let i = 0; i < winGame.length; i++) {
        // LOOP
      if (
        document.getElementById(winGame[i][0]).innerHTML === singlePlayer &&
        document.getElementById(winGame[i][1]).innerHTML === singlePlayer &&
        document.getElementById(winGame[i][2]).innerHTML === singlePlayer &&
        document.getElementById(winGame[i][3]).innerHTML === singlePlayer &&
        document.getElementById(winGame[i][4]).innerHTML === singlePlayer
      ) {
        document.getElementById(winGame[i][0]).classList.add("ok");
        document.getElementById(winGame[i][1]).classList.add("ok");
        document.getElementById(winGame[i][2]).classList.add("ok");
        document.getElementById(winGame[i][3]).classList.add("ok");
        document.getElementById(winGame[i][4]).classList.add("ok"); 
        gameEnded = true;
        setTimeout(function() {
            alert(singlePlayer + "Vous avez gagné!") 
          }, 200);
      }
    }
  }
// FUNCTION TO CLICK on the BUTTON RESET
document.getElementById("reset").addEventListener(
  "click", 
  function gameReset() {
//LOOP
    for (let i = 1; i <= 25; i++) {
      document.getElementById(i.toString()).innerHTML = "";
      document.getElementById(i.toString()).classList.remove("x");
      document.getElementById(i.toString()).classList.remove("o");
      document.getElementById(i.toString()).classList.remove("ok");
      endGame = false; //RESTART PLAY AGAIN
    }
  }
);