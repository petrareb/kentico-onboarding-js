import { OrderedMap } from "immutable";
import { initialValues } from '../constants/initialListValues';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import logger from 'redux-logger';

export const initialState = {
  items: OrderedMap(initialValues)
};

export const store = createStore(rootReducer, initialState, applyMiddleware(logger));
