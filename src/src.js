class Game {
  start() {
    console.log(this.print());
    this.gameRunning = true;
    console.log("[Sandbox 3x3] Game created");
  }

  makeMove(x, y, checkForBomb) {
    console.log("solution is" + this.solution)

    this.playboard[x][y] = this.solution[x][y];
    this.print();

    if(checkForBomb) {
        if (this.solution[x][y] === "*") {
            console.log("hit here")
            this.gameRunning = false;
            this.wonOrLost = "lost";
            console.log("[Sandbox 3x3] BOOM! – Game Over.");
          }
    }
    this.recurse(x,y);
    console.log("playboard is" + this.playboard)

    if (this.playboard == this.solution) {
        this.gameRunning = false;
        this.wonOrLost = 'won';
    }

  }

  checkForBomb(x, y) {
    
  }

  recurse(x,y){
    if (this.solution[x][y] === '_') {
        if (x-1 >= 0 && y - 1 >=0) {
            this.makeMove(x-1, y-1, false);
        }
        if (x -1 >= 0) {
            this.makeMove(x-1,y, false);
        }
        if (y - 1 >= 0) {
            this.makeMove(x, y-1, false);
        }
        if (x + 1 <= 2 && y + 1 <=2) {
            this.makeMove(x+1, y+1, false);
        }

        if (x + 1 <= 2) {
            this.makeMove(x+1, y, false);

        }
        if (y + 1 <= 2) {
            this.makeMove(x, y+1, false);

        }
    }

  }

  markBomb(x,y) {
    this.playboard[x][y] = this.solution[x][y];
    this.print();
  }

  setSolution(solution) {
      this.solution = solution;
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
    // this.solution = [
    //   ["2", "2", "1"],
    //   ["*", "*", "2"],
    //   ["3", "*", "2"],
    // ];
    this.playboard = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];
    this.gameRunning = false;
  }
}

module.exports = Game;
