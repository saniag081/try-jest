const { sum, multiply, divice } = require('./02-math');

describe('Test for math', () => {
  describe('Tests for sum', () => {
    test('adds 1 + 3 should be 4', () => {
      const rta = sum(1, 3);
      expect(rta).toBe(4);
    });
  });

  describe('Tests for multiply', () => {
    test('should be 4', () => {
      const rta = multiply(1, 4);
      expect(rta).toBe(4);
    });
  });

  describe('Tests for divice', () => {
    test('should divide', () => {
      const rta = divice(6, 3);
      expect(rta).toBe(2);
      const rta2 = divice(5, 2);
      expect(rta2).toBe(2.5);
    });

    test('should divide for zero', () => {
      const rta = divice(6, 0);
      expect(rta).toBeNull();
      const rta2 = divice(5, 0);
      expect(rta2).toBeNull();
    });
  });
});
