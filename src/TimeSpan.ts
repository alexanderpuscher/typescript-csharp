/*!
 * @author alexanderpuscher / https://github.com/alexanderpuscher/
 * Licensing: MIT https://github.com/alexanderpuscher/typescript-csharp/blob/master/LICENSE
 */

export class TimeSpan {
  public static fromDays(n: number): TimeSpan {
    return new TimeSpan(n * TimeSpan.msDays);
  }

  public static fromHours(n: number): TimeSpan {
    return new TimeSpan(n * TimeSpan.msHours);
  }

  public static fromMinutes(n: number): TimeSpan {
    return new TimeSpan(n * TimeSpan.msMinutes);
  }

  public static fromSeconds(n: number): TimeSpan {
    return new TimeSpan(n * TimeSpan.msSeconds);
  }

  public static parse(text: string): TimeSpan {
    if (!text) {
      throw new Error('Invalid time format');
    }
    let isPM: boolean = false;
    // tslint:disable-next-line: one-variable-per-declaration
    let d: number, h: number, m: number, s: number, ms: number;
    const tokens = text.split(/:/);
    // split last...
    const last = tokens[tokens.length - 1];
    const lastParts = last.split(' ');
    if (lastParts.length > 1) {
      if (/pm/i.test(lastParts[1])) {
        isPM = true;
      }
      tokens[tokens.length - 1] = lastParts[0];
    }
    const firstOfLast = lastParts[0];
    if (firstOfLast.indexOf('.') !== -1) {
      // it has ms...
      const secondParts = firstOfLast.split('.');
      if (secondParts.length > 1) {
        tokens[tokens.length - 1] = secondParts[0];
        ms = parseInt(secondParts[1], 10);
      }
    }

    if (tokens.length === 2) {
      // this is hour:min
      d = 0;
      h = parseInt(tokens[0], 10);
      m = parseInt(tokens[1], 10);
    } else if (tokens.length === 3) {
      d = 0;
      h = parseInt(tokens[0], 10);
      m = parseInt(tokens[1], 10);
      s = parseInt(tokens[2], 10);
    } else if (tokens.length === 4) {
      d = parseInt(tokens[0], 10);
      h = parseInt(tokens[1], 10);
      m = parseInt(tokens[2], 10);
      s = parseInt(tokens[3], 10);
    }

    return new TimeSpan(d, isPM ? h + 12 : h, m, s, ms);
  }

  private static msMinutes: number = 60000;

  private static msSeconds: number = 1000;

  private static msHours: number = 3600000;

  private static msDays: number = 24 * TimeSpan.msHours;

  private static daysPerMS: number = 1 / TimeSpan.msDays;

  private static hoursPerMS: number = 1 / TimeSpan.msHours;

  private static minutesPerMS: number = 1 / TimeSpan.msMinutes;

  private static secondsPerMS: number = 1 / TimeSpan.msSeconds;

  private msSinceEpoch: number;

  public get totalSeconds(): number {
    return this.msSinceEpoch * TimeSpan.secondsPerMS;
  }

  public get totalMinutes(): number {
    return this.msSinceEpoch * TimeSpan.minutesPerMS;
  }

  public get totalHours(): number {
    return this.msSinceEpoch * TimeSpan.hoursPerMS;
  }

  public get totalDays(): number {
    return this.msSinceEpoch * TimeSpan.daysPerMS;
  }

  public get totalMilliseconds(): number {
    return this.msSinceEpoch;
  }

  public get days(): number {
    return Math.floor(this.msSinceEpoch / TimeSpan.msDays);
  }

  public get hours(): number {
    return Math.floor((this.msSinceEpoch / TimeSpan.msHours) % 24);
  }

  public get minutes(): number {
    return Math.floor((this.msSinceEpoch / TimeSpan.msMinutes) % 60);
  }

  public get seconds(): number {
    return Math.floor((this.msSinceEpoch / TimeSpan.msSeconds) % 60);
  }

  public get milliseconds(): number {
    return Math.floor(this.msSinceEpoch % 1000);
  }

  public get duration(): TimeSpan {
    const t = this.msSinceEpoch;
    return new TimeSpan(t > 0 ? t : -t);
  }

  public get trimmedTime(): TimeSpan {
    return new TimeSpan(Math.ceil(this.msSinceEpoch % TimeSpan.msDays));
  }

  constructor(ms: number);
  // tslint:disable-next-line: unified-signatures
  constructor(days: number, hours: number, minutes?: number, seconds?: number, milliseconds?: number);
  constructor(days: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number) {
    if (arguments.length === 1) {
      this.msSinceEpoch = days;
    } else {
      this.msSinceEpoch =
        (days || 0) * TimeSpan.msDays +
        (hours || 0) * TimeSpan.msHours +
        (minutes || 0) * TimeSpan.msMinutes +
        (seconds || 0) * TimeSpan.msSeconds +
        (milliseconds || 0);
    }
  }

  public toString(formatAs12: boolean = false): string {
    let ams = this.msSinceEpoch;

    const text = [];
    let postFix = '';

    function padLeft(n: number, c: number = 2, t: string = '0'): string {
      let value = n.toString();
      if (value.length < c) {
        value = t + value;
      }
      return value;
    }

    function format(max: number, f12: boolean = false) {
      let txt = null;
      if (ams > max) {
        const n = Math.floor(ams / max);
        ams = ams % max;
        if (f12) {
          if (n > 12) {
            postFix = ' PM';
            txt = padLeft(n - 12);
          } else {
            postFix = ' AM';
          }
        }
        if (!txt) {
          txt = padLeft(n);
        }
      }
      if (txt) {
        text.push(txt);
      }
      return txt;
    }

    const d = format(TimeSpan.msDays);
    format(TimeSpan.msHours, formatAs12 && !d);
    format(TimeSpan.msMinutes);
    let s = format(TimeSpan.msSeconds);
    if (ams) {
      s += '.' + ams;
      text[text.length - 1] = s;
    }
    return `${text.join(':')}${postFix}`;
  }

  public add(ts: TimeSpan): TimeSpan {
    return new TimeSpan(this.msSinceEpoch + ts.msSinceEpoch);
  }

  public equals(ts: TimeSpan): boolean {
    return ts.msSinceEpoch === this.msSinceEpoch;
  }
}
