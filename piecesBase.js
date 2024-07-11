class PiecesBase {
  constructor(name, color, position) {
    if (new.target === PiecesBase) {
      throw new Error("Cannot instantiate abstract class Player");
    }
    this.name = name;
    this.color = color;
    this.position = position;
  }
  isPossibleMove() {}
  move() {}
}

// const listOfPiecesChessName = {
//   rookLeft,
//   knightLeft,
//   bishopLeft,
//   queen,
//   king,
//   bishopRight,
//   knightRight,
//   rookRight,
// };

// const color = {
//   black,
//   white,
// };

// let position;

// function isPossibleMove() {}

// function move() {}
