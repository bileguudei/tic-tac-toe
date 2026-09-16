// document.body.addEventListener("click", function () {
//   console.log("clicked body");
// });

let squares = document.getElementsByClassName("square");
let currentPlayer = "X";
let Xcount = document.getElementById("playerX-Score");
let Ycount = document.getElementById("playerO-Score");
let DrawCount = document.getElementById("draw-Score");
let countX = 0;
let countO = 0;
let countDraw = 0;

function reset() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
  currentPlayer = "X";
}

function bugluh() {
  if (this.textContent == "X" || this.textContent == "O") {
    return; // X esvl O buglusun
  }
  this.textContent = currentPlayer;
  currentPlayer = currentPlayer === "X" ? "O" : "X";

  for (let i = 0; i < 9; i = i + 3) {
    if (
      squares[i].textContent == "X" &&
      squares[i + 1].textContent == "X" &&
      squares[i + 2].textContent == "X"
    ) {
      alert("X win");
      reset();
      countX++;
      Xcount.textContent = countX;
    }

    if (
      squares[i].textContent == "O" &&
      squares[i + 1].textContent == "O" &&
      squares[i + 2].textContent == "O"
    ) {
      countO++;
      Ycount.textContent = countO;
      alert("O win");
      reset();
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      squares[i].textContent == "X" &&
      squares[i + 3].textContent == "X" &&
      squares[i + 6].textContent == "X"
    ) {
      alert("X win");
      reset();
      countX++;
      Xcount.textContent = countX;
    }

    if (
      squares[i].textContent == "O" &&
      squares[i + 3].textContent == "O" &&
      squares[i + 6].textContent == "O"
    ) {
      countO++;
      Ycount.textContent = countO;
      alert("O win");
      reset();
    }
  }

  if (
    (squares[0].textContent == "X" &&
      squares[4].textContent == "X" &&
      squares[8].textContent == "X") ||
    (squares[2].textContent == "X" &&
      squares[4].textContent == "X" &&
      squares[6].textContent == "X")
  ) {
    alert("X win");
    reset();
    countX++;
    Xcount.textContent = countX;
  }

  if (
    (squares[0].textContent == "O" &&
      squares[4].textContent == "O" &&
      squares[8].textContent == "O") ||
    (squares[2].textContent == "O" &&
      squares[4].textContent == "O" &&
      squares[6].textContent == "O")
  ) {
    countO++;
    Ycount.textContent = countO;
    alert("O win");
    reset();
  }

  let isDraw = true;

  for (let i = 0; i < squares.length; i++) {
    if (squares[i].textContent == "") {
      isDraw = false;
      break;
    }
  }

  if (isDraw) {
    countDraw++;
    DrawCount.textContent = countDraw;
    alert("Draw");
    reset();
  }
}

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", bugluh);
}

// 1 4 7, 1 2 3, 3 6 9, 7 8 9, 1 5 9,

// let squares = document.getElementsByClassName("square");
// let currentPlayer = "X";

// let Xcount = document.getElementById("playerX-Score");
// let Ocount = document.getElementById("playerO-Score");
// let DrawCount = document.getElementById("draw-Score");

// let countX = 0;
// let countO = 0;
// let Draw = 0;

// let winPatterns = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];

// function reset() {
//   for (let i = 0; i < squares.length; i++) {
//     squares[i].textContent = "";
//   }
//   currentPlayer = "X";
// }

// function bugluh() {
//   if (this.textContent !== "") return;

//   this.textContent = currentPlayer;

//   currentPlayer = currentPlayer === "X" ? "O" : "X";

//   for (let i = 0; i < winPatterns.length; i++) {
//     let [a, b, c] = winPatterns[i];

//     if (
//       squares[a].textContent !== "" &&
//       squares[a].textContent === squares[b].textContent &&
//       squares[a].textContent === squares[c].textContent
//     ) {
//       let winner = squares[a].textContent;

//       alert(winner + " win");

//       if (winner === "X") {
//         countX++;
//         Xcount.textContent = countX;
//       } else {
//         countO++;
//         Ocount.textContent = countO;
//       }

//       reset();
//       return;
//     }
//   }

//   let isDraw = true;

//   for (let i = 0; i < squares.length; i++) {
//     if (squares[i].textContent === "") {
//       isDraw = false;
//       break;
//     }
//   }

//   if (isDraw) {
//     Draw++;
//     DrawCount.textContent = Draw;
//     alert("Draw");
//     reset();
//   }
// }

// for (let i = 0; i < squares.length; i++) {
//   squares[i].addEventListener("click", bugluh);
// }
