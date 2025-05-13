import http from 'http';

http.createServer((req, res)=>{
    if (req.url.startsWith('/stream')){
        res.writeHead(200, {
            'content-type': 'text/event-stream',
            'x-accel-buffering': 'no',
            'cache-control': 'no-cache',
            'access-control-allow-origin': 'http://localhost:8080',
            'access-control-allow-credentials': true
        });
        res.write(': this is tet sse dd');
        res.write('data: f2ff\n');
        res.write("data: " + (new Date()) + "\n\n");
        res.write("data: " + (new Date()) + "\n\n");

        setInterval(() => {
            res.write("data: " + (new Date().toLocaleString()) + "\n\n")
        }, 1200);

    }
}).listen(9992);