const multiReq = (urls: string[], maxNum: number) => {
  return new Promise((resolve, reject) => {
    const result = Array.from({ length: urls.length });
    let resolvedCount = 0;
    let currentQueue = 0;
    let nextIndex = maxNum;

    const step = () => {
      if (++currentQueue >= maxNum) {
        return;
      }

      let index = nextIndex;
      nextIndex++;
      fetch(urls[index])
        .then((res) => {
          result[index] = res;
          resolvedCount++;
          if (resolvedCount === urls.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          // 每个请求完成后，继续添加新的请求
          --currentQueue;
          if (resolvedCount === urls.length) {
            resolve(result);
            return;
          }
          step();
        });
    };
    for (let i = 0; i < Math.min(maxNum, urls.length); i++) {
      step();
    }
  });
};
