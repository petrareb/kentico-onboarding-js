import {
  createStore,
  applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { OrderedMap } from 'immutable';
import { initialValues } from '../constants/initialListValues';
import { reducers } from '../reducers/applicationReducers';

const initialState = { items: OrderedMap(initialValues) };

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(logger))
);
