const http = require('http');
const URL = require('url').URL;
const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    const url = new URL(`http://${hostname}:${port}${req.url}`);

    let data = '';
    let status = 404;

    if (req.method === 'GET') {

        if (url.pathname === '/hello') {
            const name = url.searchParams.get('name') || 'world';
            data = `Hello, ${name}`;
            status = 200;
        } else if (url.pathname === '/goodbye') {
            const name = url.searchParams.get('name');
            data = !!name ? `Goodbye, ${name}` : 'Goodbye';
            status = 200;
        }

    }

    res.statusCode = status;
    res.setHeader('Content-Type', 'text/plain');
    res.end(data);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})