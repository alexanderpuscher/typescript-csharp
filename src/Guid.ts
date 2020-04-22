/*!
 * @author alexanderpuscher / https://github.com/alexanderpuscher/
 * Licensing: MIT https://github.com/alexanderpuscher/typescript-csharp/blob/master/LICENSE
 */

export class Guid {
  public static Empty: string = '00000000-0000-0000-0000-000000000000';
  private static pattern = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i");

  public static isGuid(guid: string): boolean {
    const value: string = guid.toString();
    return guid && Guid.pattern.test(value);
  }

  public static newGuid(): Guid {
    let guid = '';

    if (typeof (window) !== "undefined" && typeof (window.crypto) !== "undefined" && typeof (window.crypto.getRandomValues) !== "undefined") {
      guid = ('' + [1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, ch => {
        let c = Number(ch);
        return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      });
    }
    else {
      guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0;
        let v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    return new Guid(guid);
  }

  public static parse(guid: string): Guid {
    return new Guid(guid);
  }

  private value: string;

  private constructor(guid: string) {
    if (!guid) {
      throw new TypeError("Invalid argument; `value` has no value.");
    }

    this.value = Guid.Empty;

    if (guid && Guid.isGuid(guid)) {
      this.value = guid;
    }
  }

  public equals(guid: Guid): boolean {
    return Guid.isGuid(guid.toString()) && this.value.toString() === guid.toString();
  }

  public toString(): string {
    return this.value;
  }

  public toJSON(): any {
    return {
      value: this.value,
    };
  }
}