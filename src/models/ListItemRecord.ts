import { Record } from 'immutable';
import { IItem } from './IItem';

const defaultRecord: IItem = {
  text: '',
  id: '',
  isEdited: false
};

const ItemRecord = Record(defaultRecord, 'ItemRecord');

export class ListItemRecord extends ItemRecord {
  readonly id: string;
  readonly text: string;
  readonly isEdited: boolean;
}
