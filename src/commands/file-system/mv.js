import { cp } from './cp.js';
import { rm } from './rm.js';

export const mv = async (args) => {
    await cp(args);
    await rm(args);
};