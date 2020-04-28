/*!
 * @author alexanderpuscher / https://github.com/alexanderpuscher/
 * Licensing: MIT https://github.com/alexanderpuscher/typescript-csharp/blob/master/LICENSE
 */

export class Convert {
    public static toBase64String(value: string): string {
        return btoa(encodeURIComponent(value).replace(/%([0-9A-F]{2})/g, function (match, p1) {
            return String.fromCharCode(parseInt(p1, 16))
        }));
    }

    public static fromBase64String(value: string): string {
        return decodeURIComponent(Array.prototype.map.call(atob(value), function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        }).join(''));
    }
}