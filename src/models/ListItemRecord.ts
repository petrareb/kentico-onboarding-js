import { Record } from 'immutable';
import { itemInterface } from '../constants/itemInterface';

const defaultRecord: itemInterface = {
  text: '',
  id: '',
  isEdited: false
};

export const ListItemRecord = Record(defaultRecord, 'ListItemRecord');
