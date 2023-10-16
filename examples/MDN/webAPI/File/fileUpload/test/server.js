const express = require('express');

const server = express();

server.head('/supportRangeRequest', (req, res) => {
    // if (req.method === 'OPTIONS') {
        res.writeHead(204, 'ok', {
            'Accept-Ranges': 'bytes',
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Methods": "HEAD, GET, POST, OPTIONS"
        }).end();
    // }
})

server.listen(3012, () => console.log('server is starting'));