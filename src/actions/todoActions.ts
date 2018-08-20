import {
  DELETE_ITEM,
  SAVE_ITEM,
  TOGGLE_EDITED
} from '../constants/todoActionTypes';
import { generateGuid } from '../utils/generateId';
import { addNewItemActionFactory } from './addNewItemActionFactory';
import { IAction } from './IAction';

export const addNewItem: (text: string) => IAction = addNewItemActionFactory(generateGuid);

export const toggleEdited = (id: string): IAction => ({
  type: TOGGLE_EDITED,
  payload: {
    id
  }
});

export const deleteItem = (id: string): IAction => ({
  type: DELETE_ITEM,
  payload: {
    id
  }
});

export const saveItem = (id: string, text: string): IAction => ({
  type: SAVE_ITEM,
  payload: {
    id,
    text
  }
});
