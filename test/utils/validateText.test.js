import { isValidText } from '../../src/utils/validateText';

describe('String validation', () => {
  it('accepts nonempty string', () => {
    const nonemptyText = 'hello world ';
    expect(isValidText(nonemptyText))
      .toBe(true);
  });
  it('rejects string containing only whitespace chars', () => {
    const whiteSpaceText = '    ';
    expect(isValidText(whiteSpaceText)).toBe(false);
  });
  it('rejects empty string', () => {
    const emptyText = '';
    expect(isValidText(emptyText)).toBe(false);
  });
});
