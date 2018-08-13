import { OrderedMap } from "immutable";
import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose
} from 'redux';
import logger from 'redux-logger';
import { initialValues } from '../constants/initialListValues';
import { items } from '../reducers/items';


export const initialState = {
  items: OrderedMap(initialValues)
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({ items });

export const store = createStore(
  reducers,
  // initialState,
  composeEnhancers(applyMiddleware(logger))
);
