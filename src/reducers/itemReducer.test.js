import { ListItemRecord } from '../models/ListItemRecord';
import { generateGuid } from '../utils/generateId';
import {
  saveItem,
  toggleEdited
} from '../actionCreators/publicActionCreator';
import { item } from './item';

describe('Item reducer ', () => {
  it('toggles property isEdited correctly (TOGGLE_EDITED action)', () => {
    const itemToEdit = new ListItemRecord({
      text: 'text',
      id: generateGuid(),
      isEdited: false
    });
    const action = toggleEdited(itemToEdit.id);

    const editedItem = item(itemToEdit, action);

    expect(editedItem.isEdited)
      .toEqual(!itemToEdit.isEdited);
  });

  it('saves item correctly (SAVE_ITEM action)', () => {
    const itemToEdit = new ListItemRecord({
      text: 'text',
      id: generateGuid(),
      isEdited: false
    });
    const newText = 'newText';
    const action = saveItem(itemToEdit.id, newText);

    const editedItem = item(itemToEdit, action);

    expect(editedItem.isEdited)
      .toEqual(false);
    expect(editedItem.text)
      .toEqual(newText);
  });

  it('uses default state in case null state is given as a param', () => {
    const invalidAction = { type: 'INVALID ACTION' };
    const defaultState = new ListItemRecord();

    const newState = item(undefined, invalidAction);

    expect(newState).toEqual(defaultState);
  });
});
