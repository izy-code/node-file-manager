
import { resolve } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { getArgByNumber } from "../../utils/command-input.js";
import { getCurrentDir } from '../../utils/directory-path.js';

export const useBrotli = async (args, isCompress = true) => {
    const sourceArgPath = getArgByNumber(args, 0);
    const destArgPath = getArgByNumber(args, 1);

    const resolvedSourcePath = resolve(getCurrentDir(), sourceArgPath);
    const resolvedDestDirPath = resolve(getCurrentDir(), destArgPath);

    const readStream = createReadStream(resolvedSourcePath);
    const brotliStream = isCompress ? createBrotliCompress() : createBrotliDecompress();
    const writeStream = createWriteStream(resolvedDestDirPath);

    await pipeline(readStream, brotliStream, writeStream);
};