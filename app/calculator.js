/**
 *
 * a class for calculator
 * @class Calculator
 */
class Calculator {
  /**
   * Creates an instance of Calculator.
   * @memberof Calculator
   */
  constructor() {

  };

  /**
   *
   *
   * @param {Number} a a float or integer number
   * @param {Number} b a float or integer number
   * @return {Number} foat or integer result
   * @memberof Calculator
   */
  add(a, b) {
    return a + b;
  };
  /**
   *
   *
   * @param {Number} a a float or integer
   * @param {Number} b a float or integer
   * @return {Number} float or integer result
   * @memberof Calculator
   */
  multiply(a, b) {
    return a * b;
  }
};

module.exports = Calculator;
