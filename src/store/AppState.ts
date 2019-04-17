import { OrderedMap } from 'immutable';
import { ListItem } from '../models/ListItem';

export type AppState = {
  readonly items: OrderedMap<Guid, ListItem>,
  readonly isFetchingAll: boolean,
  readonly hasError: boolean,
};
