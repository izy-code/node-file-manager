import { resolve } from 'path';
import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { getCurrentDir } from '../../utils/directory-path.js';
import { getArgByNumber } from "../../utils/command-input.js";

export const cat = async (args) => {
    const argPath = getArgByNumber(args, 0);
    const resolvedPath = resolve(getCurrentDir(), argPath);
    const sourceStream = createReadStream(resolvedPath);

    await pipeline(sourceStream, process.stdout, { end: false });
};