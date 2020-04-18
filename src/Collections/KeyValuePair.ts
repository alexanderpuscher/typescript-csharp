/*!
 * @author alexanderpuscher / https://github.com/alexanderpuscher/
 * Licensing: MIT https://github.com/alexanderpuscher/typescript-csharp/blob/master/LICENSE
 */

export class KeyValuePair<TKey, TValue> {
  key: TKey;
  value: TValue;
  constructor(key: TKey, value: TValue) {
    this.key = key;
    this.value = value;
  }
}
