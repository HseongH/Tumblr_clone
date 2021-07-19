// LIBRARY
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

// REDUCER
import user from './modules/user';
import image from './modules/image';
import post from './modules/post';
import alarm from './modules/alarm';

// HISTORY
export const history = createBrowserHistory();

const rootReducer = combineReducers({ user, image, post, alarm });

const middlewares = [thunk.withExtraArgument({ history: history })];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const enhancer = applyMiddleware(...middlewares);
const store = compose(createStore(rootReducer, enhancer));

export default store;
