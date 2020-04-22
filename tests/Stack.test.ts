import { Stack, Guid } from '../src/index';

test('Stack is empty', () => {
    var stack = new Stack();
    expect(stack.length).toBe(0);
});

test('Queue has 2 items', () => {
    var stack = new Stack();
    var guid1 = Guid.newGuid();
    var guid2 = Guid.newGuid();
    stack.push(guid1);
    stack.push(guid2);

    expect(stack.length).toBe(2);
    expect(stack.pop()).toBe(guid2);
    expect(stack.pop()).toBe(guid1);
    expect(stack.length).toBe(0);
});