import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose
} from 'redux';
import logger from 'redux-logger';
import { items } from '../reducers/items';

const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({ items });

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(logger))
);
