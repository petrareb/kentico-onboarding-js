import {
  SAVE_ITEM,
  ListItem_ToggleEdited,
  ListItem_Post_Response,
  ListItem_Post_Error,
} from '../../constants/todoActionTypes';
import { ListItem } from '../../models/ListItem';
import { TodoListAction } from '../../actions/types/TodoListAction';

export const item = (state: ListItem = new ListItem(), action: TodoListAction): ListItem => {
  switch (action.type) {
    case ListItem_ToggleEdited: {
      return state.with({
        isEdited: !state.isEdited
      });
    }
    case SAVE_ITEM: {
      return state.with({
        isEdited: false,
        text: action.payload.text,
        isFetching: true,
      });
    }
    case ListItem_Post_Response:
    case ListItem_Post_Error:
    {
      return state.with({
        isFetching: false,
      });
    }
    default:
      return state;
  }
};
