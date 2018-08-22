import { OrderedMap } from 'immutable';
import { ListItem } from '../models/ListItem';

export type IAppState = {
  readonly items: OrderedMap<Guid, ListItem>
};
