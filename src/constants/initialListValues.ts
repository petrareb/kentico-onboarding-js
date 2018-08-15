import { ListItemRecord } from '../models/ListItemRecord';
import { generateGuid } from '../utils/generateId';
import { IItem } from './IItem';

const makeCoffeeItem: IItem = new ListItemRecord({
  text: 'Make coffee',
  id: generateGuid(),
  isEdited: false
});

const sleepItem: IItem = new ListItemRecord({
  text: 'Sleep',
  id: generateGuid(),
  isEdited: false
});

export const initialValues = [
  [makeCoffeeItem.id, makeCoffeeItem], [sleepItem.id, sleepItem]
];
