// import fs from 'fs';

// fs.watch('test.txt', (buffer) => {
//     console.log('changed', buffer);
// });

import chokidar from 'chokidar';

console.log((await import('../file/test.js')).default);
// console.log(process.cwd());
// chokidar.watch('../file').on('all', (event, path) => {
//     console.log(event, path);
// })