let src = require('../src/src.js');

describe('it should set up the game', () => {
    
    it('There should be a game with a board to play on and a board that has the solution to the game.', () => {
        let game = new src();
        game.setSolution([
            ["_", "1", "*"],
            ["_", "1", "1"],
            ["_", "_", "_"],
        ])

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
        game.setSolution([
            ["2", "2", "1"],
            ["*", "*", "2"],
            ["3", "*", "2"],
          ])

        expect(game.solution[1]).toContain('*')
    })

    it('The board’s solution should contain a bomb count, bomb or _ if no surrounding bombs', () => {
        let game = new src();
        game.setSolution([
            ["2", "2", "1"],
            ["*", "*", "2"],
            ["3", "*", "2"],
          ])
        expect(game.solution[0]).toBeDefined();
        expect(game.solution[1]).toBeDefined();
        expect(game.solution[2]).toBeDefined();
    })
    
    it('The game should print the board to play on with all spaces empty (UAT 1)', () => {
        let game = new src();
        game.setSolution([
            ["2", "2", "1"],
            ["*", "*", "2"],
            ["3", "*", "2"],
          ])
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
        game.setSolution([
            ["2", "2", "1"],
            ["*", "*", "2"],
            ["3", "*", "2"],
          ])
        game.makeMove(1,1, true)
         const spy = jest.spyOn(game, 'print');

        expect(game.gameRunning).toEqual(false);
        expect(game.wonOrLost).toEqual('lost');
        game.print();
        expect(spy).toHaveBeenCalled();
    })

    it('If a player makes a move in a spot without a bomb, the square will display the number of bombs surrounding the square. (UAT 3)', () => {
        let game = new src();
        game.start();
        game.setSolution([
            ["2", "2", "1"],
            ["*", "*", "2"],
            ["3", "*", "2"],
          ])
        game.makeMove(0,2, true);
        expect(game.playboard[0][2]).toEqual(game.solution[0][2])
        let print = game.print();
        expect(print).toContain(game.solution[0][2])

    })

    it('A player can mark a spot as a bomb if they know there is a bomb there, and the game will continue. (UAT 4)', () => {
        let game = new src();
        game.start();
        game.setSolution([
            ["2", "2", "1"],
            ["*", "*", "2"],
            ["3", "*", "2"],
          ])
        game.markBomb(0,1);
        game.markBomb(1,1);
        game.markBomb(1,2);
        expect(game.gameRunning).toEqual(true)
    })


    xit('If a player makes a move on a square without any neighboring bombs, the squares around it should be automatically opened, recursively. If no bombs are hit, the game is won (UAT 6)', () => {
        let game = new src();
        game.start();
        game.setSolution([
            ["_", "1", "*"],
            ["_", "1", "1"],
            ["_", "_", "_"],
        ])
        game.makeMove(2,0, true);
        expect(game.gameRunning).toEqual(false);
        expect(game.wonOrLost).toEqual('won')
    })

    it('A player should keep making moves that open squares OR mark them as bombs. If the whole board is opened, game over and won(UAT 5)', () => {
        let game = new src();
        game.start();
        game.setSolution([
            ["2", "2", "1"],
            ["*", "*", "2"],
            ["3", "*", "2"],
        ])
        game.makeMove(0,0, true);
        game.makeMove(0,1, true);
        game.makeMove(0,2, true);
        game.makeMove(1,2, true);
        game.makeMove(2,0, true);
        game.makeMove(2,2, true);

        expect(game.gameRunning).toEqual(false)
        expect(game.wonOrLost).toEqual('won')

    })
})

