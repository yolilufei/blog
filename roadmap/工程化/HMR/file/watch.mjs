import fs from 'fs';

fs.watch('test.txt', (buffer) => {
    console.log('changed', buffer);
});