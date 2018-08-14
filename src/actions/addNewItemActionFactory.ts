import { ADD_NEW_ITEM } from '../constants/todoActionTypes';

export const addNewItemActionFactory = (generatingIdFunction) => (text) => ({
  type: ADD_NEW_ITEM,
  payload: {
    text,
    id: generatingIdFunction()
  }
});
