import { memoizedIds } from './memoizeIds';

describe('Function memoizeIds ', () => {
  it('returns the same values it takes as a parameter', () => {
    const originalParams = ['1', '2'];
    const memoizedParams = memoizedIds(originalParams);

    expect(memoizedParams).toEqual(originalParams);
  });

  it('returns the same memoized values after being called more times with the same parameter', () => {
    const originalParams = ['1', '2'];
    const memoizedParams1 = memoizedIds(originalParams);
    const memoizedParams2 = memoizedIds(originalParams);
    expect(memoizedParams1).toEqual(memoizedParams2);
  });
});
