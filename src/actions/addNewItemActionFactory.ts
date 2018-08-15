import { ADD_NEW_ITEM } from '../constants/todoActionTypes';
import { IAction } from './IAction';

export const addNewItemActionFactory = (generatingIdFunction: () => string) =>
  (text: string): IAction => ({
    type: ADD_NEW_ITEM,
    payload: {
      text,
      id: generatingIdFunction()
    }
  });
