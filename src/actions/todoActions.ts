import {
  DELETE_ITEM,
  SAVE_ITEM,
  TOGGLE_EDITED
} from '../constants/todoActionTypes';
import { generateGuid } from '../utils/generateId';
import { addNewItemActionFactory } from './addNewItemActionFactory';

export const addNewItem = addNewItemActionFactory(generateGuid);

export const toggleEdited = (id: string) => ({
  type: TOGGLE_EDITED,
  payload: {
    id
  }
});

export const deleteItem = (id: string) => ({
  type: DELETE_ITEM,
  payload: {
    id
  }
});

export const saveItem = (id: string, text: string) => ({
  type: SAVE_ITEM,
  payload: {
    id,
    text
  }
});
