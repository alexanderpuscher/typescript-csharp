/*!
 * @author alexanderpuscher / https://github.com/alexanderpuscher/
 * Licensing: MIT https://github.com/alexanderpuscher/typescript-csharp/blob/master/LICENSE
 */

import { IEnumerable } from './IEnumerable';

export interface IGroup<T> {
    groups: any[];
    list: IEnumerable<T>;
}
