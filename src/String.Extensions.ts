/*!
 * @author alexanderpuscher / https://github.com/alexanderpuscher/
 * Licensing: MIT https://github.com/alexanderpuscher/typescript-csharp/blob/master/LICENSE
 */

interface String {
  equals(this: string, value: string): boolean;
}

((prototype: any) => {
  if (typeof prototype.toList === 'function') return;

  prototype.equals = function (value: string): boolean {
    return this === value;
  };
})(String.prototype);
