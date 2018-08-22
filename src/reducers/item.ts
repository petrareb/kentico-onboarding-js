import {
  SAVE_ITEM,
  TOGGLE_EDITED
} from '../constants/todoActionTypes';
import { ListItem } from '../models/ListItem';
import { Action } from '../actions/Action';

export const item = (state: ListItem = new ListItem(), action: Action): ListItem => {
  switch (action.type) {
    case TOGGLE_EDITED: {
      return state.with({
        isEdited: !state.isEdited
      });
    }
    case SAVE_ITEM: {
      return state.with({
        isEdited: false,
        text: action.payload.text
      });
    }
    default:
      return state;
  }
};
