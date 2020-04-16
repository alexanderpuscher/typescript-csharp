export class String {
  public static Empty: string = '';

  public static IsNullOrWhiteSpace(value: string): boolean {
    try {
      if (value === null || value === 'undefined') {
        return true;
      }

      return value.toString().replace(/\s/g, '').length < 1;
    } catch {
      return false;
    }
  }
}
