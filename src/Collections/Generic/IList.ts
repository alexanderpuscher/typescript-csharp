/*!
 * @author alexanderpuscher / https://github.com/alexanderpuscher/
 * Licensing: MIT https://github.com/alexanderpuscher/typescript-csharp/blob/master/LICENSE
 */

import { IEnumerable } from './IEnumerable';

export interface IList<T> extends IEnumerable<T> {
  add(item: T): void;
  addRange(items: T[]): void;
  clear(): void;
  remove(predicate: (item: T) => boolean): void;
}
