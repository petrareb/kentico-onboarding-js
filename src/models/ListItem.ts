import { Item } from './Item';
import { ItemType } from './ItemType';

const defaultRecord: ItemType = {
  text: '',
  id: '',
  isEdited: false
};

export class ListItem extends Item {
  constructor(props: ItemType = defaultRecord) {
    super(props);
  }

  with = (item: object) =>
    this.merge(item) as any as ListItem;
}
