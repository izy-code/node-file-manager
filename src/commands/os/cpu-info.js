import { cpus } from 'os';

export const getCpuInfo = () => {
    const cpuData = cpus().map((cpu) => ({
        'Model': cpu.model.trim(),
        'Clock rate, GHz': (cpu.speed / 1000).toFixed(2),
    }));

    console.log(`Overall amount of CPUs: ${cpuData.length}`);
    console.table(cpuData);
};