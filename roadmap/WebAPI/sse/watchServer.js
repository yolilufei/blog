import chokidar from 'chokidar';
import childProcess from 'child_process';

chokidar.watch('.').on('all', (e, path) => {
    console.log(e, path);
    if (path.includes('server.js')) {
        childProcess.execSync('node ' + path);
    }
});

// childProcess.execSync('yarn sse:server');