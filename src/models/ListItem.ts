import { baseItem } from './baseItem';
import { ItemType } from './ItemType';

const defaultRecord: ItemType = {
  text: '',
  id: '',
  isEdited: false
};

export class ListItem extends baseItem<ItemType>(defaultRecord, 'ListItem') {
  readonly id: Guid;
  readonly text: string;
  readonly isEdited: boolean;

  constructor(props: ItemType = defaultRecord) {
    super(props);
  }
}
