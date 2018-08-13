import { memoizedIds } from './memoizeIds';

describe('Function memoizeIds ', () => {
  it('return the same values it takes as a parameter', () => {
    const params = ['1', '2'];
    const memoizedParams = memoizedIds(params);

    expect(memoizedParams).toEqual(params);
  });
});
