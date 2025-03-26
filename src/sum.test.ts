import { describe, expect, test } from 'vitest';
import { sum } from './sum';

describe('sum function', () => {
  test('adds two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});