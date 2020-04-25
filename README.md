# Simple lightweight .NET Based TypeScript Library

![Build Status](https://img.shields.io/circleci/build/github/alexanderpuscher/typescript-csharp?token=408458f65976cf5d16d80380f7d9aacd3f34590f)
![Quality Gate](https://img.shields.io/sonar/quality_gate/alexanderpuscher_typescript-csharp?server=https%3A%2F%2Fsonarcloud.io)
![npm](https://img.shields.io/npm/v/typescript-csharp)
![npm](https://img.shields.io/npm/dw/typescript-csharp)

## Setup
```bash
npm i typescript-csharp
```

Works with Angular & Node.js!

---

## Features v0.3.4

### Guid
```typescript
- static Empty: string;
- static isGuid(guid: any): boolean;
- static newGuid(): Guid;
- static parse(guid: string): Guid;
- equals(guid: Guid): boolean;
- toString(): string;
- toJSON(): any;
```  

### String
```typescript
- static Empty: string;
- static isNullOrWhiteSpace(value: string): boolean;
```

### StringBuilder
```typescript
- constructor(value: string = String.Empty);
- append(value: string): void;
- appendLine(value: string): void;
- clear(): void;
- toString(): string;
```

### Generic Collections

#### List & Dictionary
```typescript
- IEnumerable<T>
    - elementAt(index: number): T;
    - any(predicate?: (item: T) => boolean): boolean;
    - all(predicate?: (item: T) => boolean): boolean;
    - single(predicate?: (item: T) => boolean): T;
    - first(predicate?: (item: T) => boolean): T;
    - last(predicate?: (item: T) => boolean): T;
    - singleOrDefault(predicate: (item: T) => boolean): T;
    - firstOrDefault(predicate: (item: T) => boolean): T;
    - lastOrDefault(predicate: (item: T) => boolean): T;
    - where(predicate: (item: T) => boolean): IEnumerable<T>;
    - select<TResult>(predicate: (item: T) => TResult): IEnumerable<TResult>;
    - join<TOuter, TMatch, TResult>(
            outer: IEnumerable<TOuter>,
            conditionInner: (item: T) => TMatch,
            conditionOuter: (item: TOuter) => TMatch,
            select: (x: T, y: TOuter) => TResult,
            leftJoin?: boolean,
        ): IEnumerable<TResult>;
    - groupBy(predicate: (item: T) => T[]): IEnumerable<IGroup<T>>;
    - orderBy(comparer: IComparer<T>): IEnumerable<T>;
    - distinct(comparer: IEqualityComparer<T>): IEnumerable<T>;
    - union(list: IEnumerable<T>): IEnumerable<T>;
    - skip(no: number): IEnumerable<T>;
    - take(no: number): IEnumerable<T>;
    - sum(predicate: (item: T) => number): number;
    - avg(predicate: (item: T) => number): number;
    - min(predicate: (item: T) => number): number;
    - max(predicate: (item: T) => number): number;
    - count(predicate?: (item: T) => boolean): number;
    - forEach(predicate: (item: T) => void): void;
    - length: number;
    - toArray(): T[];
    - asEnumerable(): IEnumerable<T>;

- IList<T> extends IEnumerable<T>
    - add(item: T): void;
    - addRange(items: T[]): void;
    - contains(item: T): boolean;
    - clear(): void;
    - remove(predicate: (item: T) => boolean): void;

- IDictionary<TKey, TValue> extends IEnumerable<T>
    - add(key: TKey, value: TValue): void;
    - addRange(items: KeyValuePair<TKey, TValue>[]): void;
    - clear(): void;
    - containsKey(key: TKey): boolean;
    - containsValue(value: TValue): boolean;
    - remove(predicate: (item: KeyValuePair<TKey, TValue>) => boolean): void;
    - tryGetValue(key: TKey): TValue;
```

#### Queue
```typescript
- length: number;
- clear(): void;
- contains(item: T): boolean;
- enqueue(item: T): void;
- dequeue(): T;
- peek(): T;
- toArray(): T[];
```

#### Stack
```typescript
- length: number;
- clear(): void;
- contains(item: T): boolean;
- push(item: T): void;
- pop(): T;
- peek(): T;
- toArray(): T[];
```

### DateTime
```typescript
- static get today(): DateTime;
- static get utcNow(): DateTime;
- static get now(): DateTime;
- static parse(s: string): DateTime;
- constructor();
- constructor(time?: number | string);
- constructor(year?: number, month?: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number);
- get day(): number;
- get dayOfWeek(): number;
- get month(): number;
- get year(): number;
- get hour(): number;
- get minute(): number;
- get second(): number;
- get milliSecond(): number;
- get msSinceEpoch(): number;
- get timeZoneOffset(): TimeSpan;
- get date(): DateTime;
- get time(): TimeSpan;
- toLocaleString: (locales?: string | string[], options?: Intl.DateTimeFormatOptions) => string;
- toLocaleDateString: (locales?: string | string[], options?: Intl.DateTimeFormatOptions) => string;
- toLocaleTimeString: (locales?: string | string[], options?: Intl.DateTimeFormatOptions) => string;
- toUTCString: () => string;
- toISOString: () => string;
- toJSON: (key?: any) => string;
- toTimeString: () => string;
- toDateString: () => string;
- add(d: DateTime | TimeSpan): DateTime;
- add(days: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number): DateTime;
- addMonths(m: number): DateTime;
- addYears(y: number): DateTime;
- diff(rhs: Date | DateTime): TimeSpan;
- equals(d: DateTime): boolean;
- toRelativeString(dt?: DateTime | Date): string;
```

### TimeSpan
```typescript
- static fromDays(n: number): TimeSpan;
- static fromHours(n: number): TimeSpan;
- static fromMinutes(n: number): TimeSpan;
- static fromSeconds(n: number): TimeSpan;
- static parse(text: string): TimeSpan;
- get totalSeconds(): number;
- get totalMinutes(): number;
- get totalHours(): number;
- get totalDays(): number;
- get totalMilliseconds(): number;
- get days(): number;
- get hours(): number;
- get minutes(): number;
- get seconds(): number;
- get milliseconds(): number;
- get duration(): TimeSpan;
- get trimmedTime(): TimeSpan;
- constructor(ms: number);
- constructor(days: number, hours: number, minutes?: number, seconds?: number, milliseconds?: number);
- toString(formatAs12?: boolean): string;
- add(ts: TimeSpan): TimeSpan;
- equals(ts: TimeSpan): boolean;
```

---

## License

![GitHub](https://img.shields.io/github/license/alexanderpuscher/typescript-csharp)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © Alexander Puscher.