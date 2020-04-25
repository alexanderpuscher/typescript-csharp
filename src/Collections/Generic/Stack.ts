/*!
 * @author alexanderpuscher / https://github.com/alexanderpuscher/
 * Licensing: MIT https://github.com/alexanderpuscher/typescript-csharp/blob/master/LICENSE
 */

import { IStack } from "./IStack";
import { CollectionBase } from "./CollectionBase";

export class Stack<T> extends CollectionBase<T> implements IStack<T> {
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
}