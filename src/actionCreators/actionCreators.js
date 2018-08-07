import { ADD_NEW_ITEM, DELETE_ITEM, SAVE_ITEM, TOGGLE_EDITED } from '../constants/actionTypes';

export const addNewItem = newText => ({
  type: ADD_NEW_ITEM,
  text: newText
});

export const toggleEdited = itemId => ({
  type: TOGGLE_EDITED,
  id: itemId
});

export const deleteItem = itemId => ({
  type: DELETE_ITEM,
  id: itemId
});

export const saveItem = (itemId, newText) => ({
  type: SAVE_ITEM,
  id: itemId,
  text: newText
});
