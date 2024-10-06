const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const greetUser = () => {
    return new Promise((resolve) => {
        console.log('Welcome to the Brain Games! May I have your name?');

        rl.question('Your name: ', (name) => {
            console.log(`Hello, ${name}!`);
            resolve(name);
        });
    });
};

const closeInterface = () => {
    rl.close();
};

module.exports = { greetUser, closeInterface, rl };