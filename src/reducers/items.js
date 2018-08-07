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

export const createNewItem = newText =>
  new ListItemRecord({
    id: generateGuid(),
    text: newText
  });

export const items = (state = OrderedMap(initialValues), action) => {
// export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_ITEM: {
      const newItem = createNewItem(action.text);
      return {
        ...state,
        items: state.set(newItem.id, newItem)
      };
    }
    case DELETE_ITEM: {
      return {
        ...state,
        items: state.delete(action.id)
      };
    }
    case TOGGLE_EDITED: {
      return {
        ...state,
        items: state.update(action.id, oldItem =>
          oldItem.merge({
            isEdited: !oldItem.isEdited
          }))
      };
    }
    case SAVE_ITEM: {
      return {
        ...state,
        items: state.update(action.id, oldItem =>
          oldItem.merge({
            isEdited: false,
            text: action.text
          }))
      };
    }
    default:
      return state;
  }
};
