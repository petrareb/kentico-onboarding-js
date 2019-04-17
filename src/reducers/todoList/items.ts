import { OrderedMap } from 'immutable';
import {
  ADD_NEW_ITEM,
  DELETE_ITEM,
  SAVE_ITEM,
  ListItem_ToggleEdited, ListItem_GetAll_Response
} from '../../constants/todoActionTypes';
import { item } from './item';
import { ListItem } from '../../models/ListItem';
import { TodoListAction } from '../../actions/types/TodoListAction';

export const items = (state = OrderedMap<string, ListItem>(), action: TodoListAction): OrderedMap<string, ListItem> => {
  switch (action.type) {
    case ListItem_GetAll_Response: {
      return OrderedMap<Guid, ListItem>(action.payload.items.map((listItem: ListItem) => {
        return [listItem.id, listItem];
      }));
    }
    case ADD_NEW_ITEM: {
      return state.set(action.payload.item.id, action.payload.item);
    }
    case DELETE_ITEM: {
      return state.delete(action.payload.id);
    }
    case ListItem_ToggleEdited: {
      const itemToEdit = state.get(action.payload.id);
      const editedItem = item(itemToEdit, action);
      return state.update(action.payload.id, () => editedItem);
    }
    case SAVE_ITEM: {
      const itemToEdit = state.get(action.payload.id);
      const editedItem = item(itemToEdit, action);
      return state.update(action.payload.id, () => editedItem);
    }
    default:
      return state;
  }
};
