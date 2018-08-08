import {
  ADD_NEW_ITEM,
  DELETE_ITEM,
  SAVE_ITEM,
  TOGGLE_EDITED
} from '../constants/actionTypes';

export const addNewItemAction = text => ({
  type: ADD_NEW_ITEM,
  payload: {
    text
  }
});

export const toggleEditedAction = id => ({
  type: TOGGLE_EDITED,
  payload: {
    id
  }
});

export const deleteItemAction = id => ({
  type: DELETE_ITEM,
  payload: {
    id
  }
});

export const saveItemAction = (id, text) => ({
  type: SAVE_ITEM,
  payload: {
    id,
    text
  }
});
