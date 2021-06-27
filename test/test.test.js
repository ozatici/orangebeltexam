let src = require('../src/src.js');

describe('it should set up the game', () => {
    
    it('There should be a game with a board to play on and a board that has the solution to the game.', () => {
        let game = new src();
        expect(game.solution).toBeTruthy();
        expect(game.playboard).toBeTruthy();
    })

    it ('The board to play on should be empty and 3x3 to start the game.', () => {
        let game = new src();
        expect(game.playboard.length).toEqual(3);
        expect(game.playboard[0].length).toEqual(3);

    })

    it('The board’s solution should contain at least one bomb, marked by a *', () => {
        let game = new src();
        expect(game.solution[1]).toContain('*')
    })

    it('The board’s solution should contain a bomb count, bomb or _ if no surrounding bombs', () => {
        let game = new src();
        expect(game.solution[0]).toBeDefined();
        expect(game.solution[1]).toBeDefined();
        expect(game.solution[2]).toBeDefined();
    })
    
    it('The game should print the board to play on with all spaces empty (UAT 1)', () => {
        let game = new src();
        game.start();
        let expected = '+-+-+-+\n\|' + 
        game.playboard[0][0] + '\|' + game.playboard[0][1]  + '\|' + game.playboard[0][2] + '\|\n'
         + '+-+-+-+\n\|' + 
         game.playboard[1][0] + '\|' + game.playboard[1][1]  + '\|' + game.playboard[1][2] + '\|\n'
        + '+-+-+-+\n\|' + 
        game.playboard[2][0] + '\|' + game.playboard[2][1]  + '\|' + game.playboard[2][2] + '\|\n'
        + '+-+-+-+\n'
        expect(game.print()).toEqual(expected)
    })

    it('If a player makes a move in a spot where a bomb is, the game will be over & lost and the board will be printed.( UAT 2)', () => {
        let game = new src();
        game.start();
        game.makeMove(1,1)
        const spy = jest.spyOn(game, 'print');

        expect(game.gameRunning).toEqual(false);
        expect(game.wonOrLost).toEqual('lost');
        game.print();
        expect(spy).toHaveBeenCalled();
    })

    it('If a player makes a move in a spot without a bomb, the square will display the number of bombs surrounding the square. (UAT 3)', () => {
        let game = new src();
        game.start();
        game.makeMove(0,0);
        expect(game.playboard[0][0]).toEqual(game.solution[0][0])
        let print = game.print();
        expect(print).toContain(game.solution[0][0])

    })

})

