import { ListItemRecord } from '../models/ListItemRecord';
import { generateGuid } from '../utils/generateId';

const makeCoffeeItem = new ListItemRecord({
  text: 'Make coffee',
  id: generateGuid(),
  isEdited: true
});

const sleepItem = new ListItemRecord({
  text: 'Sleep',
  id: generateGuid(),
  isEdited: false
});

export const initialValues = [
  [makeCoffeeItem.id, makeCoffeeItem], [sleepItem.id, sleepItem]
];
