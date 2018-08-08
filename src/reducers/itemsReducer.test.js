import { createNewItem, items } from './items';
import { initialState } from '../store/store';
import { addNewItem, deleteItem, saveItem, toggleEdited } from '../actionCreators/publicActionCreator';
import { initialValues } from '../constants/initialListValues';
import { OrderedMap } from "immutable";

describe('createNewItem function ', () => {
  it('creates valid item', () => {
    const text = 'text';

    const newItem = createNewItem(text);

    expect(newItem.text).toEqual(text);
  });
});

describe('Items reducer ', () => {
  it('returns previous state when action is out of switch range', () => {
    const invalidAction = { type: 'INVALID ACTION' };
    const originalState = initialState;

    const newState = items(originalState, invalidAction);

    expect(originalState).toEqual(newState);
  });

  it('adds new item correctly (ADD_NEW_ITEM action)', () => {
    const text = 'something';
    const originalStateItems = initialState.items;
    const addingAction = addNewItem(text);
    const newStateItems = items(originalStateItems, addingAction);
    expect(newStateItems.size).toEqual(originalStateItems.size + 1);
    expect((newStateItems.filter(item => item.text === text)).size > 0);
  });

  it('deletes item correctly (DELETE_ITEM action)', () => {
    const originalStateItems = initialState.items;
    const itemToDelete = originalStateItems.first();
    const deletingAction = deleteItem(itemToDelete.id);

    const newStateItems = items(originalStateItems, deletingAction);

    expect(newStateItems.size).toEqual(originalStateItems.size - 1);
    expect((newStateItems.filter(item => item.id === itemToDelete.id)).size).toEqual(0);
  });

  it('toggles property isEdited correctly (TOGGLE_EDITED action)', () => {
    const originalStateItems = initialState.items;
    const itemToToggle = originalStateItems.first();
    const togglingAction = toggleEdited(itemToToggle.id);

    const newStateItems = items(originalStateItems, togglingAction);

    expect(newStateItems.size).toEqual(originalStateItems.size);
    expect(newStateItems.get(itemToToggle.id).isEdited).toEqual(!itemToToggle.isEdited);
  });

  it('edits item correctly (SAVE_ITEM action)', () => {
    const originalStateItems = initialState.items;
    const itemToEdit = originalStateItems.first();
    const newText = 'newText';
    const editingAction = saveItem(itemToEdit.id, newText);

    const newStateItems = items(originalStateItems, editingAction);

    expect(newStateItems.size).toEqual(originalStateItems.size);
    expect(newStateItems.get(itemToEdit.id).text).toEqual(newText);
  });

  it('uses default state in case null state is given as a param', () => {
    const invalidAction = { type: 'INVALID ACTION' };
    const defaultState = OrderedMap(initialValues);

    const newStateItems = items(undefined, invalidAction);

    expect(newStateItems).toEqual(defaultState);
  });
});
