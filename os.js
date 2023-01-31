const os = require('os');

console.log(os.userInfo());
console.log(`the total time is :${os.uptime()} seconds`);