import { OrderedMap } from 'immutable';
import { ListItem } from '../models/ListItem';

export type Guid = string;

export type ListValues = OrderedMap<Guid, ListItem>;
