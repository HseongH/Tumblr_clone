// LIBRARY
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

// HISTORY
export const history = createBrowserHistory();

const rootReducer = combineReducers({});

const middlewares = [thunk.withExtraArgument({ history: history })];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const enhancer = applyMiddleware(...middlewares);
const store = compose(createStore(rootReducer, enhancer));

export default store;
