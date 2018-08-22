import {
  ADD_NEW_ITEM,
} from '../constants/todoActionTypes';
import { addNewItemActionFactory } from './addNewItemActionFactory';
import { Action } from './Action';

describe('AddNewItemActionFactory ', () => {
  it('creates correct action according to given parameters', () => {
    const id = '1';
    const text = 'text';
    const idGeneratingFunc = () => id;
    const expectedAction: Action = ({
      type: ADD_NEW_ITEM,
      payload: {
        id,
        text
      }
    });

    const newAction: Action = addNewItemActionFactory(idGeneratingFunc)(text);

    expect(expectedAction).toEqual(newAction);
  });
});
