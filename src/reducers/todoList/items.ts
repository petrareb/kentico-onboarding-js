import { OrderedMap } from 'immutable';
import {
  ADD_NEW_ITEM,
  DELETE_ITEM,
  SAVE_ITEM,
  TOGGLE_EDITED
} from '../../constants/todoActionTypes';
import { item } from './item';
import { ListItem } from '../../models/ListItem';
import { Action } from '../../actions/types/Action';

export const items = (state = OrderedMap<string, ListItem>(), action: Action): OrderedMap<string, ListItem> => {
  switch (action.type) {
    case ADD_NEW_ITEM: {
      const newItem = new ListItem({
        id: action.payload.id,
        text: action.payload.text,
        isEdited: false
      });
      return state.set(action.payload.id, newItem);
    }
    case DELETE_ITEM: {
      return state.delete(action.payload.id);
    }
    case TOGGLE_EDITED:
    case SAVE_ITEM: {
      const itemToEdit = new ListItem(state.get(action.payload.id));
      const editedItem = item(itemToEdit, action);
      return state.update(action.payload.id, () => editedItem);
    }
    default:
      return state;
  }
};
