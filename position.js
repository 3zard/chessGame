class Position {
    constructor(row, column) {
        if (new.target === Position) {
            throw new Error("Cannot instantiate abstract class Position")
        }
        this.row = row
        this.column = column
    }
}
