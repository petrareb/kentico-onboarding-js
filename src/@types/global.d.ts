import { OrderedMap } from 'immutable';
import { ListItem } from '../models/ListItem';

declare global {
  export type Guid = string;

  export type ListValues = OrderedMap<Guid, ListItem>;
}
