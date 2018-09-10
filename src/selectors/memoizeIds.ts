import * as memoize from 'memoizee';

export const memoizedIds = memoize((ids: Array<Guid>): Array<Guid> => ids, {
  length: false,
  primitive: true
});
