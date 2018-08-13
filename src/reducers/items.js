import { OrderedMap } from "immutable";
import {
  ADD_NEW_ITEM,
  DELETE_ITEM,
  SAVE_ITEM,
  TOGGLE_EDITED
} from '../constants/todoActionTypes';
import { initialValues } from '../constants/initialListValues';
import { item } from './item';

export const items = (state = OrderedMap(initialValues), action) => {
  switch (action.type) {
    case ADD_NEW_ITEM: {
      return state.set(action.payload.item.id, action.payload.item);
    }
    case DELETE_ITEM: {
      return state.delete(action.payload.id);
    }
    case TOGGLE_EDITED: {
      const editedItem = item(state.get(action.payload.id), action);
      return state.update(action.payload.id, () => editedItem);
    }
    case SAVE_ITEM: {
      const editedItem = item(state.get(action.payload.id), action);
      return state.update(action.payload.id, () => editedItem);
    }
    default:
      return state;
  }
};
