/*!
 * @author alexanderpuscher / https://github.com/alexanderpuscher/
 * Licensing: MIT https://github.com/alexanderpuscher/typescript-csharp/blob/master/LICENSE
 */

import { TimeSpan } from './TimeSpan';

export class DateTime {
  public static get today(): DateTime {
    const a = new DateTime();
    return a.date;
  }

  public static get utcNow(): DateTime {
    const now = new Date();
    return new DateTime(now.getTime() + now.getTimezoneOffset());
  }

  public static get now(): DateTime {
    return new DateTime();
  }

  public static parse(s: string): DateTime {
    return new DateTime(s);
  }

  constructor(time?: number | string);
  // tslint:disable-next-line: unified-signatures
  constructor(
    year?: number,
    month?: number,
    date?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    ms?: number,
  );
  // tslint:disable-next-line: unified-signatures
  constructor(a?: any, b?: number, c?: number, d?: number, e?: number, f?: number, g?: number) {
    // tslint:disable-next-line: no-string-literal
    this['__proto__'] = DateTime.prototype;
    let rd: any;
    switch (arguments.length) {
      case 0:
        rd = new Date() as any;
        break;
      case 1:
        rd = new Date(a) as any;
        break;
      case 2:
        rd = new Date(a, b) as any;
        break;
      case 3:
        rd = new Date(a, b, c) as any;
        break;
      case 4:
        rd = new Date(a, b, c, d) as any;
        break;
      case 5:
        rd = new Date(a, b, c, d, e) as any;
        break;
      case 6:
        rd = new Date(a, b, c, d, e, f) as any;
        break;
      default:
        rd = new Date(a, b, c, d, e, f, g) as any;
    }
    rd.__proto__ = DateTime.prototype;
    return rd;
  }

  get day(): number {
    return ((this as any) as Date).getDate();
  }

  get dayOfWeek(): number {
    return ((this as any) as Date).getDay();
  }

  get month(): number {
    return ((this as any) as Date).getMonth();
  }

  get year(): number {
    return ((this as any) as Date).getFullYear();
  }

  get hour(): number {
    return ((this as any) as Date).getHours();
  }

  get minute(): number {
    return ((this as any) as Date).getMinutes();
  }

  get second(): number {
    return ((this as any) as Date).getSeconds();
  }

  get milliSecond(): number {
    return ((this as any) as Date).getMilliseconds();
  }

  get msSinceEpoch(): number {
    return ((this as any) as Date).getTime();
  }

  get timeZoneOffset(): TimeSpan {
    return TimeSpan.fromMinutes(((this as any) as Date).getTimezoneOffset());
  }

  get date(): DateTime {
    const d = new DateTime(
      ((this as any) as Date).getFullYear(),
      ((this as any) as Date).getMonth(),
      ((this as any) as Date).getDate(),
      0,
      0,
      0,
      0,
    );
    return d;
  }

  get time(): TimeSpan {
    return new TimeSpan(
      0,
      ((this as any) as Date).getHours(),
      ((this as any) as Date).getMinutes(),
      ((this as any) as Date).getSeconds(),
      ((this as any) as Date).getMilliseconds(),
    );
  }

  toLocaleString: (locales?: string | string[], options?: Intl.DateTimeFormatOptions) => string;
  toLocaleDateString: (locales?: string | string[], options?: Intl.DateTimeFormatOptions) => string;
  toLocaleTimeString: (locales?: string | string[], options?: Intl.DateTimeFormatOptions) => string;
  toUTCString: () => string;
  toISOString: () => string;
  toJSON: (key?: any) => string;
  toTimeString: () => string;
  toDateString: () => string;

  add(d: DateTime | TimeSpan): DateTime;
  add(days: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number): DateTime;
  add(
    t: DateTime | TimeSpan | Date | number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    milliseconds?: number,
  ): DateTime {
    if (t instanceof Date) {
      return new DateTime(((this as any) as Date).getTime() + t.getTime());
    }
    let days: number = 0;
    if (t instanceof TimeSpan) {
      days = t.days;
      hours = t.hours;
      minutes = t.minutes;
      seconds = t.seconds;
      milliseconds = t.milliseconds;
    } else {
      days = t as number;
    }
    function hasValue(n: number | undefined | null, name: string): boolean {
      if (n === undefined) {
        return false;
      }
      if (n === null) {
        throw new Error(`${name} cannot be null`);
      }
      return n !== 0;
    }
    const d = new Date(((this as any) as Date).getTime());
    if (hasValue(days, 'days')) {
      d.setDate(d.getDate() + days);
    }
    if (hasValue(hours, 'hours')) {
      d.setHours(d.getHours() + hours);
    }
    if (hasValue(minutes, 'minutes')) {
      d.setMinutes(d.getMinutes() + minutes);
    }
    if (hasValue(seconds, 'seconds')) {
      d.setSeconds(d.getSeconds() + seconds);
    }
    if (hasValue(milliseconds, 'milliseconds')) {
      d.setMilliseconds(d.getMilliseconds() + milliseconds);
    }
    (d as any).__proto__ = DateTime.prototype;
    return (d as any) as DateTime;
  }

  addMonths(m: number): DateTime {
    const d = new Date(this.msSinceEpoch);
    d.setMonth(d.getMonth() + m);
    (d as any).__proto__ = DateTime.prototype;
    return d as any;
  }

  addYears(y: number): DateTime {
    const d = new Date(this.msSinceEpoch);
    d.setFullYear(d.getFullYear() + y);
    (d as any).__proto__ = DateTime.prototype;
    return d as any;
  }

  diff(rhs: Date | DateTime): TimeSpan {
    return new TimeSpan(((this as any) as Date).getTime() - (rhs as Date).getTime());
  }

  equals(d: DateTime): boolean {
    return ((this as any) as Date).getTime() === ((d as any) as Date).getTime();
  }

  toRelativeString(dt?: DateTime | Date): string {
    if (!dt) {
      dt = DateTime.now;
    } else {
      if (dt instanceof Date && !(dt instanceof DateTime)) {
        (dt as any).__proto__ = DateTime.prototype;
        dt = (dt as any) as DateTime;
      }
    }

    const diff = this.diff(dt);
    if (dt.year !== this.year) {
      return this.toLocaleDateString();
    }

    if (Math.abs(diff.totalDays) > 6) {
      return this.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    }

    if (Math.abs(diff.totalHours) > 23) {
      return this.toLocaleDateString(undefined, { weekday: 'short' });
    }

    if (Math.abs(diff.totalMinutes) > 59) {
      return `${Math.floor(diff.totalHours)} hours`;
    }

    return `${Math.floor(diff.totalMinutes)} mins`;
  }
}
