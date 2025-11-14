//TEST 4, 5, 6: Testing if the calculator works as intended

import { Calculator } from './calculator';

describe('Calculator', () => {
  let calc: Calculator;

  beforeEach(() => {
    calc = new Calculator();
  });

  it('Should add numbers correctly', () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  it('Should divide numbers correctly', () => {
    expect(calc.divide(6, 2)).toBe(3);
  });

  it('Should give an error when dividing by zero', () => {
    expect(() => calc.divide(5, 0)).toThrowError('Division by zero');
  });
});
