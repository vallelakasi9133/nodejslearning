const http = require('http');

// function reqlistener(req, res) {

// }
const server = http.createServer((req, res) => {
    console.log("kasi")
});

server.listen(3000);