import { ListItemRecord } from '../models/ListItemRecord';
import { generateGuid } from '../utils/generateId';

const makeCoffeeItem = new ListItemRecord({
  text: 'Make coffee',
  id: generateGuid(),
  isEdited: false
});

const sleepItem = new ListItemRecord({
  text: 'Sleep',
  id: generateGuid(),
  isEdited: true
});

export const initialValues = [
  [makeCoffeeItem.id, makeCoffeeItem], [sleepItem.id, sleepItem]
];
