/*!
 * @author alexanderpuscher / https://github.com/alexanderpuscher/
 * Licensing: MIT https://github.com/alexanderpuscher/typescript-csharp/blob/master/LICENSE
 */

import { Group } from './Group';
import { ITEM_NOT_FOUND, MULTIPLE_INSTANCES_FOUND } from '../../Shared';
import { IEnumerable } from './IEnumerable';
import { IComparer } from './IComparer';
import { IEqualityComparer } from './IEqualityComparer';
import { IList } from './IList';
import { CollectionBase } from './CollectionBase';

export class List<T> extends CollectionBase<T> implements IList<T> {
  /* IList */

  add(item: T): void {
    this.array.push(item);
  }

  addRange(items: T[]): void {
    items.forEach((x) => this.add(x));
  }

  remove(predicate: (item: T) => boolean): void {
    let temp = new Array<T>();

    this.array.forEach((element) => {
      if (!predicate(element)) {
        temp.push(element);
      }
    });

    this.array = temp;
  }

  /* IEnumerable */

  asEnumerable(): IEnumerable<T> {
    return this;
  }

  elementAt(index: number): T {
    try {
      return this.array[index];
    } catch (e) {
      return null;
    }
  }

  any(predicate?: (item: T) => boolean): boolean {
    if (!predicate) {
      return this.array.length > 0;
    }

    for (let i = 0; i < this.array.length; i++) {
      if (predicate(this.array[i])) {
        return true;
      }
    }
    return false;
  }

  all(predicate?: (item: T) => boolean): boolean {
    if (!predicate) {
      return this.array.length > 0;
    }

    for (let i = 0; i < this.array.length; i++) {
      if (!predicate(this.array[i])) {
        return false;
      }
    }
    return true;
  }

  single(predicate: (item: T) => boolean = null): T {
    if (this.array.length <= 0) {
      throw ITEM_NOT_FOUND;
    }

    if (predicate) {
      let item = this.singleOrDefault(predicate);

      if (!item) {
        throw ITEM_NOT_FOUND;
      }

      return item;
    }

    return this.array[0];
  }

  first(predicate: (item: T) => boolean = null): T {
    if (this.array.length <= 0) {
      throw ITEM_NOT_FOUND;
    }

    if (predicate) {
      let item = this.firstOrDefault(predicate);

      if (!item) {
        throw ITEM_NOT_FOUND;
      }

      return item;
    }

    return this.array[0];
  }

  last(predicate: (item: T) => boolean = null): T {
    if (this.array.length <= 0) {
      throw ITEM_NOT_FOUND;
    }

    if (predicate) {
      let item = this.lastOrDefault(predicate);

      if (!item) {
        throw ITEM_NOT_FOUND;
      }

      return item;
    }

    return this.array[this.array.length - 1];
  }

  singleOrDefault(predicate: (item: T) => boolean): T {
    let temp = new Array<T>();

    this.array.filter((element) => {
      if (predicate(element)) {
        temp.push(element);
      }
    });

    if (temp.length > 1) {
      throw MULTIPLE_INSTANCES_FOUND;
    }

    if (temp.length <= 0) {
      return null;
    }

    return temp[0];
  }

  firstOrDefault(predicate: (item: T) => boolean): T {
    for (let i = 0; i < this.length; i++) {
      let item = this.array[i];
      if (predicate(item)) {
        return item;
      }
    }

    return null;
  }

  lastOrDefault(predicate: (item: T) => boolean): T {
    for (let i = this.length; i >= 0; i--) {
      let item = this.array[i - 1];
      if (predicate(item)) {
        return item;
      }
    }

    return null;
  }

  where(predicate: (item: T) => boolean): IEnumerable<T> {
    let temp = new List<T>();

    this.array.filter((element) => {
      if (predicate(element)) {
        temp.add(element);
      }
    });

    return temp;
  }

  select<TResult>(predicate: (item: T) => TResult): IEnumerable<TResult> {
    let temp = new List<TResult>();

    this.forEach((x) => temp.add(predicate(x)));

    return temp;
  }

  forEach(predicate: (item: T) => void): void {
    this.array.forEach((x) => predicate(x));
  }

  join<TOuter, TMatch, TResult>(
    outer: IEnumerable<TOuter>,
    conditionInner: (item: T) => TMatch,
    conditionOuter: (item: TOuter) => TMatch,
    select: (x: T, y: TOuter) => TResult,
    leftJoin: boolean = false,
  ): IEnumerable<TResult> {
    let resultList = new List<TResult>();

    this.array.forEach((x) => {
      let outerEntries = outer.toArray().filter((y) => conditionInner(x) === conditionOuter(y));

      if (leftJoin && outerEntries && outerEntries.length <= 0) {
        resultList.add(select(x, null));
      } else {
        outerEntries.forEach((z) => resultList.add(select(x, z)));
      }
    });

    return resultList;
  }

  groupBy(predicate: (item: T) => T[]): IEnumerable<Group<T>> {
    let groups = {};
    this.array.forEach(function (o) {
      let group = JSON.stringify(predicate(o));
      groups[group] = groups[group] || [];
      groups[group].push(o);
    });
    let g = Object.keys(groups).map(function (group) {
      let a = group.substr(1, group.length - 2);

      let grp = new Group<T>(a.split(','), groups[group]);

      return grp;
    });

    return new List<Group<T>>(g);
  }

  orderBy(comparer: IComparer<T>): IEnumerable<T> {
    let temp = this.array.sort((x, y) => comparer.compare(x, y));

    return new List<T>(temp);
  }

  union(list: IEnumerable<T>): IEnumerable<T> {
    this.addRange(list.toArray());

    return this;
  }

  distinct(comparer: IEqualityComparer<T>): IEnumerable<T> {
    let uniques = new List<T>();
    this.forEach((x) => {
      uniques.forEach((y) => {
        if (!comparer.equals(x, y)) {
          uniques.add(x);
        }
      });
    });

    return uniques;
  }

  skip(no: number): IEnumerable<T> {
    if (no > 0) {
      return new List(this.array.slice(no, this.array.length - 1));
    }

    return this;
  }

  take(no: number): IEnumerable<T> {
    if (no > 0) {
      return new List(this.array.slice(0, no));
    }

    return this;
  }

  sum(predicate: (item: T) => number): number {
    let sum: number = 0;
    this.array.forEach((x) => (sum = sum + predicate(x)));

    return sum;
  }

  avg(predicate: (item: T) => number): number {
    return this.sum(predicate) / this.length;
  }

  min(predicate: (item: T) => number): number {
    let min: number = 0;
    let i = 0;
    this.array.forEach((x) => {
      if (i === 0) {
        min = predicate(x);
      } else {
        let val = predicate(x);
        if (val < min) {
          min = val;
        }
      }
      i++;
    });

    return min;
  }

  max(predicate: (item: T) => number): number {
    let max: number = 0;
    let i = 0;
    this.array.forEach((x) => {
      if (i === 0) {
        max = predicate(x);
      } else {
        let val = predicate(x);
        if (val > max) {
          max = val;
        }
      }
      i++;
    });

    return max;
  }

  count(predicate: (item: T) => boolean = null): number {
    if (!predicate) {
      return this.length;
    }

    let count: number = 0;
    this.array.forEach((x) => {
      if (predicate(x)) {
        count++;
      }
    });

    return count;
  }
}
