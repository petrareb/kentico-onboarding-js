import { generateGuid } from './generateId';

describe('generateGuid function', () => {
  it('generates valid format of guid', () => {
    const guidRegex = RegExp('[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-'
      + '[89ab][0-9a-f]{3}-[0-9a-f]{12}');
    const generatedId: Guid = generateGuid();
    const result: boolean = guidRegex.test(generatedId);

    expect(result)
      .toBeTruthy();
  });

  it('generates different guids', () => {
    const guid1: Guid = generateGuid();
    const guid2: Guid = generateGuid();
    const guid3: Guid = generateGuid();

    const result: boolean = guid1 !== guid2
      && guid1 !== guid3
      && guid2 !== guid3;

    expect(result)
      .toBeTruthy();
  });
});
