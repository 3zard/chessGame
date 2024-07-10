function Position (row, column) {
    if (this.contructor === Position) {
        throw new Error(`Cannot instantiate abstract class position`);
    }
    this.row = row;
    this.column = this.column;

    this.getRow = function () {
        return this.row;
    }
    this.getColumn = function () {
        return this.column;
    }
    this.setRow = function (row) {
        this.row = row;
    }
    this.setColumn = function (column) {
        this.column = column;
    }
}
