import { Guid } from '../src/index';

test('Guid is empty', () => {
    expect(Guid.Empty).toBe('00000000-0000-0000-0000-000000000000');
});

test('Guid is valid', () => {
    let guid = Guid.newGuid();
    expect(guid).not.toBe(Guid.parse('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'));
    expect(guid).not.toBe(Guid.Empty);
});