/*!
 * @author alexanderpuscher / https://github.com/alexanderpuscher/
 * Licensing: MIT https://github.com/alexanderpuscher/typescript-csharp/blob/master/LICENSE
 */

import { KeyValuePair } from "./KeyValuePair";
import { IEnumerable } from "./IEnumerable";

export interface IDictionary<TKey, TValue> extends IEnumerable<KeyValuePair<TKey, TValue>> {
    add(key: TKey, value: TValue): void;
    addRange(items: KeyValuePair<TKey, TValue>[]): void;
    remove(predicate: (item: KeyValuePair<TKey, TValue>) => boolean): void;
    clear(): void;
    containsKey(key: TKey): boolean;
    containsValue(value: TValue): boolean;
    tryGetValue(key: TKey): TValue;
}