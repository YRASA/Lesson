const fs = require('fs');
// 异步读取
fs.readFile('input.txt', (err, data) => {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取：" + data.toString());
});
// 同步读取
let data = fs.readFileSync('input.txt');
console.log("同步读取：" + data.toString());
console.log('END');