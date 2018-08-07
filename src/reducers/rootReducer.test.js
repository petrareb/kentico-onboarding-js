import { createNewItem, rootReducer } from './rootReducer';
import { initialState } from '../store/store';
import { addNewItem, deleteItem, saveItem, toggleEdited } from '../actionCreators/actionCreators';

describe('createNewItem function ', () => {
  it('creates valid item', () => {
    const text = 'text';
    const newItem = createNewItem(text);
    expect(newItem.text === text)
      .toBeTruthy();
  });
});

describe('RootReducer ', () => {
  it('returns previous state when action is out of switch range', () => {
    const invalidAction = { type: 'INVALID ACTION' };
    const originalState = initialState;
    const newState = rootReducer(originalState, invalidAction);
    expect(originalState === newState)
      .toBeTruthy();
  });

  it('adds new item correctly (ADD_NEW_ITEM action)', () => {
    const text = 'something';
    const originalState = initialState;
    const addingAction = addNewItem(text);
    const newState = rootReducer(originalState, addingAction);
    expect(newState.items.length === originalState.items.length + 1
      && (newState.items.filter(item => item.text === text)).length > 0);
  });

  it('deletes item correctly (DELETE_ITEM action)', () => {
    const originalState = initialState;
    const itemToDelete = originalState.items.first();
    const deletingAction = deleteItem(itemToDelete.id);
    const newState = rootReducer(originalState, deletingAction);
    expect(newState.items.length === originalState.items.length - 1
      && (newState.items.filter(item => item.id === itemToDelete.id)).length === 0);
  });

  it('toggles property isEdited correctly (TOGGLE_EDITED action)', () => {
    const originalState = initialState;
    const itemToToggle = originalState.items.first();
    const togglingAction = toggleEdited(itemToToggle.id);
    const newState = rootReducer(originalState, togglingAction);
    expect(newState.items.length === originalState.items.length
      && (newState.items.get(itemToToggle.id).isEdited === !itemToToggle.isEdited))
      .toBeTruthy();
  });

  it('edits item correctly (SAVE_ITEM action)', () => {
    const originalState = initialState;
    const itemToEdit = originalState.items.first();
    const newText = 'newText';
    const editingAction = saveItem(itemToEdit.id, newText);
    const newState = rootReducer(originalState, editingAction);
    expect(newState.items.length === originalState.items.length
      && (newState.items.get(itemToEdit.id).text === newText))
      .toBeTruthy();
  });
});
