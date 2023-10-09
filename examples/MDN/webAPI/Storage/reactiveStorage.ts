import { CacheInfo, ReactiveStorageConstructor } from "./type";

 
 
 enum StorageType {
    // infer localStorage
    LOCAL = 'local',
    // infer sessionStorage
    SESSION = 'session'
 } 

 const register = (storageType: StorageType) => {
    if (window[storageType]) {
        const originalStorage = window[storageType];
        window[storageType]
    }
 }

type Callback = (ev: StorageChangeEvent) => void;



function ReactiveStorage(this: ReactiveStorageConstructor): ReactiveStorageConstructor {
    const cacheInfo: CacheInfo = Object.create(null);
    return this;
 }

 ReactiveStorage.prototype.cache = Object.create(null);

enum Operation {
    ADD="ADD",
    UPDATE="UPDATE",
    DELETE="DELETE",
    SEARCH="SEARCH"
}

 interface StorageChangeEvent extends CustomEvent {
    type: StorageType;
    operation: Operation;
    data: Record<string, any>;
 }

 ReactiveStorage.prototype.addEventListener = function (type: StorageType, callback: Callback) {
    console.log(this);
 }

 export default ReactiveStorage;