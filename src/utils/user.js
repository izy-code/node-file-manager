import { getColoredText } from "./color-output.js";

const USERNAME_ARG = 'username';
const DEFAULT_USERNAME = 'Anonymous';

const getArgValue = (argName) => {
    const args = process.argv.slice(2);
    const foundArg = args.find((arg) => arg.startsWith(`--${argName}=`));

    return foundArg ? foundArg.split('=')[1] : null;
};

const getUsername = () => {
    const username = getArgValue(USERNAME_ARG);

    return username || DEFAULT_USERNAME;
};

export const printWelcomeMessage = () => {
    const username = getUsername();
    const coloredUsername = getColoredText('green', username);

    if (username === DEFAULT_USERNAME) {
        console.log('No username specified. Using default username: %s.', coloredUsername);
    }

    console.log('Welcome to the File Manager, %s!', coloredUsername);
}

export const printFarewellMessage = () => {
    const coloredUsername = getColoredText('green', getUsername());

    console.log('Thank you for using File Manager, %s, goodbye!', coloredUsername);
}