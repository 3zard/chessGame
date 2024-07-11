class chessBoard {
    constructor() {
        //Get the chess board div in html file

        //Create an 8x8 board
        this.createChessBoard();
    }

    //Method create a chess board
    createChessBoard() {
        for (let row = 0; row < 8; row++) {
            for (let column = 0; column < 8; column++) {
                let checker = document.createElement('div');
                //...
            }
        }
    }
}