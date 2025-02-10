//Create web server
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('public/index.html', (err, data) => {
            res.write(data);
            res.end();
        });
    }

    if (req.url === '/comments') {
        fs.readFile('public/comments.html', (err, data) => {
            res.write(data);
            res.end();
        });
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});