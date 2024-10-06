const { rl } = require('../src/cli');

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const lcm = (a, b) => (a * b) / gcd(a, b);
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const findLCM = (numbers) => numbers.reduce((acc, num) => lcm(acc, num));

const playLcmGame = async (playerName) => {
    console.log('Find the smallest common multiple of given numbers.');
    let correctCount = 0;

    for (let i = 0; i < 3; i++) {
        const numbers = [getRandomInt(1, 20), getRandomInt(1, 20), getRandomInt(1, 20)];
        const answer = findLCM(numbers);

        const userAnswer = await new Promise((resolve) => {
            rl.question(`Question: ${numbers.join(' ')}\nYour answer: `, resolve);
        });

        if (parseInt(userAnswer, 10) === answer) {
            console.log('Correct!');
            correctCount++;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. Let's try again, ${playerName}!`);
            return;
        }
    }
    console.log(`Congratulations, ${playerName}!`);
};

const generateProgression = (start, factor, length, missingIndex) => {
    const progression = [];
    for (let i = 0; i < length; i++) {
        progression.push(start * Math.pow(factor, i));
    }
    progression[missingIndex] = '..';
    return progression;
};

const playProgressionGame = async (playerName) => {
    console.log('What number is missing in the progression?');
    let correctCount = 0;

    for (let i = 0; i < 3; i++) {
        const start = getRandomInt(1, 10);
        const factor = getRandomInt(2, 5);
        const length = getRandomInt(5, 10);
        const missingIndex = getRandomInt(0, length - 1);
        const progression = generateProgression(start, factor, length, missingIndex);
        const correctAnswer = start * Math.pow(factor, missingIndex);

        const userAnswer = await new Promise((resolve) => {
            rl.question(`Question: ${progression.join(' ')}\nYour answer: `, resolve);
        });

        if (parseInt(userAnswer, 10) === correctAnswer) {
            console.log('Correct!');
            correctCount++;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${playerName}!`);
            return;
        }
    }
    console.log(`Congratulations, ${playerName}!`);
};

const chooseGame = async (playerName) => {
    const userChoice = await new Promise((resolve) => {
        rl.question('Choose a game (1: LCM, 2: Progression): ', resolve);
    });

    if (userChoice === '1') {
        await playLcmGame(playerName);
    } else if (userChoice === '2') {
        await playProgressionGame(playerName);
    } else {
        console.log('Invalid choice. Please select a valid game.');
        await chooseGame(playerName);
    }
};

module.exports = { chooseGame };