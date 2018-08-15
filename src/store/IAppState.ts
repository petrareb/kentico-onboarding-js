import { IItem } from '../constants/IItem';
import { OrderedMap } from 'immutable';

export type IAppState = {
  readonly items: OrderedMap<string, IItem>
}
