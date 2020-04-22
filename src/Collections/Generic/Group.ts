/*!
 * @author alexanderpuscher / https://github.com/alexanderpuscher/
 * Licensing: MIT https://github.com/alexanderpuscher/typescript-csharp/blob/master/LICENSE
 */

import { List } from './List';
import { IEnumerable } from './IEnumerable';
import { IGroup } from './IGroup';

export class Group<T> implements IGroup<T> {
  groups: any[];
  list: IEnumerable<T> = new List<T>();

  constructor(groups: any[], list: T[]) {
    this.groups = groups;
    this.list = new List<T>(list);
  }
}
