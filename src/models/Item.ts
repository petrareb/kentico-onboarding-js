import { Record } from 'immutable';
import { IItem } from './IItem';

const defaultRecord: IItem = {
  text: '',
  id: '',
  isEdited: false
};

export class Item extends Record(defaultRecord, 'Item') {
  readonly id: Guid;
  readonly text: string;
  readonly isEdited: boolean;

  constructor(props: IItem = defaultRecord) {
    super(props);
  }
}
