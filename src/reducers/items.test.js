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
import { ListItemRecord } from '../models/ListItemRecord';

describe('Items reducer ', () => {
  const originalState = OrderedMap(initialValues);

  it('returns previous state when action is unknown', () => {
    const invalidAction = { type: 'INVALID ACTION' };
    const expectedState = originalState;

    const newState = items(originalState, invalidAction);

    expect(expectedState).toEqual(newState);
  });

  it('adds new item correctly (ADD_NEW_ITEM action)', () => {
    const text = 'something';
    const id = '1';
    const newItem = new ListItemRecord({
      id,
      text
    });
    const addingAction = addNewItem(text, id);
    const expectedItems = originalState.set(id, newItem);

    const newItems = items(originalState, addingAction);

    expect(newItems).toEqual(expectedItems);
  });

  it('deletes item correctly (DELETE_ITEM action)', () => {
    const itemToDelete = originalState.first();
    const deletingAction = deleteItem(itemToDelete.id);
    const expectedState = originalState.delete(itemToDelete.id);

    const newState = items(originalState, deletingAction);

    expect(newState).toEqual(expectedState);
  });

  it('toggles property isEdited correctly (TOGGLE_EDITED action)', () => {
    const itemToToggle = originalState.first();
    const togglingAction = toggleEdited(itemToToggle.id);
    const toggledItem = itemToToggle.merge({ isEdited: !itemToToggle.isEdited });
    const expectedState = originalState.update(itemToToggle.id, () => toggledItem);

    const newState = items(originalState, togglingAction);

    expect(newState.size).toEqual(originalState.size);
    expect(newState).toEqual(expectedState);
  });

  it('edits item correctly (SAVE_ITEM action)', () => {
    const itemToEdit = originalState.first();
    const newText = 'newText';
    const editingAction = saveItem(itemToEdit.id, newText);
    const editedItem = itemToEdit.merge({
      isEdited: false,
      text: newText
    });
    const expectedState = originalState.update(itemToEdit.id, () => editedItem);

    const newState = items(originalState, editingAction);

    expect(newState.size).toEqual(expectedState.size);
    expect(newState).toEqual(expectedState);
  });

  it('uses default state in case null state is given as a param', () => {
    const invalidAction = { type: 'INVALID ACTION' };
    const defaultState = OrderedMap(initialValues);

    const newState = items(undefined, invalidAction);

    expect(newState).toEqual(defaultState);
  });
});
