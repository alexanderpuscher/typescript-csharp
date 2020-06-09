/*!
 * @author alexanderpuscher / https://github.com/alexanderpuscher/
 * Licensing: MIT https://github.com/alexanderpuscher/typescript-csharp/blob/master/LICENSE
 */

import { List } from './Generic/List';

if (!Array.prototype.toList) {
    Array.prototype.toList = function <T>(this: Array<T>): List<T> {
        return new List<T>((this as unknown) as T[]);
    }
}