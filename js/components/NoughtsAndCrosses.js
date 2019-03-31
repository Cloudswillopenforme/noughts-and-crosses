
export default class NoughtsAndCrosses {

    constructor({table, cancelButton, greeting, counter, winningLines, winningTurn, nameOfLine}) {

        this._props = {
            table,
            cancelButton,
            greeting,
            counter,
            winningLines,
            winningTurn,
            nameOfLine,
        };


        this._props.table.addEventListener("click", this._addNoughtsOrCrosses.bind(this));
        this._props.cancelButton.addEventListener("click", this._clearField.bind(this));

        this._cells = [];
        for (let row of this._props.table.rows) {
            for (let cell of row.cells) {
                this._cells.push(cell);
            }
        }
    }


    _addNoughtsOrCrosses(event) {


        if (event.target.closest("td") && this._props.counter % 2 !== 0 && event.target.innerHTML === "") {
            event.target.innerHTML = "&#9711";
            this._props.counter++;
        } else if (event.target.innerHTML === "") {
            event.target.innerHTML = "&#10005";
            this._props.counter++;
        }

        this._checkIfWin();

    };

    _checkIfWin() {

        const cells = this._cells;


        for (let i = 0; i < this._props.winningLines.length; i++) {
            let [a, b, c] = this._props.winningLines[i];
            if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
                this._props.winningTurn = [a, b, c];
                this._win();
                return cells[a].innerHTML;

            }

        }

    };

    _win() {
        this._props.greeting.style.visibility = "visible";
        document.querySelector(".noughts-and-crosses").style.pointerEvents = "none";

        switch (this._props.winningTurn.join()) {
            case "0,1,2" :
                document.querySelector(".winningLine1").style.display = "block";
                this._props.nameOfLine = ".winningLine1";
                break;
            case "3,4,5" :
                document.querySelector(".winningLine2").style.display = "block";
                this._props.nameOfLine = ".winningLine2";
                break;
            case "6,7,8" :
                document.querySelector(".winningLine3").style.display = "block";
                this._props.nameOfLine = ".winningLine3";
                break;
            case "0,3,6" :
                document.querySelector(".winningLine4").style.display = "block";
                this._props.nameOfLine = ".winningLine4";
                break;
            case "1,4,7" :
                document.querySelector(".winningLine5").style.display = "block";
                this._props.nameOfLine = ".winningLine5";
                break;
            case "2,5,8" :
                document.querySelector(".winningLine6").style.display = "block";
                this._props.nameOfLine = ".winningLine6";
                break;
            case "0,4,8" :
                document.querySelector(".winningLine7").style.display = "block";
                this._props.nameOfLine = ".winningLine7";
                break;

            case "2,4,6" :
                document.querySelector(".winningLine8").style.display = "block";
                this._props.nameOfLine = ".winningLine8";

                break;
        }

    }


    _clearField() {
        this._props.counter = 0;
        document.querySelector(".noughts-and-crosses").style.pointerEvents = "all";

        for (let cell of this._cells) {
            cell.innerHTML = "";
        }

        this._props.greeting.style.visibility = "hidden";
        if (this._props.nameOfLine) {
            document.querySelector(`${this._props.nameOfLine}`).style.display = "none";
            this._props.winningTurn = "";}

    };

}