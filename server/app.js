const { method } = require('bluebird');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
   
    const url = req.url;
    
    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write(
            '<body><form action ="/message" method ="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
        );
        return res.write('</html>');
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});