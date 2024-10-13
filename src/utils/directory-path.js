import { chdir, cwd } from 'process';
import { homedir, EOL } from 'os';
import { getColoredText } from "./color-output.js";

export const setStartingDir = () => chdir(homedir());

export const getCurrentDir = () => cwd();

export const printCurrentDirectory = () => {
    const coloredPath = getColoredText('YELLOW', getCurrentDir());

    console.log(`${EOL}You are currently in ${coloredPath}`);
}