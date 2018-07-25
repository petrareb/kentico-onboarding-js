import { Record } from 'immutable';

const defaultRecord = {
  text: '', id: '', isEdited: false
};

export const ListItemRecord = Record(
  defaultRecord
);

