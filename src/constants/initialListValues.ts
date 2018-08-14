import { ListItemRecord } from '../models/ListItemRecord';
import { generateGuid } from '../utils/generateId';
import { itemInterface } from './itemInterface';

const makeCoffeeItem: itemInterface = new ListItemRecord({
  text: 'Make coffee',
  id: generateGuid(),
  isEdited: false
});

const sleepItem: itemInterface = new ListItemRecord({
  text: 'Sleep',
  id: generateGuid(),
  isEdited: false
});

export const initialValues = [
  [makeCoffeeItem.id, makeCoffeeItem], [sleepItem.id, sleepItem]
];
