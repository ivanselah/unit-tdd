const Calculator = require('../calculator');

describe('calculator', () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });
  it('set', () => {
    calculator.set(1);
    expect(calculator.value).toBe(1);
  });
  it('clear', () => {
    calculator.set(1);
    calculator.clear();
    expect(calculator.value).toBe(0);
  });
  it('add', () => {
    calculator.set(3);
    calculator.add(5);
    expect(calculator.value).toBe(8);
  });
  it('add should throw an error if value is greater than 100', () => {
    expect(() => calculator.add(101)).toThrow(
      'value can not be greater than 100'
    );
  });
  it('subtract', () => {
    calculator.set(3);
    calculator.subtract(5);
    expect(calculator.value).toBe(-2);
  });
  it('multiply', () => {
    calculator.set(3);
    calculator.multiply(5);
    expect(calculator.value).toBe(15);
  });
  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      calculator.divide(0);
      expect(calculator.value).toBeNaN();
    });
    it('1 / 0 === Infinity', () => {
      calculator.set(1);
      calculator.divide(0);
      expect(calculator.value).toBe(Infinity);
    });
    it('2 / 2 === 1', () => {
      calculator.add(2);
      calculator.divide(2);
      expect(calculator.value).toBe(1);
    });
  });
});
