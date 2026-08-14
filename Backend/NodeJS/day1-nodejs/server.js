let http = require('http');

let server = http.createServer((req, res) => {
    console.log("Hello i m server");
});

server.listen();