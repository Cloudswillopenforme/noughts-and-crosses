
function NoughtsAndCrosses(options) {

    let table = this._table = options.table;
    let cancelButton = this._cancelButton = options.cancelButton;
    let greeting = this._greeting = options.greeting;

    table.addEventListener("click", this._addNoughtsOrCrosses.bind(this));
    cancelButton.addEventListener("click", this._clearField.bind(this));


    this.counter = options.counter;

    this._cells = [];

    for (let row of this._table.rows) {
        for (let cell of row.cells) {
            this._cells.push(cell);
        }
    }

}


    NoughtsAndCrosses.prototype._addNoughtsOrCrosses = function(event) {


        if (event.target.closest("td") && this.counter%2 !== 0 && event.target.innerHTML === "") {
            event.target.innerHTML = "&#10005";
            this.counter++;
        } else if(event.target.innerHTML === "") {
            event.target.innerHTML = "&#9711";
            this.counter++;
        }

        this._checkIfWin();
    };

    NoughtsAndCrosses.prototype._checkIfWin = function() {

        const cells = this._cells;

        const winningLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winningLines.length; i++) {
            let [a, b, c] = winningLines[i];
            if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
                this._win();
                return cells[a].innerHTML;
            }

        }

    };

    NoughtsAndCrosses.prototype._win = function() {

        this._greeting.style.visibility = "visible";

    };


    NoughtsAndCrosses.prototype._clearField = function() {
             this.counter = 0;

             for (let cell of this._cells) {
                 cell.innerHTML = "";
             }

             this._greeting.style.display = "";
    };


let newGame = new NoughtsAndCrosses({
    table: document.querySelector(".table"),
    cancelButton: document.querySelector(".cancelButton"),
    greeting: document.querySelector(".greeting"),
    counter: 0,
});


// cross = &#10005
// circle = &#9711