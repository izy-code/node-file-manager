import { readdir } from 'fs/promises';
import { getCurrentDir } from '../../utils/directory-path.js';

export const ls = async () => {
    const dirents = await readdir(getCurrentDir(), { withFileTypes: true });

    const getDirentType = (dirent) =>
        dirent.isFile() ? 'file'
            : dirent.isDirectory() ? 'directory' : 'other';

    const tabularData = dirents
        .map((dirent) => ({
            Name: dirent.name,
            Type: getDirentType(dirent),
        }))
        .filter(({ Type }) => Type !== 'other')
        .sort((a, b) => a.Type.localeCompare(b.Type) || a.Name.localeCompare(b.Name));

    console.table(tabularData);
};