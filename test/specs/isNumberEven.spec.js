const NumbersValidator = require('../../app/numbers_validator');
const {expect} = require('chai');

describe(`isNumberEven positive scenarios`, () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = undefined;
  });
  it(`should return true if number is even`, () => {
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });
});
