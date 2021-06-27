class Game {
    start() {
       console.log(this.printStart());

    }

    printStart() {
        let output = '+-+-+-+\n\|' + 
        this.playboard[0][0] + '\|' + this.playboard[0][1]  + '\|' + this.playboard[0][2] + '\|\n'
         + '+-+-+-+\n\|' + 
         this.playboard[1][0] + '\|' + this.playboard[1][1]  + '\|' + this.playboard[1][2] + '\|\n'
        + '+-+-+-+\n\|' + 
        this.playboard[2][0] + '\|' + this.playboard[2][1]  + '\|' + this.playboard[2][2] + '\|\n'
        + '+-+-+-+\n' +
        '[Sandbox 3x3] Game created';
        return output;

    }

    constructor() {
        this.solution = [
            ['2','2','1'],
        ['*','*','2'],
        ['3','*','2']];
        this.playboard = [
            [' ',' ',' '],
            [' ',' ',' '],
            [' ',' ',' ']];
    }

}

module.exports = Game;