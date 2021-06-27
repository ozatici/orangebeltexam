class Game {
  start() {
    console.log(this.print());
    this.gameRunning = true;
    console.log("[Sandbox 3x3] Game created");
  }

  makeMove(x, y, checkForBomb) {

    this.playboard[x][y] = this.solution[x][y];
    this.print();

    if(checkForBomb) {
        if (this.solution[x][y] === "*") {
            this.gameRunning = false;
            this.wonOrLost = "lost";
            console.log("[Sandbox 3x3] BOOM! – Game Over.");
            return;
          }
    }
    let intersection = this.playboard.filter(x => this.solution.includes(x));

    if (!this.containsInt(intersection)) {
        this.gameRunning = false;
        this.wonOrLost = 'won';
        console.log("hit here")
    }

  }


  containsInt(arr) {
      for (let i of arr){
          if (typeof i === number) {
              return true;
          }
      }
      return false;
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

    this.playboard = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];
    this.gameRunning = false;
  }
}

module.exports = Game;
