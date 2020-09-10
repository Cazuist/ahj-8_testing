import Validator from '../../Validator';
import cardsInfo from '../../cardsInfo';

describe('Testing of class Validator', () => {
    test.each([
      ['false for emty input', '', false],
      ['false for string input', '', false],
      ['false for input width string symbols', '12a3a4', false],
      ['true for 1-symbol number input', '1', true],
      ['true for 5-symbol number input', '12345', true],
      ['true for 10-symbol number input', '12345678910', true],

    ])(('should be %s'), (_, input, expected) => {
      expect(Validator.isNumber(input)).toBe(expected);
    });

    test.each([
      ['false for 1-symbol input', '1', false],
      ['false for 12-symbol input', '12', false],
      ['true for 13-symbol input', '1234567891011', true],
      ['true for 15-symbol input', '1234567891011121', true],
      ['true for 19-symbol input', '1234567891011121314', true],
      ['false for 20-symbol input', '12345678910111213141', false],
      ['false for 20-symbol input', '12345678910111213141', false],

    ])(('should be %s'), (_, input, expected) => {
      expect(Validator.isValidLength(input)).toBe(expected);
    });

    test.each([
      ['false for invalid card number', '4561261212345464', false],
      ['true for valid curt number', '4561261212345467', true],
    ])(('should be %s'), (_, input, expected) => {
      expect(Validator.isValidNumber(input)).toBe(expected);
    });

  test.each([
    ['mir', '20', 'mir'],
    ['mir', '25', 'mir'],
    ['mir', '29', 'mir'],
    ['dinners', '30', 'dinners'],
    ['jcb', '31', 'jcb'],
    ['amex', '34', 'amex'],
    ['jcb', '35', 'jcb'],
    ['dinners', '36', 'dinners'],
    ['amex', '37', 'amex'],
    ['dinners', '38', 'dinners'],
    ['visa', '40', 'visa'],
    ['visa', '45', 'visa'],
    ['visa', '49', 'visa'],
    ['maestro', '50', 'maestro'],
    ['maestro', '56', 'maestro'],
    ['maestro', '57', 'maestro'],
    ['maestro', '58', 'maestro'],
    ['maestro', '63', 'maestro'],
    ['maestro', '67', 'maestro'],
    ['master', '51', 'master'],
    ['master', '52', 'master'],
    ['master', '53', 'master'],
    ['master', '54', 'master'],
    ['master', '55', 'master'],
    ['discover', '60', 'discover'],
    ['unionpay', '62', 'unionpay'],
    ['uec', '70', 'uec'],
    ['uec', '74', 'uec'],
    ['uec', '79', 'uec'],
    ['undefined', '32', undefined],
    ['undefined', '33', undefined],
    ['undefined', '39', undefined],
    ['undefined', '59', undefined],
  ])(('should return %s'), (_, input, expected) => {
    expect(Validator.getCardName(input, cardsInfo)).toBe(expected);
  });
});
