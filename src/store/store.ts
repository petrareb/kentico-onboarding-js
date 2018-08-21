import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose
} from 'redux';
import logger from 'redux-logger';
import { items } from '../reducers/items';
import { OrderedMap } from 'immutable';
import { initialValues } from '../constants/initialListValues';

const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({ items });

const initialState = { items: OrderedMap(initialValues) };

export const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(logger))
);
