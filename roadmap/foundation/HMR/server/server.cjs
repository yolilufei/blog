const ws = require('ws');
const wsserver = new ws.Server({
    port: 3555
});

wsserver.on('connection', (socket, req) => {
    console.log(req.socket.remoteAddress);
    socket.on('message', data => {
        console.log('form client', data.toString());
        if (data === 'terminate') {
            socket.close();
            setTimeout(() => {
                wsserver.close();
            }, 3000);
        }
    });
    socket.send('hi , server is here');
});