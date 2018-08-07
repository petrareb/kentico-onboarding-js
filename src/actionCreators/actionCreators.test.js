import { addNewItem, deleteItem, toggleEdited, saveItem } from './actionCreators';
import { ADD_NEW_ITEM, DELETE_ITEM, TOGGLE_EDITED, SAVE_ITEM } from '../constants/actionTypes';

describe('Action creator addNewItem', () => {
  it('generates valid action', () => {
    const text = 'aaa';
    const addItemAction = addNewItem(text);
    expect(addItemAction.text === text
      && addItemAction.type === ADD_NEW_ITEM);
  });
});

describe('Action creator toggleEdited', () => {
  it('generates valid action', () => {
    const id = '1';
    const toggleEditedAction = toggleEdited(id);
    expect(toggleEditedAction.id === id
      && toggleEditedAction.type === TOGGLE_EDITED);
  });
});


describe('Action creator deleteItem', () => {
  it('generates valid action', () => {
    const id = '1';
    const deleteItemAction = deleteItem(id);
    expect(deleteItemAction.id === id
      && deleteItemAction.type === DELETE_ITEM);
  });
});

describe('Action creator saveItem', () => {
  it('generates valid action', () => {
    const id = '1';
    const text = 'aaa';
    const saveItemAction = saveItem(id, text);
    expect(saveItemAction.id === id
      && saveItemAction.text === text
      && saveItemAction.type === SAVE_ITEM);
  });
});
