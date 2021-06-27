class Game {
  start() {
    console.log(this.print());
    this.gameRunning = true;
    console.log("[Sandbox 3x3] Game created");
  }

  makeMove(x, y) {
    this.playboard[x][y] = this.solution[x][y];
    this.print();
    this.checkForBomb(x, y);
  }

  checkForBomb(x, y) {
    if (this.solution[x][y] === "*") {
      this.gameRunning = false;
      this.wonOrLost = "lost";
      console.log("[Sandbox 3x3] BOOM! – Game Over.");
    }
  }

  print() {
    return (
      "+-+-+-+\n|" +
      this.playboard[0][0] +
      "|" +
      this.playboard[0][1] +
      "|" +
      this.playboard[0][2] +
      "|\n" +
      "+-+-+-+\n|" +
      this.playboard[1][0] +
      "|" +
      this.playboard[1][1] +
      "|" +
      this.playboard[1][2] +
      "|\n" +
      "+-+-+-+\n|" +
      this.playboard[2][0] +
      "|" +
      this.playboard[2][1] +
      "|" +
      this.playboard[2][2] +
      "|\n" +
      "+-+-+-+\n"
    );
  }

  constructor() {
    this.solution = [
      ["2", "2", "1"],
      ["*", "*", "2"],
      ["3", "*", "2"],
    ];
    this.playboard = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];
    this.gameRunning = false;
  }
}

module.exports = Game;
