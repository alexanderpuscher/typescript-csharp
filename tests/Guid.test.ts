import { Guid } from '../src/index';

test('Guid is empty', () => {
    expect(Guid.Empty).toBe('00000000-0000-0000-0000-000000000000');
});