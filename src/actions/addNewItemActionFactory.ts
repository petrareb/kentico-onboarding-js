import { ADD_NEW_ITEM } from '../constants/todoActionTypes';
import { actionInterface } from './actionInterface';

export const addNewItemActionFactory = (generatingIdFunction: () => string) =>
  (text: string): actionInterface => ({
    type: ADD_NEW_ITEM,
    payload: {
      text,
      id: generatingIdFunction()
    }
  });
