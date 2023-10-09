export interface CacheInfo {
    location: Omit<Location, 'reload' | 'assign' | 'replace'>;
    title: string;
    listeners: WeakMap<CacheInfo['location'], Callback[]>;
 }

export interface ReactiveStorage {
    
}

export interface ReactiveStorageConstructor {
    new(): ReactiveStorage;
    readonly prototype: ReactiveStorage;
}

declare const ReactiveStorage: ReactiveStorageConstructor;
export default ReactiveStorage;