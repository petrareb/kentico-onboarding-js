import {
  SAVE_ITEM,
  ListItem_ToggleEdited
} from '../constants/todoActionTypes';
import { TodoListAction } from './types/TodoListAction';


export const toggleEdited = (id: Guid): TodoListAction => ({
  type: ListItem_ToggleEdited,
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
