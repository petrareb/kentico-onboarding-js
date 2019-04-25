import { OrderedMap } from 'immutable';
import { TodoListAction } from '../../actions/types/TodoListAction';
import {
  ListItem_Delete_Error,
  ListItem_Delete_Response,
  ListItem_Post_Error,
  ListItem_Post_Response,
} from '../../constants/todoActionTypes';

export const failedActions = (state = OrderedMap<Guid, TodoListAction>(), action: TodoListAction): OrderedMap<Guid, TodoListAction> => {
  switch (action.type) {
    case ListItem_Post_Response:
    case ListItem_Delete_Response: {
      return state.delete(action.payload.id);
    }
    case ListItem_Post_Error:
    case ListItem_Delete_Error: {
      return state.set(action.payload.id, action.payload.failedAction);
    }
    default:
      return state;
  }
};
