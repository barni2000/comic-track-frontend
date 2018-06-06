import { combineReducers } from 'redux';

import comics from './comics';
import publishers from './publishers';

const rootReducer = combineReducers({
  comics,
  publishers,
});

export default rootReducer;
