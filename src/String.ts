/*!
 * @author alexanderpuscher / https://github.com/alexanderpuscher/
 * Licensing: MIT https://github.com/alexanderpuscher/typescript-csharp/blob/master/LICENSE
 */

export class String {
  public static Empty: string = '';

  public static isNullOrWhiteSpace(value: string): boolean {
    try {
      if (value === null || value.equals('undefined')) {
        return true;
      }

      return value.toString().replace(/\s/g, '').length < 1;
    } catch {
      return false;
    }
  }
}