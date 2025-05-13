// 文件分片
export const createFileChunk = (file, chunkSize = 1024 * 1024 * 10) => {
    const totalSize = file.size;
    const chunkList = [];
    const splitTimes = Math.ceil(totalSize / chunkSize);
    for(let i = 0; i < splitTimes; i++) {
        chunkList.push(file.slice(chunkSize*i, chunkSize*(i+1), file.type));
    }

    console.log(22, chunkList);
    return chunkList;
}

// storage
export const storageFile = file => {

}


export const createFileHash = (file) => {};

// 并发控制
export const currencyUploadController = (chunkList, limit = 3) => {
    
} 

