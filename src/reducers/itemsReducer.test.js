import { createNewItem, items } from './items';
import { initialState } from '../store/store';
import { addNewItem, deleteItem, saveItem, toggleEdited } from '../actionCreators/actionCreators';

describe('createNewItem function ', () => {
  it('creates valid item', () => {
    const text = 'text';

    const newItem = createNewItem(text);

    expect(newItem.text).toEqual(text);
  });
});

describe('RootReducer ', () => {
  it('returns previous state when action is out of switch range', () => {
    const invalidAction = { type: 'INVALID ACTION' };
    const originalState = initialState;

    const newState = items(originalState, invalidAction);

    expect(originalState).toEqual(newState);
  });

  // TODO
  it('adds new item correctly (ADD_NEW_ITEM action)', () => {
    const text = 'something';
    const originalState = initialState;
    const addingAction = addNewItem(text);
    const newState = items(originalState, addingAction);
    expect(newState.items.length).toEqual(originalState.items.length + 1);
    expect((newState.items.filter(item => item.text === text)).length > 0);
  });

  it('deletes item correctly (DELETE_ITEM action)', () => {
    const originalState = initialState;
    const itemToDelete = originalState.items.first();
    const deletingAction = deleteItem(itemToDelete.id);

    const newState = items(originalState, deletingAction);

    expect(newState.items.length).toEqual(originalState.items.length - 1);
    expect((newState.items.filter(item => item.id === itemToDelete.id)).length).toEqual(0);
  });

  it('toggles property isEdited correctly (TOGGLE_EDITED action)', () => {
    const originalState = initialState;
    const itemToToggle = originalState.items.first();
    const togglingAction = toggleEdited(itemToToggle.id);

    const newState = items(originalState, togglingAction);

    expect(newState.items.length).toEqual(originalState.items.length);
    expect(newState.items.get(itemToToggle.id).isEdited).toEqual(!itemToToggle.isEdited);
  });

  it('edits item correctly (SAVE_ITEM action)', () => {
    const originalState = initialState;
    const itemToEdit = originalState.items.first();
    const newText = 'newText';
    const editingAction = saveItem(itemToEdit.id, newText);

    const newState = items(originalState, editingAction);

    expect(newState.items.length).toEqual(originalState.items.length);
    expect(newState.items.get(itemToEdit.id).text).toEqual(newText);
  });

  it('uses default state in case null state is given as a param', () => {
    const originalState = null;
   
  });
});

// TODO: otestuj state = default value
