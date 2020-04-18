/*!
 * @author alexanderpuscher / https://github.com/alexanderpuscher/
 * Licensing: MIT https://github.com/alexanderpuscher/typescript-csharp/blob/master/LICENSE
 */

import { String } from './String';

export class StringBuilder {
    private values: string[] = [];

    constructor(value: string = String.Empty) {
        this.values = new Array(value);
    }

    public append(value: string): void {
        this.values.push(value);
    }

    public appendLine(value: string): void {
        this.values.push(value + '\n');
    }

    public clear(): void {
        this.values = [];
    }

    public toString(): string {
        return this.values.join('');
    }
}