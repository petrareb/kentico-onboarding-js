import {
  ADD_NEW_ITEM,
} from '../constants/todoActionTypes';
import { addNewItemActionFactory } from './addNewItemActionFactory';

describe('AddNewItemActionFactory ', () => {
  it('creates correct action according to given parameters', () => {
    const id = '1';
    const text = 'text';
    const idGeneratingFunc = () => id;
    const expectedAction = ({
      type: ADD_NEW_ITEM,
      payload: {
        id,
        text
      }
    });

    const newAction = addNewItemActionFactory(idGeneratingFunc)(text);

    expect(expectedAction).toEqual(newAction);
  });
});
