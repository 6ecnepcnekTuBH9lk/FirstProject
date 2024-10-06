const { greetUser, closeInterface } = require('../src/cli');
const { chooseGame } = require('../games/games');

const startGame = async () => {
    const playerName = await greetUser();
    await chooseGame(playerName);
    closeInterface();
};

startGame();