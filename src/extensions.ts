import './String.Extensions';
import './Collections/Array.Extensions';
import { List } from './Collections/Generic/List';

declare global {
    interface Array<T> {
        toList(this: T[]): List<T>;
    }

    interface String {
        equals(this: string, value: string): boolean;
    }
}
