import * as memoize from 'memoizee';
import { Guid } from '../utils/ownTypes';

export const memoizedIds = memoize((ids: Array<Guid>): Array<Guid> => ids, {
  length: false,
  primitive: true
});
