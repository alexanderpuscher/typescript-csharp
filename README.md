<!-- ![GitHub package.json version](https://img.shields.io/github/package-json/v/alexanderpuscher/typescript-csharp) -->
![GitHub](https://img.shields.io/github/license/alexanderpuscher/typescript-csharp)
![npm](https://img.shields.io/npm/v/typescript-csharp)
![npm](https://img.shields.io/npm/dw/typescript-csharp)

# Simple lightweight .NET Based TypeScript Library

## v0.2.2:

### Guid
```typescript
- static Empty: string;
- static newGuid(): string;
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

### Generic Collections (List & Dictionary)
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
    - remove(predicate: (item: T) => boolean): void;
    - clear(): void;

- IDictionary<TKey, TValue>
    - add(key: TKey, value: TValue): void;
    - addRange(items: KeyValuePair<TKey, TValue>[]): void;
    - remove(predicate: (item: KeyValuePair<TKey, TValue>) => boolean): void;
    - clear(): void;
    - containsKey(key: TKey): boolean;
    - containsValue(value: TValue): boolean;
    - tryGetValue(key: TKey): TValue;
```

Next steps:
- Analyze code-coverage with [Codecov](https://codecov.io/) / [Sonarcloud](https://sonarcloud.io/)
- RegularExpressions, DateTime, TimeSpan