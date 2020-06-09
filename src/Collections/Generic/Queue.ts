/*!
 * @author alexanderpuscher / https://github.com/alexanderpuscher/
 * Licensing: MIT https://github.com/alexanderpuscher/typescript-csharp/blob/master/LICENSE
 */

import { IQueue } from './IQueue';
import { CollectionBase } from './CollectionBase';

export class Queue<T> extends CollectionBase<T> implements IQueue<T> {
  enqueue(item: T): void {
    this.array.push(item);
  }

  dequeue(): T | null {
    if (this.array.length === 0) {
      return null;
    }

    return this.array.shift();
  }

  peek(): T | null {
    if (this.array.length === 0) {
      return null;
    }

    return this.array[this.array.length - 1];
  }
}
