import { Record } from 'immutable';
import { IItem } from '../constants/IItem';

const defaultRecord: IItem = {
  text: '',
  id: '',
  isEdited: false
};

export const ListItemRecord = Record(defaultRecord, 'ListItemRecord');
