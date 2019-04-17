import { ADD_NEW_ITEM } from '../../constants/todoActionTypes';
import { TodoListAction } from '../types/TodoListAction';

export const addNewItemActionFactory = (generatingIdFunction: () => string) =>
  (text: string): TodoListAction => ({
    type: ADD_NEW_ITEM,
    payload: {
      text,
      id: generatingIdFunction()
    }
  });
