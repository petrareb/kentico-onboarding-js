import { isValidText } from './validateText';

describe('String validation', () => {
  it('accepts nonempty string', () => {
    const nonemptyText = 'hello world ';
    expect(isValidText(nonemptyText))
      .toBeTruthy();
  });
  it('rejects string containing only whitespace chars', () => {
    const whiteSpaceText = '    ';
    expect(isValidText(whiteSpaceText)).toBeFalsy();
  });
  it('rejects empty string', () => {
    const emptyText = '';
    expect(isValidText(emptyText)).toBeFalsy();
  });
  it('rejects undefined', () => {
    const undefinedValue = undefined;
    expect(isValidText(undefinedValue)).toBeFalsy();
  });
  it('rejects null', () => {
    const nullValue = null;
    expect(isValidText(nullValue)).toBeFalsy();
  });
});
