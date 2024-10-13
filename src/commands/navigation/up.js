import { resolve, dirname } from 'path';
import { chdir } from 'process';
import { platform } from 'os';
import { getCurrentDir } from '../../utils/directory-path';

export const up = () => {
    const currentDir = getCurrentDir();
    const parentDir = resolve(currentDir, '..');

    if (currentDir !== parentDir) {
        chdir('..');
    }
};