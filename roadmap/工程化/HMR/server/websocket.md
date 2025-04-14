## 服务端如何创建socket服务
1. 下载[ws](https://github.com/websockets/ws)
2. 新建 socketserver.js
   ```js
    import WebSocket from 'ws';
    const server = new WebSocket.Server({
        port: 3335
    });
    // 监听connection事件
    server.on('connection', (socket, req) => {
        // 监听 message 事件 和 error 事件
        socket.on('message', data => {
            console.log(data);
        });

        socket.on('error', console.error);

        socket.send('hi, i`m server');
    })
   ```

## 如何创建 socket 客户端

```js
    const client = new WebSocket('ws://localhost:3335');
    // 监听 open 事件
    client.addEventListener('open', e => {
        client.send('hi, i`m client');
    });

    client.addEventListener('message', e => {
        console.log('receive data from server: ', e.data);
    });

    

```