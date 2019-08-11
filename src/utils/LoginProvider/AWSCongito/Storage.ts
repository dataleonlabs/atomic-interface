/**
 * Login storage aws
 */
export default class Storage {
    // the promise returned from sync function
    public static syncPromise = null;
    // set item with the key
    public static setItem(key: string, value: string): string;
    // get item with the key
    public static getItem(key: string): string;
    // remove item with the key
    public static removeItem(key: string): void;
    // clear out the storage
    public static clear(): void;
    // If the storage operations are async(i.e AsyncStorage)
    // Then you need to sync those items into the memory in this method
    public static sync(): Promise<void> {
        if (!MyStorage.syncPromise) {
            MyStorage.syncPromise = new Promise((res, rej) => { });
        }
        return MyStorage.syncPromise;
    }
}