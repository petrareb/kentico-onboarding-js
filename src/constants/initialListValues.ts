import { generateGuid } from '../utils/generateId';
import { ListItemRecord } from '../models/ListItemRecord';

const makeCoffeeItem = new ListItemRecord({
  text: 'Make coffee',
  id: generateGuid(),
  isEdited: false
});

const sleepItem = new ListItemRecord({
  text: 'Sleep',
  id: generateGuid(),
  isEdited: false
});

export const initialValues = [
  [makeCoffeeItem.id, makeCoffeeItem], [sleepItem.id, sleepItem]
];
