interface DBConnectionOptions {}

interface TableIndex {
    indexName: string;
    indexKeyPath: string | Iterable<string>;
    indexOptions?: IDBIndexParameters;
}

/**
 * 用于缓存文件资源
 */
class FileStoreDBController {
  public dbInstance: IDBDatabase;
  public requestInstance: IDBOpenDBRequest;
  public tableInstance: IDBObjectStore;

  public connection(dbName: string, dbVersion?: number) {
    this.requestInstance = window.indexedDB.open(dbName, dbVersion ?? 1);
    this.listen();
  }

  public listen() {
    this.requestInstance.onsuccess = (e) => {
      console.log("成功", e);
      this.dbInstance = this.requestInstance.result;
    };

    this.requestInstance.onupgradeneeded = (e) => {
      // @ts-expect-error
      this.dbInstance = e.target?.result;
    };
  }

  public createTable(tableName: string, tableOptions: IDBObjectStoreParameters = {}) {
    this.tableInstance = this.dbInstance.createObjectStore(tableName, tableOptions);
    return this;
  }

  public createIndex(tableIndexConf: TableIndex[]) {
    tableIndexConf.forEach(conf => {
        this.tableInstance.createIndex(conf.indexName, conf.indexKeyPath, conf.indexOptions ?? {});
    })
  }

  public tableOperate(tableName: string, opType: 'create' | 'delete') {
    //
  }




}
