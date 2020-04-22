/*!
 * @author alexanderpuscher / https://github.com/alexanderpuscher/
 * Licensing: MIT https://github.com/alexanderpuscher/typescript-csharp/blob/master/LICENSE
 */

import { IStack } from "./IStack";

export class Stack<T> implements IStack<T> {
    private array: T[] = new Array<T>();

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

    peek(): T | null {
        if (this.array.length === 0) {
            return null;
        }

        return this.array[this.array.length - 1];
    }

    pop(): T | null {
        if (this.array.length === 0) {
            return null;
        }

        return this.array.pop();
    }

    push(item: T): void {
        this.array.push(item);
    }

    toArray(): T[] {
        return this.array;
    }
}