import { createInterface } from 'readline/promises';
import { printWelcomeMessage, printFarewellMessage } from './utils/user.js';

const init = () => {
    printWelcomeMessage();

    const readline = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    readline.on('close', printFarewellMessage);
    // readline.on('line', async (input) => await handleInput(input));
};

init();
