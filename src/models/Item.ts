import { Record } from 'immutable';
import { ItemType } from './ItemType';

const defaultRecord: ItemType = {
  text: '',
  id: '',
  isEdited: false
};

export class Item extends Record(defaultRecord, 'Item') {
  readonly id: Guid;
  readonly text: string;
  readonly isEdited: boolean;

  constructor(props: ItemType = defaultRecord) {
    super(props);
  }
}
