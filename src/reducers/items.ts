import { OrderedMap } from 'immutable';
import {
  ADD_NEW_ITEM,
  DELETE_ITEM,
  SAVE_ITEM,
  TOGGLE_EDITED
} from '../constants/todoActionTypes';
import { initialValues } from '../constants/initialListValues';
import { item } from './item';
import { ListItemRecord } from '../models/ListItemRecord';
import { IAction } from '../actions/IAction';

export const items = (state = OrderedMap<string, ListItemRecord>(initialValues), action: IAction): OrderedMap<string, ListItemRecord> => {
  switch (action.type) {
    case ADD_NEW_ITEM: {
      const newItem = new ListItemRecord({
        id: action.payload.id,
        text: action.payload.text
      });
      return state.set(action.payload.id, newItem);
    }
    case DELETE_ITEM: {
      return state.delete(action.payload.id);
    }
    case TOGGLE_EDITED:
    case SAVE_ITEM: {
      const itemToEdit = new ListItemRecord(state.get(action.payload.id));
      const editedItem = item(itemToEdit, action);
      return state.update(action.payload.id, () => editedItem);
    }
    default:
      return state;
  }
};
