import { generateGuid } from '../utils/generateId';
import { ListRecord } from '../models/ListItemRecord';

const makeCoffeeItem = new ListRecord({
  text: 'Make coffee',
  id: generateGuid(),
  isEdited: false
});

const sleepItem = new ListRecord({
  text: 'Sleep',
  id: generateGuid(),
  isEdited: false
});

export const initialValues = [
  [makeCoffeeItem.id, makeCoffeeItem], [sleepItem.id, sleepItem]
];
