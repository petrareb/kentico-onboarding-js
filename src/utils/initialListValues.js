import { ListItemRecord } from '../records/ListItemRecord';
import { generateGuid } from './generateId';

const initItem1 = new ListItemRecord({
  text: 'Make coffee',
  id: generateGuid(),
  isEdited: false
});

const initItem2 = new ListItemRecord({
  text: 'Sleep',
  id: generateGuid(),
  isEdited: false
});

export const initialValues = [
  [initItem1.id, initItem1], [initItem2.id, initItem2]
];
