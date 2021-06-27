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
        expect(game.solution[2]).toBeDefinied();
    })
    
    it('The game should print the board to play on with all spaces empty (UAT 1)', () => {
        let game = new src();
        game.start();
    })

})

