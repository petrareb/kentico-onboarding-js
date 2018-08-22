import {
  DELETE_ITEM,
  SAVE_ITEM,
  TOGGLE_EDITED
} from '../constants/todoActionTypes';
import { generateGuid } from '../utils/generateId';
import { addNewItemActionFactory } from './factories/addNewItemActionFactory';
import { Action } from './types/Action';

export const addNewItem: (text: string) => Action = addNewItemActionFactory(generateGuid);

export const toggleEdited = (id: string): Action => ({
  type: TOGGLE_EDITED,
  payload: {
    id
  }
});

export const deleteItem = (id: string): Action => ({
  type: DELETE_ITEM,
  payload: {
    id
  }
});

export const saveItem = (id: string, text: string): Action => ({
  type: SAVE_ITEM,
  payload: {
    id,
    text
  }
});
