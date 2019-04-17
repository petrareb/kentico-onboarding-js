import { OrderedMap } from "immutable";
import {
  items
} from './items';
import {
  deleteItem,
  toggleEdited
} from '../../actions/baseActions';
import { ListItem } from '../../models/ListItem';
import { TodoListAction } from '../../actions/types/TodoListAction';

describe('Items reducer ', () => {
  const makeCoffeeItem = new ListItem({
    text: 'Make coffee',
    id: '5',
    isEdited: false,
    isFetching: false,
  });

  const sleepItem = new ListItem({
    text: 'Sleep',
    id: '13',
    isEdited: false,
    isFetching: false,
  });

  const initialValues = [
    [makeCoffeeItem.id, makeCoffeeItem],
    [sleepItem.id, sleepItem]
  ];

  const originalState = OrderedMap<Guid, ListItem>(initialValues);

  it('returns previous state when action is unknown', () => {
    const invalidAction: TodoListAction = {type: 'INVALID ACTION', payload: ''};
    const expectedState = originalState;

    const newState = items(originalState, invalidAction);

    expect(expectedState).toEqual(newState);
  });

  it('deletes item correctly (DELETE_ITEM action)', () => {
    const itemToDelete = new ListItem(originalState.first());
    const deletingAction = deleteItem(itemToDelete.id);
    const expectedState = originalState.delete(itemToDelete.id);

    const newState = items(originalState, deletingAction);

    expect(newState).toEqual(expectedState);
  });

  it('toggles property isEdited correctly (ListItem_ToggleEdited action)', () => {
    const itemToToggle = new ListItem(originalState.first());
    const togglingAction: TodoListAction = toggleEdited(itemToToggle.id);
    const toggledItem: ListItem = itemToToggle.with({ isEdited: !itemToToggle.isEdited });
    const expectedState: ListValues = originalState.update(itemToToggle.id, () => toggledItem);

    const newState: ListValues = items(originalState, togglingAction);

    expect(newState.size).toEqual(originalState.size);
    expect(newState).toEqual(expectedState);
  });
});
