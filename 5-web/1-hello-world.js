
const http = require('http');

const server = http.createServer((req,res) => {
    //console.log(req.url);
    res.end('Hello from NodeJS\n');
});

server.listen(4245, () => {
    console.log('Server is running...');
});


/*
//Otra forma
const http = require('http');

const requestListener = (req,res) => {
    //console.log(req.url);
    res.write('Hello from Node\n');
    res.end();
};

const server = http.createServer(requestListener);
server.on('request', requestListener);

server.listen(4243, () => {
    console.log('Server is running...');
});
*/