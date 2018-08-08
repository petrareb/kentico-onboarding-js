import {
  ADD_NEW_ITEM,
  DELETE_ITEM,
  SAVE_ITEM,
  TOGGLE_EDITED
} from '../constants/actionTypes';
import { generateGuid } from '../utils/generateId';
import { ListItemRecord } from '../models/ListItemRecord';
import { OrderedMap } from "immutable";
import { initialValues } from '../constants/initialListValues';
import { item } from './item';

export const newItemFactory = (generatingIdFunction) => (text) =>
  new ListItemRecord({
    id: generatingIdFunction(),
    text
  });

export const createNewItem = newItemFactory(generateGuid);

export const items = (state = OrderedMap(initialValues), action) => {
  switch (action.type) {
    case ADD_NEW_ITEM: {
      const newItem = createNewItem(action.payload.text);
      return state.set(newItem.id, newItem);
    }
    case DELETE_ITEM: {
      return state.delete(action.payload.id);
    }
    case TOGGLE_EDITED: {
      const editedItem = item(state.get(action.payload.id), action);
      // memo(editedItem);
      return state.update(action.payload.id, () => editedItem);
    }
    case SAVE_ITEM: {
      const editedItem = item(state.get(action.payload.id), action);
      // memo(editedItem);
      return state.update(action.payload.id, () => editedItem);
    }
    default:
      return state;
  }
};
