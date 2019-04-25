import {
  DELETE_ITEM,
  ListItem_GetAll_Error,
  ListItem_GetAll_Request,
  ListItem_GetAll_Response,
  SAVE_ITEM,
  ListItem_ToggleEdited, ListItem_Post_Request
} from '../../constants/todoActionTypes';
import { TodoListAction } from '../../actions/types/TodoListAction';

export const isFetchingAll = (state: boolean = true, action: TodoListAction): boolean => {
  switch (action.type) {
    case DELETE_ITEM:
    case ListItem_ToggleEdited:
    case SAVE_ITEM:
    case ListItem_GetAll_Response:
    case ListItem_GetAll_Error:
    case ListItem_Post_Request: {
      return false;
    }
    case ListItem_GetAll_Request: {
      return true;
    }
    default:
      return state;
  }
};
