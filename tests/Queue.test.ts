import { Queue, Guid } from '../src/index';

test('Queue is empty', () => {
    var queue = new Queue();
    expect(queue.length).toBe(0);
    var guid1 = Guid.newGuid();
    queue.enqueue(guid1);
    queue.dequeue();
    expect(queue.length).toBe(0);
});

test('Queue has 2 items', () => {
    var queue = new Queue();
    var guid1 = Guid.newGuid();
    var guid2 = Guid.newGuid();
    queue.enqueue(guid1);
    queue.enqueue(guid2);
    
    expect(queue.length).toBe(2);
    expect(queue.dequeue()).toBe(guid1);
    expect(queue.dequeue()).toBe(guid2);
    expect(queue.length).toBe(0);
});