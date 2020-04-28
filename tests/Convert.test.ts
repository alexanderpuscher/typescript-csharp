import { Convert } from '../src/index';

test('Encoding UTF8 ⇢ base64', () => {
    expect(Convert.toBase64String('✓ à la mode')).toBe('4pyTIMOgIGxhIG1vZGU=');
    expect(Convert.toBase64String('\n')).toBe('Cg==');
});

test('Decoding base64 ⇢ UTF8', () => {
    expect(Convert.fromBase64String('4pyTIMOgIGxhIG1vZGU=')).toBe('✓ à la mode');
    expect(Convert.fromBase64String('Cg==')).toBe('\n');
});