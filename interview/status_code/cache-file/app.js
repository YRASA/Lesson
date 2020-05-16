const http = require('http');
const fs = require('fs');
const users = require('./users.json');
// console.log(users);
let version = 1;
let server = http.createServer((req, res) => {
    // 用Etag做缓存(类似版本号)
    // If-None-Match
    if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
        fs.createReadStream('index.html').pipe(res);
    } else if (req.url == '/users') {
        res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
        // 发送 文本 Buffer
        // JSON对象变成文本
        // res.setHeader('Etag', version);
        res.end(JSON.stringify(users)); // 怎么把JSON传过去?
    }
    // if (req.headers['if-none-match']) {
    //     // console.log(Number(req.headers['if-none-match']) == version);
    //     if (Number(req.headers['if-none-match']) == version) {
    //         res.statusCode = 304;
    //         res.end();
    //         return;
    //     } else {
    //         res.setHeader('Etag', version);
    //         res.end('hello world2');
    //         return;
    //     }
    // }
    // res.setHeader('Etag', version);
    // res.end('hello world');
});
server.listen(3030);