import { OrderedMap } from 'immutable';
import { ListItemRecord } from '../models/ListItemRecord';

export type IAppState = {
  readonly items: OrderedMap<string, ListItemRecord>
};
