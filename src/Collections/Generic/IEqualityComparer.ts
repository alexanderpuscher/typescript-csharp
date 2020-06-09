/*!
 * @author alexanderpuscher / https://github.com/alexanderpuscher/
 * Licensing: MIT https://github.com/alexanderpuscher/typescript-csharp/blob/master/LICENSE
 */

export interface IEqualityComparer<T> {
  equals(x: T, y: T): boolean;
}
