/*!
 * @author alexanderpuscher / https://github.com/alexanderpuscher/
 * Licensing: MIT https://github.com/alexanderpuscher/typescript-csharp/blob/master/LICENSE
 */

if (!String.prototype.equals) {
    String.prototype.equals = function (value: string): boolean {
        return this === value;
    };
}