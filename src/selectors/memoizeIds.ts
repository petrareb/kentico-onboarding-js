import memoize from 'memoizee';

export const memoizedIds = memoize(ids => ids, {
  length: false,
  primitive: true
});
