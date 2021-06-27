# orangebeltexam

sonarqube: https://sonarcloud.io/dashboard?id=ozatici_orangebeltexam


MVP 1:
There should be a game with a board to play on and a board that has the solution to the game. 
The board to play on should be empty and 3x3 to start the game.
The board’s solution should contain at least one bomb, marked by a *
The board’s solution should contain a bomb count, bomb or _ if no surrounding bombs.

MVP2:

The game should print the board to play on with all spaces empty (UAT 1)
If a player makes a move in a spot where a bomb is, the game will be over & lost.( UAT 2)
If a player makes a move in a spot without a bomb, the square will display the number of bombs surrounding the square. (UAT 3)

MVP 3:
A player can mark a spot as a bomb if they know there is a bomb there, and the game will continue. (UAT 4)
If a player makes a move on a square without any neighboring bombs, the squares around it should be automatically opened, recursively. (UAT 6)
A player should keep making moves that open squares OR mark them as bombs. If the whole board is opened, game over and won(UAT 5)



NOTES as of final pomodoro:

there is one unit test that i ran out of time to finish. It would probably take an additional pomodoro. I also think another pomodoro owuld be needed to get my code in tip top refactored shape