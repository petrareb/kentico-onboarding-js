import { OrderedMap } from "immutable";
import { initialValues } from '../constants/initialListValues';
import { createStore } from 'redux';
import { rootReducer } from '../reducers/rootReducer';

const initialState = {
  items: OrderedMap(initialValues)
};

export const store = createStore(rootReducer, initialState);
