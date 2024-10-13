import { EOL } from 'os';

export const COMMANDS = {
    EXIT: { name: '.exit', argCount: 0 },
    UP: { name: 'up', argCount: 0 },
    CD: { name: 'cd', argCount: 1 },
    LS: { name: 'ls', argCount: 0 },
    CAT: { name: 'cat', argCount: 1 },
    ADD: { name: 'add', argCount: 1 },
    RN: { name: 'rn', argCount: 2 },
    CP: { name: 'cp', argCount: 2 },
    MV: { name: 'mv', argCount: 2 },
    RM: { name: 'rm', argCount: 1 },
    OS: { name: 'os', argCount: 1 },
    HASH: { name: 'hash', argCount: 1 },
    COMPRESS: { name: 'compress', argCount: 2 },
    DECOMPRESS: { name: 'decompress', argCount: 2 },
};

export const trimQuotes = (path) => {
    if (!path) {
        return '';
    } else {
        return path.trim().replace(/^[`"']|[`"']$/g, '');
    }
};

export const getArgByNumber = (args, number) => {
    let argument = args[argNumber] || '';

    return trimQuotes(argument);
};

export const checkArgCount = (inputCommandName, args) => {
    const foundCommand = Object.entries(COMMANDS).find(
        ([key, { name }]) => name === inputCommandName
    );

    if (foundCommand) {
        const [key, { argCount: expectedArgCount }] = foundCommand;

        if (args.length !== expectedArgCount) {
            throw new Error(`Invalid input.${EOL}Command "${inputCommandName}" requires ${expectedArgCount} argument(s).`);
        }
    }
};
