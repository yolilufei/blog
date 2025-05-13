
interface CurrencyOptions {
    max?: number;
    min?: number;
}

/**
 * @description 并发控制上传、下载请求数
 */
class CurrencyController {
    public currencyOptions: CurrencyOptions;
    public chunkQueue: Blob[];
    public constructor(currencyOptions: CurrencyOptions) {
        this.currencyOptions = currencyOptions;
    }

    public start() {
        
    }

}