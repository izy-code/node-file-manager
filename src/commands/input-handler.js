import { EOL } from 'os';
import { checkArgCount, COMMANDS } from "../utils/command-input.js";
import { printColoredText } from "../utils/color-output.js";
import { printFarewellMessage } from '../utils/user.js';
import { printCurrentDirectory } from "../utils/directory-path.js";
import { up } from "./navigation/up.js";
import { cd } from './navigation/cd.js';
import { ls } from './navigation/ls.js';
import { cat } from './file-system/cat.js';
import { add } from './file-system/add.js';
import { rn } from './file-system/rn.js';
import { cp } from './file-system/cp.js';
import { rm } from './file-system/rm.js';
import { mv } from './file-system/mv.js';
import { executeOsCommand } from './os/os.js';
import { calculateHash } from './hash/hash.js';

export const handleInput = async (line) => {
    try {
        const args = line.match(/([`"']).*?\1|\S+/g) || [];
        const command = args.shift();

        checkArgCount(command, args);

        switch (command) {
            case undefined:
                break;
            case COMMANDS.EXIT.name:   
                printFarewellMessage();
                process.exit(0);
                break;
            case COMMANDS.UP.name:
                up();
                break;
            case COMMANDS.CD.name:
                cd(args);
                break;
            case COMMANDS.LS.name:
                await ls();
                break;
            case COMMANDS.CAT.name:
                await cat(args);
                break;
            case COMMANDS.ADD.name:
                await add(args);
                break;
            case COMMANDS.RN.name:
                await rn(args);
                break;
            case COMMANDS.CP.name:
                await cp(args);
                break;
            case COMMANDS.MV.name:
                await mv(args);
                break;
            case COMMANDS.RM.name:
                await rm(args);
                break;
            case COMMANDS.OS.name:
                executeOsCommand(args);
                break;
            case COMMANDS.HASH.name:
                await calculateHash(args);
                break;
            // case COMMANDS.COMPRESS.name:
            //     await compress(args);
            //     break;
            // case COMMANDS.DECOMPRESS.name:
            //     await decompress(args);
            //     break;
            default:
                printColoredText('RED', `Invalid input. Command "${command}" not supported.`);
                break;
        }
    } catch (err) {
        if (err.message.startsWith('Invalid input.')) {
            printColoredText('RED', err.message);
        } else {
            printColoredText('RED', `Operation failed.${EOL}${err.message}`);
        }        
    }

    printCurrentDirectory();
};
