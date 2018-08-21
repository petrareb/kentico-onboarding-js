import { memoizedIds } from './memoizeIds';
import { Guid } from '../utils/ownTypes';

describe('Function memoizeIds ', () => {
  it('returns the same values it takes as a parameter', () => {
    const originalParams = ['1', '2'];
    const memoizedParams: Array<Guid> = memoizedIds(originalParams);

    expect(memoizedParams).toEqual(originalParams);
  });

  it('returns the same memoized values after being called more times with the same parameter', () => {
    const originalParams = ['1', '2'];
    const memoizedParams1: Array<Guid> = memoizedIds(originalParams);
    const memoizedParams2: Array<Guid> = memoizedIds(originalParams);
    expect(memoizedParams1).toEqual(memoizedParams2);
  });
});
