import { ADD_NEW_ITEM } from '../constants/todoActionTypes';

export const addNewItemActionFactory = (generatingIdFunction: () => string) => (text: string) => ({
  type: ADD_NEW_ITEM,
  payload: {
    text,
    id: generatingIdFunction()
  }
});
