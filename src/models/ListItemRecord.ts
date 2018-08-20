import { Record } from 'immutable';
import { IItem } from './IItem';

const defaultRecord: IItem = {
  text: '',
  id: '',
  isEdited: false
};

// const ItemRecord = ;

export class ListItemRecord extends Record(defaultRecord, 'ItemRecord') {
  readonly id: string;
  readonly text: string;
  readonly isEdited: boolean;

  with = (x) =>
    this.merge(x) as any as ListItemRecord;
}
