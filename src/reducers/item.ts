import {
  SAVE_ITEM,
  TOGGLE_EDITED
} from '../constants/todoActionTypes';
import { ListItemRecord } from '../models/ListItemRecord';
import { IAction } from '../actions/IAction';

export const item = (state: ListItemRecord = new ListItemRecord(), action: IAction): ListItemRecord => {
  switch (action.type) {
    case TOGGLE_EDITED: {
      return new ListItemRecord({
        isNewlyEdited: !state.isEdited
      });
      //return new ListItemRecord(state.merge({
      //  isEdited: !state.isEdited
      //}));
    }
    case SAVE_ITEM: {
      return new ListItemRecord(state.merge({
        isEdited: false,
        text: action.payload.text
      }));
    }
    default:
      return state;
  }
};
