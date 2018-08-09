import { OrderedMap } from "immutable";
import { initialValues } from '../constants/initialListValues';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { items } from '../reducers/items';

import logger from 'redux-logger';

export const initialState = {
  items: OrderedMap(initialValues)
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({ items });

export const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(logger))
);
