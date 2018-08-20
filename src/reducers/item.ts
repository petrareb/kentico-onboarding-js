import {
  SAVE_ITEM,
  TOGGLE_EDITED
} from '../constants/todoActionTypes';
import { ListRecord } from '../models/ListItemRecord';
import { IAction } from '../actions/IAction';

export const item = (state: ListRecord = new ListRecord(), action: IAction) => {
  switch (action.type) {
    case TOGGLE_EDITED: {
      return state.merge({
        isEdited: !state.isEdited
      });
    }
    case SAVE_ITEM: {
      return state.merge({
        isEdited: false,
        text: action.payload.text
      });
    }
    default:
      return state;
  }
};
