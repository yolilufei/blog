
/**
 * @description sse 事件请求工具
 * @param url {string} 请求地址
 * @param params {Record<string, any>} 请求参数
 * @return Promise<unknown>
 */
const SSERequest = (url) => {
    const request = new EventSource(url, {withCredentials: true});
    request.addEventListener('message', e => {
        console.log(e.data);
    })
}

SSERequest('http://localhost:9999/stream');
