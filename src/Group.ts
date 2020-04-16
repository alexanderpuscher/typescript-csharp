import { IEnumerable } from './Interfaces';
import { List } from './List';

export interface IGroup<T> {
  groups: any[];
  list: IEnumerable<T>;
}

export class Group<T> implements IGroup<T> {
  groups: any[];
  list: IEnumerable<T> = new List<T>();

  constructor(groups: any[], list: T[]) {
    this.groups = groups;
    this.list = new List<T>(list);
  }
}
