import { ADD_NEW_ITEM } from '../constants/todoActionTypes';
import { Action } from './Action';

export const addNewItemActionFactory = (generatingIdFunction: () => string) =>
  (text: string): Action => ({
    type: ADD_NEW_ITEM,
    payload: {
      text,
      id: generatingIdFunction()
    }
  });
