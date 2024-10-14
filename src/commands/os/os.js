import { EOL, homedir, userInfo } from 'os';
import { getColoredText } from '../../utils/color-output.js';
import { getCpuInfo } from './cpu-info.js';

export const executeOsCommand = (args) => {
    switch (args[0]) {
        case '--EOL':
            console.log('Default system End-Of-Line:', getColoredText('GREEN', JSON.stringify(EOL)));
            break;
        case '--cpus':
            getCpuInfo()
            break;
        case '--homedir':
            console.log('Home directory:', getColoredText('GREEN', homedir()));
            break;
        case '--username':
            console.log('System user name:', getColoredText('GREEN', userInfo().username));
            break;
        case '--architecture':
            console.log('CPU architecture:', getColoredText('GREEN', process.arch));
            break;
        default:
            throw new Error(`Invalid input. Command "os" doesn't support argument "${args[0]}"`);
            break;
    }
};