import * as memoize from 'memoizee';

export const memoizedIds = memoize((ids: Array<string>): Array<string> => ids, {
  length: false,
  primitive: true
});
