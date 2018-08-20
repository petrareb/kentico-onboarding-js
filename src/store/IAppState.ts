import { OrderedMap } from 'immutable';
import { ListRecord } from '../models/ListItemRecord';

export type IAppState = {
  readonly items: OrderedMap<string, ListRecord>
}
