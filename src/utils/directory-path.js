import { homedir, EOL } from 'os';
import { getColoredText } from "./color-output.js";

export const setStartingDir = () => process.chdir(homedir());

export const getCurrentDir = () => process.cwd();

export const printCurrentDirectory = () => {
    const coloredPath = getColoredText('YELLOW', getCurrentDir());

    console.log(`${EOL}You are currently in ${coloredPath}`);
}