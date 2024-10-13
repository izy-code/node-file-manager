import { createInterface } from 'readline/promises';
import { printWelcomeMessage, printFarewellMessage } from './utils/user.js';
import { handleInput } from './commands/input-handler.js';
import { printCurrentDirectory, setStartingDir } from './utils/directory-path.js';
import { getColoredText } from './utils/color-output.js';

const init = () => {
    const readline = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: getColoredText('BLUE', '> '),
    });

    printWelcomeMessage();
    setStartingDir();
    printCurrentDirectory();
    readline.prompt();

    readline.on('close', printFarewellMessage);
    readline.on('line', async (input) => {
        await handleInput(input);
        readline.prompt();
    });
};

init();
