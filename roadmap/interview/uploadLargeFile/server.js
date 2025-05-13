import http from 'http';


const server = http.createServer();
const rawData = [];
server.on('request', (req, res) => {
    console.log(req.url);
    if (req.url === '/upload') {
        req.on('data', (chunk) => {
            console.log(chunk);
            rawData.push(chunk);
        });
        req.on('end', () => {
            console.log(rawData);
        })
    }
    res.writeHead(200, 'ok', {
        "access-control-allow-origin": '*',
        "Content-Type": 'application/json'
    });
    res.write(JSON.stringify({
        code: 0,
        result: 'xxx'
    }))
    res.end();
});

server.listen(8888, () => {
    console.log('server is start');
});