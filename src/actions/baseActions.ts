import {
  DELETE_ITEM,
  SAVE_ITEM,
  ListItem_ToggleEdited
} from '../constants/todoActionTypes';
import { generateGuid } from '../utils/generateId';
import { addNewItemActionFactory } from './factories/addNewItemActionFactory';
import { TodoListAction } from './types/TodoListAction';

export const addNewItem: (text: string) => TodoListAction = addNewItemActionFactory(generateGuid);

export const toggleEdited = (id: Guid): TodoListAction => ({
  type: ListItem_ToggleEdited,
  payload: {
    id
  }
});

export const deleteItem = (id: Guid): TodoListAction => ({
  type: DELETE_ITEM,
  payload: {
    id
  }
});

export const saveItem = (id: Guid, text: string): TodoListAction => ({
  type: SAVE_ITEM,
  payload: {
    id,
    text
  }
});
