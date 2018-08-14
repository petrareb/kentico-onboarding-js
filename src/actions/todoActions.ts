import {
  DELETE_ITEM,
  SAVE_ITEM,
  TOGGLE_EDITED
} from '../constants/todoActionTypes';
import { generateGuid } from '../utils/generateId';
import { addNewItemActionFactory } from './addNewItemActionFactory';
import { actionInterface } from './actionInterface';

export const addNewItem = addNewItemActionFactory(generateGuid);

export const toggleEdited = (id: string): actionInterface => ({
  type: TOGGLE_EDITED,
  payload: {
    id
  }
});

export const deleteItem = (id: string): actionInterface => ({
  type: DELETE_ITEM,
  payload: {
    id
  }
});

export const saveItem = (id: string, text: string): actionInterface => ({
  type: SAVE_ITEM,
  payload: {
    id,
    text
  }
});
