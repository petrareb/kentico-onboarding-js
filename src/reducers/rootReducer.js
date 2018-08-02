import {
  ADD_NEW_ITEM,
  DELETE_ITEM,
  SAVE_ITEM,
  TOGGLE_EDITED
} from '../constants/actionTypes';
import { OrderedMap } from "immutable";
import { initialValues } from '../constants/initialListValues';
import { generateGuid } from '../utils/generateId';
import { ListItemRecord } from '../models/ListItemRecord';


const initialState = {
  items: OrderedMap(initialValues)
};

export const _createNewItem = newText =>
  new ListItemRecord({
    id: generateGuid(),
    text: newText
  });

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_ITEM: {
      const newItem = this._createNewItem(action.text);
      return state.items.set(newItem.id, newItem);
    }
    case DELETE_ITEM: {
      return state.items.delete(action.id);
    }
    case TOGGLE_EDITED: {
      return state.items.update(action.id, oldItem =>
        oldItem.merge({
          isEdited: !oldItem.isEdited
        }));
    }
    case SAVE_ITEM: {
      return state.items.update(action.id, oldItem =>
        oldItem.merge({
          isEdited: false,
          text: action.text
        }));
    }
    default:
      return state;
  }
};
