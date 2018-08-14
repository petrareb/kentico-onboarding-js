import {
  DELETE_ITEM,
  SAVE_ITEM,
  TOGGLE_EDITED
} from '../constants/todoActionTypes';
import { generateGuid } from '../utils/generateId';
import { addNewItemActionFactory } from './addNewItemActionFactory';

export const addNewItem = addNewItemActionFactory(generateGuid);

export const toggleEdited = id => ({
  type: TOGGLE_EDITED,
  payload: {
    id
  }
});

export const deleteItem = id => ({
  type: DELETE_ITEM,
  payload: {
    id
  }
});

export const saveItem = (id, text) => ({
  type: SAVE_ITEM,
  payload: {
    id,
    text
  }
});
