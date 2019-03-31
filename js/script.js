
import NoughtsAndCrosses from "./components/NoughtsAndCrosses.js";

let newGame = new NoughtsAndCrosses({
    table: document.querySelector(".table"),
    cancelButton: document.querySelector(".cancelButton"),
    greeting: document.querySelector(".greeting"),
    counter: 0,
    winningLines: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ],
    winningTurn: null,
    nameOfLine: null,
});


// cross = &#10005
// circle = &#9711