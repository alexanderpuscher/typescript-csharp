/*!
 * @author alexanderpuscher / https://github.com/alexanderpuscher/
 * Licensing: MIT https://github.com/alexanderpuscher/typescript-csharp/blob/master/LICENSE
 */

import { List } from './Generic/List';

interface Array<T> {
  toList(this: T[]): List<T>;
}

((prototype: any) => {
  if (typeof prototype.toList === 'function') return;

  prototype.toList = function toList<T>(this: T[]) {
    return new List<T>((this as unknown) as T[]);
  };
})(Array.prototype);
