import { ListRecord } from '../models/ListItemRecord';
import { generateGuid } from '../utils/generateId';
import {
  saveItem,
  toggleEdited
} from '../actions/todoActions';
import { item } from './item';
import { items } from './items';
import { IAction } from '../actions/IAction';

describe('Item reducer ', () => {
  it('toggles property isEdited correctly (TOGGLE_EDITED action)', () => {
    const itemToEdit: ListRecord = new ListRecord({
      text: 'text',
      id: generateGuid(),
      isEdited: false
    });
    const expectedItem = itemToEdit.merge({isEdited: !itemToEdit.isEdited});
    const action = toggleEdited(itemToEdit.id);

    const editedItem = item(itemToEdit, action);

    expect(editedItem).toEqual(expectedItem);
  });

  it('saves item correctly (SAVE_ITEM action)', () => {
    const itemToEdit: ListRecord = new ListRecord({
      text: 'text',
      id: generateGuid(),
      isEdited: false
    });
    const newText = 'newText';
    const expectedItem = itemToEdit.merge({
      text: newText,
      isEdited: false
    });
    const action = saveItem(itemToEdit.id, newText);

    const editedItem = item(itemToEdit, action);

    expect(editedItem).toEqual(expectedItem);
  });

  it('returns default state in case invalid action is given as a param', () => {
    const invalidAction: IAction = {type: 'INVALID ACTION', payload: ''};
    const defaultState = new ListRecord();

    const newState = item(undefined, invalidAction);

    expect(newState).toEqual(defaultState);
  });

  it('returns previous state when action is unknown', () => {
    const invalidAction: IAction = {type: 'INVALID ACTION', payload: ''};
    const expectedState = new ListRecord({
      text: 'text',
      id: generateGuid(),
      isEdited: false
    });

    const newState = items(expectedState, invalidAction);

    expect(expectedState).toEqual(newState);
  });
});
