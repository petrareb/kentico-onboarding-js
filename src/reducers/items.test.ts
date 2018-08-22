import { OrderedMap } from "immutable";
import {
  items
} from './items';
import {
  addNewItem,
  deleteItem,
  saveItem,
  toggleEdited
} from '../actions/todoActions';
import { initialValues } from '../constants/initialListValues';
import { ListItem } from '../models/ListItem';
import { Action } from '../actions/Action';

describe('Items reducer ', () => {
  const originalState = OrderedMap<Guid, ListItem>(initialValues);

  it('returns previous state when action is unknown', () => {
    const invalidAction: Action = { type: 'INVALID ACTION', payload: '' };
    const expectedState = originalState;

    const newState = items(originalState, invalidAction);

    expect(expectedState).toEqual(newState);
  });

  it('adds new item correctly (ADD_NEW_ITEM action)', () => {
    const text = 'something';
    const addingAction = addNewItem(text);
    const newItem = new ListItem({
      id: addingAction.payload.id,
      text: addingAction.payload.text,
      isEdited: false
    });
    const expectedItems = originalState.set(newItem.id, newItem);

    const newItems = items(originalState, addingAction);

    expect(newItems).toEqual(expectedItems);
  });

  it('deletes item correctly (DELETE_ITEM action)', () => {
    const itemToDelete = new ListItem(originalState.first());
    const deletingAction = deleteItem(itemToDelete.id);
    const expectedState = originalState.delete(itemToDelete.id);

    const newState = items(originalState, deletingAction);

    expect(newState).toEqual(expectedState);
  });

  it('toggles property isEdited correctly (TOGGLE_EDITED action)', () => {
    const itemToToggle = new ListItem(originalState.first());
    const togglingAction: Action = toggleEdited(itemToToggle.id);
    const toggledItem: ListItem = itemToToggle.with({ isEdited: !itemToToggle.isEdited });
    const expectedState: ListValues = originalState.update(itemToToggle.id, () => toggledItem);

    const newState: ListValues = items(originalState, togglingAction);

    expect(newState.size).toEqual(originalState.size);
    expect(newState).toEqual(expectedState);
  });

  it('edits item correctly (SAVE_ITEM action)', () => {
    const itemToEdit = new ListItem(originalState.first());
    const newText = 'newText';
    const editingAction: Action = saveItem(itemToEdit.id, newText);
    const editedItem: ListItem = itemToEdit.with({
      isEdited: false,
      text: newText
    });
    const expectedState: ListValues = originalState.update(itemToEdit.id, () => editedItem);

    const newState: ListValues = items(originalState, editingAction);

    expect(newState.size).toEqual(expectedState.size);
    expect(newState).toEqual(expectedState);
  });

  it('uses default state in case undefined state is given as a param', () => {
    const defaultStateOfReducer = OrderedMap<Guid, ListItem>();
    const text = 'something';
    const addingAction: Action = addNewItem(text);
    const expectedState: ListValues = defaultStateOfReducer.set(addingAction.payload.id, new ListItem(addingAction.payload));
    const newState: ListValues = items(undefined, addingAction);

    expect(newState).toEqual(expectedState);
  });
});
