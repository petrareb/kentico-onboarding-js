import { isValidText } from './validateText';

describe('isValidText function', () => {
  it('accepts nonempty string', () => {
    const nonemptyText = 'hello world ';
    expect(isValidText(nonemptyText))
      .toBeTruthy();
  });

  it('rejects string containing only whitespace characters', () => {
    const whiteSpaceText = '    ';
    expect(isValidText(whiteSpaceText))
      .toBeFalsy();
  });

  it('rejects empty string', () => {
    const emptyText = '';
    expect(isValidText(emptyText))
      .toBeFalsy();
  });

  it('rejects undefined as input', () => {
    const undefinedValue: any = undefined;
    expect(isValidText(undefinedValue))
      .toBeFalsy();
  });

  it('rejects null as input', () => {
    const nullValue: any = null;
    expect(isValidText(nullValue))
      .toBeFalsy();
  });
});
