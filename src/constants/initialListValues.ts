import { generateGuid } from '../utils/generateId';
import { ListItem } from '../models/ListItem';

const makeCoffeeItem = new ListItem({
  text: 'Make coffee',
  id: generateGuid(),
  isEdited: false
});

const sleepItem = new ListItem({
  text: 'Sleep',
  id: generateGuid(),
  isEdited: false
});

export const initialValues = [
  [makeCoffeeItem.id, makeCoffeeItem], [sleepItem.id, sleepItem]
];
