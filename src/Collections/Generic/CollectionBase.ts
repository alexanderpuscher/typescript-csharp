/*!
 * @author alexanderpuscher / https://github.com/alexanderpuscher/
 * Licensing: MIT https://github.com/alexanderpuscher/typescript-csharp/blob/master/LICENSE
 */


export abstract class CollectionBase<T> {
    protected array: T[] = new Array<T>();

    constructor(array: any[] = new Array<any>()) {
        if (array) {
            this.array = array;
        }
    }

    get length(): number {
        return this.array.length;
    }

    clear(): void {
        this.array = new Array<any>();
    }

    contains(item: T): boolean {
        if (this.array.length === 0) {
            return false;
        }

        return this.array.indexOf(item) !== -1;
    }

    toArray(): T[] {
        return this.array;
    }
}