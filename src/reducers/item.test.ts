import { ListItem } from '../models/ListItem';
import { generateGuid } from '../utils/generateId';
import {
  saveItem,
  toggleEdited
} from '../actions/todoActions';
import { item } from './item';
import { Action } from '../actions/types/Action';

describe('ListItem reducer ', () => {
  it('toggles property isEdited correctly (TOGGLE_EDITED action)', () => {
    const itemToEdit = new ListItem({
      text: 'text',
      id: generateGuid(),
      isEdited: false
    });
    const expectedItem: ListItem = itemToEdit.with({isEdited: !itemToEdit.isEdited});
    const action: Action = toggleEdited(itemToEdit.id);

    const editedItem: ListItem = item(itemToEdit, action);

    expect(editedItem).toEqual(expectedItem);
  });

  it('saves item correctly (SAVE_ITEM action)', () => {
    const itemToEdit: ListItem = new ListItem({
      text: 'text',
      id: generateGuid(),
      isEdited: false
    });
    const newText = 'newText';
    const expectedItem: ListItem = itemToEdit.with({
      text: newText,
      isEdited: false
    });
    const action: Action= saveItem(itemToEdit.id, newText);

    const editedItem: ListItem = item(itemToEdit, action);

    expect(editedItem).toEqual(expectedItem);
  });

  it('returns default state in case invalid action is given as a param', () => {
    const invalidAction: Action = {type: 'INVALID ACTION', payload: ''};
    const defaultState = new ListItem();

    const newState: ListItem = item(undefined, invalidAction);

    expect(newState).toEqual(defaultState);
  });

  it('returns previous state when action is unknown', () => {
    const invalidAction: Action = {type: 'INVALID ACTION', payload: ''};
    const expectedState = new ListItem({
      text: 'text',
      id: generateGuid(),
      isEdited: false
    });

    const newState: ListItem = item(expectedState, invalidAction);

    expect(expectedState).toEqual(newState);
  });
});
