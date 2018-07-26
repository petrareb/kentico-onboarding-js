import { generateGuid } from './generateId';

describe('Guid function validation', () => {
  it('checks valid format of generated guid', () => {
    const guidRegex = RegExp('[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-' +
      '[89ab][0-9a-f]{3}-[0-9a-f]{12}');
    const generatedId = generateGuid();

    const result = guidRegex.test(generatedId);

    expect(result).toBeTruthy();
  });
});

describe('Guid function validation', () => {
  it('generates different guids', () => {
    const guid1 = generateGuid();
    const guid2 = generateGuid();
    const guid3 = generateGuid();

    const result = guid1 !== guid2
      && guid1 !== guid3
      && guid2 !== guid3;

    expect(result).toBeTruthy();
  });
});
