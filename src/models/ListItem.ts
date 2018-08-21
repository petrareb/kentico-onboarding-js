import { Item } from './Item';
import { IItem } from './IItem';

const defaultRecord: IItem = {
  text: '',
  id: '',
  isEdited: false
};

export class ListItem extends Item {
  constructor(props: IItem = defaultRecord) {
    super(props);
  }

  with = (item: object) =>
    this.merge(item) as any as ListItem;
}
