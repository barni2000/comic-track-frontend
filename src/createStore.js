import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import rootReducer from './reducers';

const middlewares = [];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

middlewares.push(thunk);

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares)
);

export default store;
