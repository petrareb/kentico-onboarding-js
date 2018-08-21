import { OrderedMap } from 'immutable';
import { ListItem } from '../models/ListItem';
import { Guid } from '../utils/ownTypes';

export type IAppState = {
  readonly items: OrderedMap<Guid, ListItem>
};
