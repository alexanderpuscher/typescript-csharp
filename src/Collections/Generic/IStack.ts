/*!
 * @author alexanderpuscher / https://github.com/alexanderpuscher/
 * Licensing: MIT https://github.com/alexanderpuscher/typescript-csharp/blob/master/LICENSE
 */

export interface IStack<T> {
  length: number;
  clear(): void;
  contains(item: T): boolean;
  peek(): T | null;
  pop(): T | null;
  push(item: T): void;
  toArray(): T[];
}
