import {
  ADD_NEW_ITEM,
  DELETE_ITEM,
  ListItem_GetAll_Error,
  ListItem_GetAll_Request,
  ListItem_GetAll_Response,
  SAVE_ITEM,
  ListItem_ToggleEdited
} from '../../constants/todoActionTypes';
import { TodoListAction } from '../../actions/types/TodoListAction';

export const isFetchingAll = (state: boolean = true, action: TodoListAction): boolean => {
  switch (action.type) {
    case ADD_NEW_ITEM:
    case DELETE_ITEM:
    case ListItem_ToggleEdited:
    case SAVE_ITEM:
    case ListItem_GetAll_Response:
    case ListItem_GetAll_Error:
      return false;
    case ListItem_GetAll_Request: {
      return true;
    }
    default:
      return state;
  }
};
