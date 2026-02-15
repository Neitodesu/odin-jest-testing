import {
  capitalize,
  reverseString,
  calculator,
  caeserCipher,
  analyzeArray,
} from './index.js';

test('Capitalize', () => expect(capitalize('hello')).toBe('Hello'));

test('Reverse string', () => expect(reverseString('hello')).toBe('olleh'));

test('Add two numbers', () => expect(calculator.add(1, 2)).toBe(3));

test('Subtract two numbers', () => expect(calculator.subtract(4, 2)).toBe(2));

test('Divide two numbers', () => {
  expect(calculator.divide(10, 2)).toBe(5);
  expect(calculator.divide(10, 0)).toBeUndefined;
});

test('Multiply two numbers', () => {
  expect(calculator.multiply(5, 2)).toBe(10);
  expect(calculator.multiply(5, 0)).toBe(0);
});

test('Caeser Cipher', () => {
  expect(caeserCipher('xyz', 3)).toBe('abc');
  expect(caeserCipher('XYZ', 3)).toBe('ABC');
  expect(caeserCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('Analyze array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
