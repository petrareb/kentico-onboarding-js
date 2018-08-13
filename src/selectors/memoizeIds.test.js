import { memoizedIds } from './memoizeIds';

describe('Function memoizeIds ', () => {
  it('return the same values it takes as a parameter', () => {
    const originalParams = ['1', '2'];
    const memoizedParams = memoizedIds(originalParams);

    expect(memoizedParams).toEqual(originalParams);
  });
});
