import { mockRandom } from 'jest-mock-random';
import pikkr from '.';

describe('pikkr function', () => {
  it('will always return pizza if random number resolves to 0', () => {
    // mocking Math.random in
    // Math.floor(Math.random() * arr.length)
    mockRandom(0.4);
    expect(pikkr(['pizza', 'pasta'])).toBe('pizza');
  });

  it('will always return pasta if random number resolves to 1', () => {
    // mocking Math.random in
    // Math.floor(Math.random() * arr.length)
    mockRandom(0.7);
    expect(pikkr(['pizza', 'pasta'])).toBe('pasta');
  });

  it('will throw a type error if not an array', () => {
    // @ts-ignore
    expect(() => pikkr('hi')).toThrowError(TypeError);
  });

  it('will throw an error if not enough items in array', () => {
    expect(() => pikkr(['pizza'])).toThrowError(Error);
  });
});
