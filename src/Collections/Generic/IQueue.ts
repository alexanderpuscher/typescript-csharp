/*!
 * @author alexanderpuscher / https://github.com/alexanderpuscher/
 * Licensing: MIT https://github.com/alexanderpuscher/typescript-csharp/blob/master/LICENSE
 */

export interface IQueue<T> {
    length: number;
    clear(): void;
    contains(item: T): boolean;
    enqueue(item: T): void;
    dequeue(): T;
    peek(): T;
    toArray(): T[];
}