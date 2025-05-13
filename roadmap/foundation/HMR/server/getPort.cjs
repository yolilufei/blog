const net = require('net');
const os = require('os');

const getLocalHosts = () => {
    const interfaces = os.networkInterfaces();
    const rets = new Set(['0.0.0.0']);
    for (const _interface of Object.values(interfaces)) {
        if (_interface) {
            for (const config of _interface) {
                rets.add(config.address);
            }
        }
    }
    console.log(rets);
    return rets;
}

const checkAvailablePort = (basePort, host) => {
    return new Promise((resolve, reject) => {
        const server = net.createServer();
        server.unref();
        server.on('error', reject);
        server.listen(basePort, host, () => {
            const { port } = server.address();
            server.close(() => {
                resolve(port);
            })
        })
    })
}

const getAvailablePort = async (port, hosts) => {
    const nonExistentInterfaceErrors = new Set(["EADDRNOTAVAIL", "EINVAL"]);
    for (const host of hosts) {
        try {
            await checkAvailablePort(port, host);
        } catch (error) {
            console.error(error);
            if (
                !nonExistentInterfaceErrors.has(error.code)
              ) {
                throw error;
              }
        }
    }
    return port;
}

const p = getAvailablePort(65536, getLocalHosts());
p.then(v => {
    console.log(v);
})