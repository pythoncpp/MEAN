const os = require('os');
console.log(`hostname: ${os.hostname()}`);
console.log(`architecture: ${os.arch()}`);
console.log(`os: ${os.platform()}`);
console.log(`free memory: ${os.freemem()}`);
console.log(`total memory: ${os.totalmem()}`);

// const cpus = os.cpus();
// console.log(cpus);
// const cpuInfo = [];
// for (let index = 0; index < cpus.length; index++) {
//     const cpu = cpus[index];
//     // console.log(`model: ${cpu.model}`);
//     // console.log(`speed: ${cpu.speed}`);
//     cpuInfo.push({model: cpu.model, speed: cpu.speed});
// }
// console.log(cpuInfo);

console.log(cpus.map(cpu => {
    return {model: cpu.model, speed: cpu.speed}
}));